import { model, Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const ArticleSchema = new Schema(
  {
    slug: {
      type: String,
      lowercase: true,
      required: true,
      unique: true,
    },
    title: { type: String, required: true },
    description: { type: String },
    body: { type: String },
    tags: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

ArticleSchema.path("createdAt").immutable(true);
ArticleSchema.plugin(uniqueValidator);

export const Article = model("Article", ArticleSchema);
