import { Router } from "express";
import {  z } from "zod";
import { userModel } from "../DB";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import "dotenv/config";
  

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("FATAL ERROR: JWT_SECRET is not defined in .env file.");
}

export const userRouter = Router();


const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(20, "Password must be at most 20 characters")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[0-9]/, "Must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Must contain at least one special character");


export const signUpSchema = z.object({
  username: z.string().min(2).max(10),
  email: z.email("invlid email address"),
  password: passwordSchema,
});

userRouter.post("/signup", async (req, res) => {
  try {
  
    const { username, email, password } = signUpSchema.parse(req.body);

    
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(403).json({
        message: "User already exists with this username",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

 
    await userModel.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      message: "User signup successful",
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation failed",
        errors: err,
      });
    }

    console.error("Signup error:", err);
    return res.status(500).json({
      message: "Server error",
    });
  }
});


userRouter.post("/signin", async (req, res) => {
  const { username, email, password } = signUpSchema.parse(req.body);

  try {
    const user = await userModel.findOne({
      username,
      email,
    });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        const token = jwt.sign(
          {
            username,
          },
          JWT_SECRET
        );
        return res.json({ token });
      } else {
        return res.status(401).json({ message: "Invalid password" });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Signin error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

