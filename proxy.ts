import { NextRequest, NextResponse } from "next/server";
import { handleToken } from "./lib/services/middleware/handleToken";

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/:path*',
    '/login',
  ],
};

export const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  if(pathname === "/api/auth/login" || pathname === "/api/auth/register") {
    return NextResponse.next();
  }
  
  const token = request.cookies.get('access_token');
  const refreshToken = request.cookies.get('refresh_token');

  const response = NextResponse.next();
  const verifiedToken = await handleToken(token, refreshToken, response);

  if(verifiedToken.status !== "success") {
    if(pathname !== "/login") {
      return NextResponse.redirect(new URL('/login', request.url));
    } else {
      return NextResponse.next();
    }
  }

  const isAdmin = verifiedToken.user.is_admin;

  if(pathname === "/login") {
    const redirectUrl = isAdmin ? '/admin/dashboard' : '/';
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  if(pathname.startsWith('/admin') && !isAdmin) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return response;
}