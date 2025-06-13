import { headersObject, httpOptionsObject } from "@/utils/types";

export const headers = (contentType: string): headersObject => {
  if (!contentType) {
    throw new Error(
      "Content-Type not defined correctly in HTTP response headers."
    );
  }
  return {
    "Content-Type": `${contentType}; charset=UTF-8`,
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  };
};

export const successOptions = (
  message: string = "Here's your answer",
  code: number = 200,
  contentType: string = "application/json"
): httpOptionsObject => {
  return {
    status: code,
    statusText: message,
    headers: headers(contentType),
  };
};

export const failOptions = (
  code: number = 500,
  message: string = "Error",
  contentType: string = "application/json"
): httpOptionsObject => {
  return {
    status: code,
    statusText: message,
    headers: headers(contentType),
  };
};
