import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  if (request.nextUrl.pathname.startsWith("/api/")) {
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS"
    );
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  }

  if (
    request.method === "OPTIONS" &&
    request.nextUrl.pathname.startsWith("/api/")
  ) {
    return new Response(null, {
      status: 200,
      headers: response.headers,
    });
  }

  return response;
}

export const config = {
  matcher: "/api/:path*",
};
