import { Request,Response,NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const JWT_User=process.env.JWT_SECRET;

if (!JWT_User) {
    throw new Error(' environment variables are not set!');
  }
console.log("jwt_user auth is ",JWT_User);
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
    const decoded=jwt.verify(token,JWT_User);
    req.user=decoded;
    next();
} catch (error) {
     return res.status(401).json({ message: "Unauthorized: Invalid token" });
    
}

}