import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/ApiError.utils";
import { asyncHandler } from "../utils/asyncHandler.utils";
import ApiResponse from "../utils/ApiResponse.utils";
import prisma from "./prisma.controller";
import {  sendVerificationMail } from "../utils/sendMail.utils";
import { jwtToken } from "../utils/Token.utils";

interface User {
  username: string;
  password: string;
  email: string;
}
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  //In production we create separate file for validation
  const { email, username, password }: User = req.body;
  if ([email, username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await prisma.users.findMany({
    where: {
      OR: [
        {
          userName: `${username}`,
        },
        {
          email: `${email}`,
        },
      ],
    },
  });
  // console.log(existedUser);
  if (existedUser.length > 0 && existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const token = await jwtToken(
    process.env.ACCESS_TOKEN_SECRET,
    username,
    email
  );
  console.log("token:", token);

  const hashedPass = await bcrypt.hash(password, 10);
  const userData = {
    email,
    password: hashedPass,
    userName: username.toLowerCase(),
    Token: token,
  };
  const user = await prisma.users.create({
    // data: {
    //   email: `${email}`,
    //   password: `${password}`,
    //   userName: `${username.toLowerCase()}`,
    // },
    data: userData,
  });

  const createdUser = await prisma.users.findMany({
    where: {
      userName: username.toLowerCase(),
    },
  });

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  await sendVerificationMail(
    email,
    username,
    `http://localhost:8001/api/v1/users/verify/${token}`
  ).catch(console.error);

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        createdUser,
        "User registred successfully! Please verify your e-mail"
      )
    );
});

const verifyMail = asyncHandler(async (req: Request, res: Response) => {
  const token = req.params.token;
  // console.log("query:", req.query);
  console.log("params:", token);
  // const checkIsAlreadyVerified = async()=>{
  // }
  if (!token && token === undefined) {
    throw new ApiError(404, "Invalid Token");
  }
  const isVerified = await prisma.users.update({
    where: {
      Token: token,
    },
    data: {
      Token: "",
      isVerified: true,
    },
  });
  return res
    .status(201)
    .json(new ApiResponse(200, isVerified, "User verified successfully!"));

  // res throw new ApiError(500, "something went wrong!");
});

interface loginData {
  username: string;
  password: string;
}

const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, password }: loginData = req.body;
  if ([username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  const userExists = await prisma.users.findUnique({
    where: {
      userName: username,
    },
  });
  console.log("userexists:", userExists);

  if (!userExists) {
    throw new ApiError(404, "User with email or username does not exists");
  }
  // if (userExists.isVerified === false) {
  //   throw new ApiError(400, "User is not verified!");
  // }
  const isPassExists = await bcrypt.compare(password, userExists.password);

  if (!isPassExists) {
    throw new ApiError(400, "Invalid Password");
  }

  const token = await jwtToken(userExists.userUUID, username, userExists.email);

  res.cookie("uid", token, {
    domain: "localhost",
    path: "/",
    secure: false,
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 60),
  });
  res.header("Authorization", `  ${token}`);
  return res
    .status(201)
    .json(new ApiResponse(200, token, "User successfully LoggedIn!"));
});

const getall = asyncHandler(async (req: Request, res: Response) => {
  const movieData = await prisma.movie_cinemas.findMany();
  return res.status(302).json(new ApiResponse(200, movieData, "all data"));
});
export { registerUser, getall, verifyMail, loginUser };
