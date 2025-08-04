import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import { contentModel } from "../DB";

export const contentRouter = Router();

contentRouter.post("/content", authMiddleware, async (req, res) => {
  const { type, link, title, tags } = req.body;
  try {
    const content = await contentModel.create({
      title: title,
      type: type,
      link: link,
      tags: tags,
    });
    res.status(200).json({
      message: "brain is created ..",
    });
  } catch (error) {
    res.status(411).json({
      message: "Something went Wrong",
    });
  }
});


contentRouter.get("/content",authMiddleware,async(req,res)=>{

  try{
    const data=await contentModel.find({
      
    })

  }
  catch{

  }

})