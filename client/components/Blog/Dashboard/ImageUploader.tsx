"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_UPLOAD_PRESET");

    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    onUpload(data.secure_url);
    setLoading(false);
  };

  return (
    <Input
      type="file"
      accept="image/*"
      onChange={handleUpload}
      disabled={loading}
    />
  );
}
