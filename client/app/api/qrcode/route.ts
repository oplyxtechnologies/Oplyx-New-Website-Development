// app/api/qrcode/route.ts
import { NextResponse } from "next/server";
import QRCode from "qrcode";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text");

  if (!text) {
    return NextResponse.json({ error: "Missing text" }, { status: 400 });
  }

  try {
    const qr = await QRCode.toDataURL(text);
    return NextResponse.json({ qr });
  } catch (err) {
    console.error(err); // ✅ log it
    return NextResponse.json(
      { error: "Failed to generate QR" },
      { status: 500 }
    );
  }
}
