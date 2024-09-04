import { NextResponse } from "next/server";

const middleware = (request) => {
  const path = request.nextUrl.pathname;
  console.log(request.url, ">>>>>>>>>>>");
  const isPublicPath =
    path === "/sign-in/login" || path === "/sign-in/register";
  // Get the token from cookies
  const token = request.cookies.get("token")?.value || "";
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  } else if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/sign-in/login", request.url));
  }
};

export default middleware;

export const config = {
  // matcher: "/:path*",
  matcher: ["/", "/about", "/", "/about", "/sign-in/:path*"],
};
