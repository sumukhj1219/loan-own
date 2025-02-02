import { NextRequest, NextResponse } from "next/server";
import { LangflowClient } from "@/utils/langflowClient";

const applicationToken = process.env.LANGFLOW_TOKEN;
const langflowClient = new LangflowClient("https://api.langflow.astra.datastax.com", applicationToken);

export async function POST(request) {
  try {
   
    const { input } = await request.json();
    if (!input?.trim() ) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const flowIdOrName = "f45c461b-a56f-45a4-90f0-6d6e4913a059";
    const langflowId = "a6481d0a-f2e0-446a-81f3-ae7d01de2cc9"; 

    const prompt = `Title: ${input}`;

    const response = await langflowClient.runFlow(
      flowIdOrName,
      langflowId,
      prompt,
      "chat", 
      "chat", 
      {}, 
      false, 
      (data) => console.log("Received:", data),
      (message) => console.log("Stream Closed:", message),
      (error) => console.log("Stream Error:", error)
    );

    if (response && response.outputs) {
      const flowOutputs = response.outputs[0];
      const firstComponentOutputs = flowOutputs.outputs[0];
      const output = firstComponentOutputs.outputs.message;

      return NextResponse.json({ message: "Success", data: output.message.text }, { status: 200 });
    }

    return NextResponse.json({ message: "No valid output received from Langflow" }, { status: 500 });
    
  } catch (error) {
    console.error("Error in chat route:", error);
    return NextResponse.json(
      { message: "Internal server error at chat route", error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
