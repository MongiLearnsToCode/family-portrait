import { GoogleGenerativeAI } from "@google/genai";
import fetch from "node-fetch";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

async function urlToGenerativePart(url: string, mimeType: any) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  return {
    inlineData: {
      data: Buffer.from(buffer).toString("base64"),
      mimeType,
    },
  };
}

export async function POST(req: Request) {
  const { imageUrls } = await req.json();

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Create a family portrait from these images. The portrait should be in a realistic style, with a neutral background. The final image should have a watermark in the bottom right corner that says 'Made with Family Portrait AI'.";

  try {
    const imageParts = await Promise.all(
      imageUrls.map((url: string) => urlToGenerativePart(url, "image/jpeg"))
    );

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = result.response;
    const text = response.text();

    return new Response(JSON.stringify({ text }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error generating content:", error);
    return new Response(JSON.stringify({ error: "Failed to generate content" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}