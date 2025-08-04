import { Request,Response,NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET="adjdfjldfkjldkj2346523";

interface AuthenticatedRequest extends Request {
  user?: string | jwt.JwtPayload;
}
export  const  authMiddleware=async (req:AuthenticatedRequest,res:Response,next:NextFunction)=>{

const authHeader=req.headers.authorization;

if(!authHeader || !authHeader.startsWith("Bearer ")){
    return res.status(411).json({message:"unathorized : no token provided"})
}

const token=authHeader.split(" ")[1];

try {
    const decoded=jwt.verify(token,JWT_SECRET);
    req.user=decoded;
    next();
} catch (error) {
     return res.status(401).json({ message: "Unauthorized: Invalid token" });
    
}

}