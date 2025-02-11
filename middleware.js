import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  const host = url.host;

  if (url.protocol !== "https:" || !host.startsWith("www.")) {
    return NextResponse.redirect(`https://www.lnomortgages.com.au${url.pathname}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
