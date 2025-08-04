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
      tags: [],
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
  const userId=req.body;

  try{
    const content=await contentModel.find({
      userId:userId
      
    }).populate("userId","username")

    res.json({
      content
    })
  }
  catch{
res.json({
  message:"error while fetching tweets."
})
  }

})


contentRouter.delete("/content/:contentId", authMiddleware, async (req, res) => {
  const { contentId } = req.params;
  // @ts-ignore
  const userId = req.userId;

  try {
    const content = await contentModel.findById(contentId);

    if (!content) {
      return res.status(404).json({ message: "Content not found" });
    }

    if (content.userId !== userId) {
      return res.status(403).json({ message: "Action not allowed" });
    }

    await contentModel.deleteOne({ _id: contentId });

    res.json({ message: "Content deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

