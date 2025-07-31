import mongoose, { model, Schema, Types } from "mongoose";
const ObjectId = Schema.ObjectId;

const user = new Schema({
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

const userModel = model("userModel", user);
const tagModel = model("tagModel", tag);
const contentModel = model("contentModel", content);
const linkModel = model("linkModel", link);

module.exports = {
  userModel,
  tagModel,
  contentModel,
  linkModel,
};
