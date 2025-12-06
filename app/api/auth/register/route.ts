import { APP_ENV } from "@/config/common";
import { registerUser } from "@/lib/services/authService";
import { AuthResponse } from "@/types/api";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
      const body = await request.json();

      const response = await registerUser(body);

      if(response.status === "error") {
        return NextResponse.json(response, { status: response.statusCode || 400 });
      }
      
      const nextResponse = NextResponse.json(response);

      const authResponse = response as AuthResponse;
      

      nextResponse.cookies.set("access_token", authResponse.access_token, {
        httpOnly: true,
        secure: APP_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7
      });

      nextResponse.cookies.set("refresh_token", authResponse.refresh_token, {
        httpOnly: true,
        secure: APP_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7
      });

      nextResponse.cookies.set("token_type", authResponse.token_type, {
        httpOnly: true,
        secure: APP_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7
      });
      
      nextResponse.cookies.set("user", JSON.stringify(authResponse.user), {
        httpOnly: true,
        secure: APP_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7
      });
      
      return nextResponse;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Server Error";
      return NextResponse.json({ message }, { status: 500 });
    }
}