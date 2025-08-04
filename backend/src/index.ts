import express from "express";
import { userRouter } from "./Routes/userRoute";
import { contentModel } from "./DB";
import { contentRouter } from "./Routes/contentRoute";
import { PORT } from "./config";
const app=express();
app.use(express.json())



app.use("/api/v1",userRouter);
app.use("/api/v1",contentRouter);
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})