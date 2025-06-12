import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/allAnswers" || pathname === "/getAnswer")
    return NextResponse.next();

  if (pathname === "/") return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}
