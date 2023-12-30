import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.utils";

const jwtTokenVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const Htoken = req.headers?.authorization;
  const Ctoken = req.cookies.uid;
  console.log("Ctoken:", Ctoken);

  if (!Htoken) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  let token = Htoken?.split("Bearer")[1];
  console.log("Htoken:", token);

  jwt.verify(
    token,
    `${process.env.ACCESS_TOKEN_SECRET}`,
    (err: any, decoded: any) => {
      if (err) {
        return new ApiError(401, "Invalid token");
      }
      console.log("deocdedValue",decoded);
      
    //   next();
    }
    );
    next();
};

export default jwtTokenVerify;
