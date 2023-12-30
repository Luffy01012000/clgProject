import jwt from "jsonwebtoken";
import crypto from "node:crypto";

export default async function Ctoken (){
  return crypto.randomUUID();
}

const jwtToken = async (id: any, username: string, email: string) => {
  const tokenOption = {
    id,
    username,
    email,
  };

  try {
    return jwt.sign(
      {
        data: tokenOption,
      },
      "foobar",
    //   `${process.env.ACCESS_TOKEN_SECRET}`,
      { expiresIn: "1min" }
    );
    //   console.log(jwttoken);
  } catch (error) {
    console.log(error);
  }
};

export { jwtToken };
