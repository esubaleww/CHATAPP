import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, ENV.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none", //use strict for CSRF attacks
    secure: true, // if u want secure.NODE_ENV === "development" ? true : false,
  });
  return token;
};
