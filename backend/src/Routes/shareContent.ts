import { Router, Request, Response } from "express";
import { authMiddleware } from "../middleware/auth";
import { contentModel, linkModel, userModel } from "../DB";
import { random } from "../utils";
import { AuthenticatedRequest } from "../middleware/auth";

export const shareRouter = Router();

shareRouter.post(
    "/share",
    authMiddleware,
    async (req: Request, res: Response) => {
        const { share } = req.body;
        const { userId } = req as AuthenticatedRequest;

        try {
            if (share) {
                const existingLink = await linkModel.findOne({
                    userId: userId,
                });

                if (existingLink) {
                    res.json({
                        hash: existingLink.hash,
                    });
                    return;
                }
                const hash = random(10);

                const link = await linkModel.create({
                    hash: hash,
                    userId: userId,
                });
                return res.status(201).json({ message: "Link shared", link });
            } else {
                await linkModel.deleteOne({ userId: userId });
                return res.status(200).json({ message: "Link unshared" });
            }
        } catch (e) {
            return res
                .status(500)
                .json({ message: "Server error while sharing link" });
        }
    }
);


shareRouter.get("/:sharelink",async(req,res)=>{

    const hash=req.params.sharelink;

    try {

        const link=await linkModel.findOne({
            hash,

        })

        if(!link){
            res.status(411).json({
                message:"link not found"
            })
            return;
        }

        const content=await contentModel.findOne({
            userId:link.userId
        })
        const user=await userModel.findOne({
            _id:link.userId
        })

        if(!user){
            res.status(411).json({
                message:"user not found "
            })
            return;
        }

        res.json({
        username: user.username,
        content: content
    })

        
    } catch (error) {
        res.json({
            message:"error while fetching  link."
        })
        
    }
})