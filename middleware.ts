import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let { nextUrl } = request;

  const hasToken = request.cookies.has("token");
  console.log("middleware", hasToken);
  if (hasToken) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/dashboard/:path*",
};
