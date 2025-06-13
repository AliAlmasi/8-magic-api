import { NextRequest } from "next/server";

import { randomAnswer } from "@/utils/randomAnswer";
import { failOptions, successOptions } from "../headers";
import { answerObject } from "@/utils/types";
import { POSTbody } from "@/utils/types";

/**
 *
 * @example ```/getAnswer?question=your_question```
 * @example ```/getAnswer?q=your_question```
 *
 */
export async function GET(req: NextRequest) {
  try {
    const question: string =
      new URL(req.url).searchParams.get("question") ||
      new URL(req.url).searchParams.get("q") ||
      "";
    const { answer, type, emoji }: answerObject = randomAnswer();

    return new Response(
      JSON.stringify({
        status: "success",
        data: {
          answer: {
            question: question || undefined,
            answer,
            emoji,
            type,
          },
        },
      }),
      successOptions("Here's your answer")
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        status: "fail",
        message: error.message || "An unknown error occurred",
      }),
      failOptions(500)
    );
  }
}

/**
 *
 * @example ```/getAnswer -- POST body: { question: "your_question" }```
 */
export async function POST(req: NextRequest) {
  try {
    const body: POSTbody = await req.json();
    const question: string = body?.question || body?.q || "";
    const { answer, type, emoji }: answerObject = randomAnswer();

    return new Response(
      JSON.stringify({
        status: "success",
        data: {
          answer: {
            question: question || undefined,
            answer,
            emoji,
            type,
          },
        },
      }),
      successOptions("Here's your answer")
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        status: "error",
        message:
          error.message ||
          "An unknown error occurred while processing your request",
      }),
      failOptions(400, "Wrong request")
    );
  }
}
