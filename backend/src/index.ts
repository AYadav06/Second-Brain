import express from "express";
import "dotenv/config";
import { userRouter } from "./Routes/user-Route";
const app=express();
app.use(express.json())



app.use("/api/v1",userRouter)
app.listen(3000,()=>{
    console.log("server is running...");
})