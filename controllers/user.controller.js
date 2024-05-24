import { User } from "../models/user.model.js";
import { handleErrors } from "../utils/error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ message: "USer Registered Successfully" });
  } catch (error) {
    next(error);
  }
};
