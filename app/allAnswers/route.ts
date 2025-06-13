import { NextRequest } from "next/server";

import allAnswers, {
  negativeAnswers,
  neutralAnswers,
  positiveAnswers,
} from "@/utils/answers";
import { failOptions, successOptions } from "../headers";
import { answerObject } from "@/utils/types";

function getAllTypeAnswers(type: string): Array<answerObject> {
  switch (type) {
    case "positive":
      return positiveAnswers;
    case "neutral":
      return neutralAnswers;
    case "negative":
      return negativeAnswers;
    case "all":
      return allAnswers;
    default:
      throw new Error(
        'Invalid type specified, choose { positive | negative | neutral } or "all"'
      );
  }
}

/**
 *
 * @example ```/allAnswers?type={ positive | neutral | negative }```
 * @example ```/allAnswers?t={ positive | neutral | negative }```
 *
 */
export async function GET(req: NextRequest) {
  try {
    const t: string =
      new URL(req.url).searchParams.get("type") ||
      new URL(req.url).searchParams.get("t") ||
      "";
    const type: string = t.trim() || "all";
    return new Response(
      JSON.stringify({
        status: "success",
        data: {
          type,
          allAnswers: getAllTypeAnswers(type),
        },
      }),
      successOptions("Got all the answers")
    );
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        status: "fail",
        message: error.message || "An unknown error occurred",
      }),
      failOptions()
    );
  }
}
