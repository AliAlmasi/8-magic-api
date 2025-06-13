import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  if (pathname === "/allAnswers" || pathname === "/getAnswer")
    return NextResponse.next();

  if (pathname === "/") return NextResponse.next();

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
}
