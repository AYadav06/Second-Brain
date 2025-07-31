import { Router } from "express";
import { z } from "zod";
import { userModel } from "../DB";
import bcrypt from "bcrypt"; 

export const userRouter = Router();

// Password strength validation schema
const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(20, "Password must be at most 20 characters")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[0-9]/, "Must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Must contain at least one special character");

// Signup schema
const signUpSchema = z.object({
  username: z.string().min(2).max(10),
  email: z.string().email(),
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

    // 3. Hash password asynchronously (bcrypt default cost = 10)
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    // 5. Respond with success
    return res.status(201).json({
      message: "User signup successful",
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation failed",
      });
    }

    console.error("Signup error:", err);
    return res.status(500).json({
      message: "Server error",
    });
  }
});
