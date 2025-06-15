import { NextRequest } from "next/server";

import { randomAnswer } from "@/utils/randomAnswer";
import { failOptions, successOptions } from "../headers";
import { answerObject } from "@/utils/types";
import { POSTbody } from "@/utils/types";

function questionString(rawQ: string): string {
  try {
    let q: string = rawQ;
    if (!rawQ.includes("?", -1)) q += "?";
    q = q.replaceAll(/[+_-]/g, " ");
    return q;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

/**
 *
 * @example ```/getAnswer?question=your_question```
 * @example ```/getAnswer?q=your_question```
 *
 */
export async function GET(req: NextRequest): Promise<Response> {
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
            question: questionString(question) || undefined,
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
 * @example ```/getAnswer -- POST body: { q: "your_question" }```
 *
 */
export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body: POSTbody = await req.json();
    const question: string = body?.question || body?.q || "";
    const { answer, type, emoji }: answerObject = randomAnswer();

    return new Response(
      JSON.stringify({
        status: "success",
        data: {
          answer: {
            question: questionString(question) || undefined,
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
        message:
          error.message ||
          "An unknown error occurred while processing your request",
      }),
      failOptions(400, "Wrong request")
    );
  }
}
