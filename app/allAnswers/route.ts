import { NextRequest } from "next/server";

import allAnswers, {
  negativeAnswers,
  neutralAnswers,
  positiveAnswers,
} from "@/utils/answers";
import { failOptions, successOptions } from "../headers";
import { answerObject } from "@/utils/types";

function getAllAnswers(arr: Array<answerObject>, n: number) {
  if (n === 0) return arr;
  else {
    if (n > arr.length) {
      throw new RangeError("Requested number of elements exceeds array length");
    }
    const shuffled = arr.slice();

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, n);
  }
}

function getTypeAnswers(type: string, n: number): Array<answerObject> {
  switch (type) {
    case "positive":
      return getAllAnswers(positiveAnswers, n);
    case "neutral":
      return getAllAnswers(neutralAnswers, n);
    case "negative":
      return getAllAnswers(negativeAnswers, n);
    case "all":
      return getAllAnswers(allAnswers, n);
    default:
      throw new Error(
        'Invalid type specified, choose "positive", "negative", "neutral" or "all"'
      );
  }
}

/**
 *
 * @example ```/allAnswers?type={ positive | neutral | negative }```
 * @example ```/allAnswers?t={ positive | neutral | negative }```
 *
 */
export async function GET(req: NextRequest): Promise<Response> {
  try {
    const t: string =
      new URL(req.url).searchParams.get("type") ||
      new URL(req.url).searchParams.get("t") ||
      "";
    const n: string =
      new URL(req.url).searchParams.get("number") ||
      new URL(req.url).searchParams.get("n") ||
      "";
    const type: string = t.trim().toLowerCase() || "all";
    const number: number = Number(n.trim()) || 0;
    return new Response(
      JSON.stringify({
        status: "success",
        data: {
          type,
          number: number !== 0 ? number : undefined,
          allAnswers: getTypeAnswers(type, number),
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
