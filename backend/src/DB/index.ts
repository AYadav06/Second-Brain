import mongoose, { model, Schema, Types } from "mongoose";
const ObjectId = Schema.ObjectId;
mongoose.connect("mongodb+srv://amityadav0612:PcvZ7RGmYPJon1LY@cluster0.ysumnh1.mongodb.net/Second-Brain");

const user = new Schema({
  email:{type:String,required:true,unique:true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const tag = new Schema({
  title: { type: String, required: true, unique: true },
});
export const contentTypes = ["Images", "video", "article", "audio"] as const;

const content = new Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: "tag" }],
  userId: { type: Types.ObjectId, ref: "user" },
});
const link = new Schema({
  hash: { type: String, required: true },
  userId: { type: Types.ObjectId, ref: "user", required: true },
});

export const userModel = model("userModel", user);
export const tagModel = model("tagModel", tag);
export const contentModel = model("contentModel", content);
export const linkModel = model("linkModel", link);

