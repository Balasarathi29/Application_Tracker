import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth/auth";

export default async function proxy(request: NextRequest) {
  // Use the request headers so session lookup works in middleware
  const session = await auth.api.getSession({ headers: request.headers });

  const isDashboardPage = request.nextUrl.pathname.startsWith("/dashboard");
  if (isDashboardPage && !session?.user) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }


  return NextResponse.next();
}
