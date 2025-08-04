import express from "express";
import dotenv from 'dotenv';
import { userRouter } from "./Routes/userRoute";
import { contentModel } from "./DB";
import { contentRouter } from "./Routes/contentRoute";
const app=express();
app.use(express.json())
dotenv.config();

const PORT=process.env.PORT;

app.use("/api/v1",userRouter);
app.use("/api/v1",contentRouter);
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})