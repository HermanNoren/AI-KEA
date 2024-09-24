import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an Open API Client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// Set runtime to edge, for quicker responses
export const runtime = "edge";

export async function POST(req, res) {
  // Extract message prompt from ai request
  const { messages } = await req.json();
  console.log("messages", messages);

  // Ask OpenAI for stream chat completion
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        // We tell the AI how it is supposed to behave when writing a response
        role: "system",
        content:
          "You are a digital IKEA assistant" +
          "You are here to help people find information on IKEA products" +
          "You adress people as employee. You always reply professionally, courteously and reassuringly" +
          "You have a positive attitude and bubbly personality",
        max_tokens: 500,
      },
      ...messages,
    ],
    stream: true,
    temperature: 1,
    max_tokens: 500,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
