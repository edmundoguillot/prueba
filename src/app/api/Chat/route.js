import { NextResponse } from "next/server";
import ServicioChatbot from "../(models)/ServicioChatbots";

export async function GET() {
  try {
    const chatbots = await ServicioChatbot.find();
    return NextResponse.json({ chatbots }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
