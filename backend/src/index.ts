import express from "express";
import dotenv from 'dotenv';
import { userRouter } from "./Routes/userRoute";
const app=express();
app.use(express.json())
dotenv.config();

const PORT=process.env.PORT;

app.use("/api/v1",userRouter)
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})