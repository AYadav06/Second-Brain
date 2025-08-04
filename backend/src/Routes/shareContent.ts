import { Router } from "express";
import { authMiddleware } from "../middleware/auth";

const shareRouter=Router();

shareRouter.post("/share",authMiddleware,(req,res)=>{
})