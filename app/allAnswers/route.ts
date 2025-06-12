import { NextRequest } from "next/server";

import allAnswers, {
  negativeAnswers,
  neutralAnswers,
  positiveAnswers,
} from "@/utils/answers";
import headers from "../headers";

const successOptions = {
  status: 200,
  statusText: "Got all the answers",
  headers,
};

function getAllTypeAnswers(type: string) {
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
 * @example /allAnswers?type={ positive | neutral | negative }
 */
export async function GET(req: NextRequest) {
  try {
    const t = new URL(req.url).searchParams.get("type") || "";
    const type = t.trim() || "all";
    return new Response(
      JSON.stringify({
        status: "success",
        data: {
          type,
          allAnswers: getAllTypeAnswers(type),
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
