import { NextRequest } from "next/server";

import { randomAnswer } from "@/utils/randomAnswer";
import headers from "../headers";

const successOptions = {
  status: 200,
  statusText: "Here's your answer",
  headers,
};

/**
 *
 * @example /getAnswer?question=your_question
 */
export async function GET(req: NextRequest) {
  try {
    const question = new URL(req.url).searchParams.get("question");
    const { answer, type, emoji } = randomAnswer();

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
      successOptions
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        status: "fail",
        message: error.message || "An unknown error occurred",
      }),
      {
        status: 500,
        statusText: "Error",
        headers,
      }
    );
  }
}

/**
 *
 * @example /getAnswer -- POST body: { question: "your_question" }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const question = body?.question;
    const { answer, type, emoji } = randomAnswer();

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
      successOptions
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        status: "error",
        message:
          error.message ||
          "An unknown error occurred while processing your request",
      }),
      {
        status: 400,
        headers,
      }
    );
  }
}
