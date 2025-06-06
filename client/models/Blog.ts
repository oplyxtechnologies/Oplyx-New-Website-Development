import { Schema, model, models, Document } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  content: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite issues in dev with hot-reload
const Blog = models.Blog || model<IBlog>("Blog", BlogSchema);

export default Blog;
