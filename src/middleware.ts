import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log(req.nextauth.token, req.nextUrl.pathname);
    if (req.nextauth.token && req.nextUrl.pathname.startsWith("/login")) {
      return NextResponse.redirect(new URL("/app", req.nextUrl));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ req, token }) {
        return req.nextUrl.pathname == "/" || req.nextUrl.pathname == "/hello";
      },
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: [
    "/((?!api|reset/password|_next/static|_next/image|assets|favicon.ico|.*\\.png$).*)",
    "/app/:path*",
  ],
};
