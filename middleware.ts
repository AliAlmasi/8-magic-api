import { NextRequest, NextResponse } from "next/server";
import { failOptions } from "./app/headers";

function allowedPath(pathname: string): boolean {
  if (pathname)
    switch (pathname) {
      case "/":
      case "/allAnswers":
      case "/getAnswer":
      case "/style.css":
        return true;

      default:
        return false;
    }
  else
    throw new Error(
      "Error while reading 'pathname' for checking allowed paths."
    );
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  try {
    if (allowedPath(pathname)) return NextResponse.next();

    if (pathname.includes("/allAnswer")) {
      url.pathname = "/allAnswers";
      return NextResponse.redirect(url);
    }

    if (pathname.includes("/getAnswer")) {
      url.pathname = "/getAnswer";
      return NextResponse.redirect(url);
    }

    url.pathname = "/";
    return NextResponse.redirect(url);
  } catch (error: any) {
    NextResponse.json(
      JSON.stringify({
        status: "fail",
        message:
          error.message ||
          "An unknown error occurred while processing your request",
      }),
      failOptions()
    );
    console.error(error.message);
  }
}
