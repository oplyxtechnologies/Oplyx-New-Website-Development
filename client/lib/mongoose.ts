// lib/mongoose.ts
import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB(): Promise<void> {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables");
  }

  if (isConnected) {
    console.log("🔁 Reusing existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(mongoURI, {
      dbName: "oplyx_blog",
    });
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", (error as Error).message);
    throw error;
  }
}
