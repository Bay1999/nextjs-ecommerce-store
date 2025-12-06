import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { verifyToken } from "./verifyAccessToken";
import { ApiResponse, AuthResponse } from "@/types/api";
import { verifyRefreshToken } from "./verifyRefreshToken";
import { NextResponse } from "next/server";
import { APP_ENV } from "@/config/common";

export const handleToken = async (
  token: RequestCookie | undefined, 
  refreshToken: RequestCookie | undefined,
  nextResponse: NextResponse
): Promise<ApiResponse<AuthResponse, "user">>  => {

  if(!token || !refreshToken) return {
    status: "error",
    message: "Unauthorized",
    statusCode: 401
  };

  const verifiedToken = await verifyToken(token);

  if(verifiedToken.status === "success") {
    return verifiedToken;
  }

  const verifiedRefreshToken = await verifyRefreshToken(refreshToken);

  if(verifiedRefreshToken.status === "success") {
    storeToken(verifiedRefreshToken, nextResponse);
    return verifiedRefreshToken;
  }

  removeToken(nextResponse);
  return verifiedRefreshToken;
}

export const storeToken = (
  dataResponse: ApiResponse<AuthResponse, "user">,
  nextResponse: NextResponse
) => {
  const authResponse = dataResponse as AuthResponse; 

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
}

export const removeToken = (nextResponse: NextResponse) => {
  nextResponse.cookies.delete("access_token");
  nextResponse.cookies.delete("refresh_token");
  nextResponse.cookies.delete("token_type");
  nextResponse.cookies.delete("user");
}
