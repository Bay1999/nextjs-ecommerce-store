import { logoutUser } from "@/lib/services/authService";
import { removeToken } from "@/lib/services/middleware/handleToken";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const response = await logoutUser(request);

    if(response.status === "error") {
      return NextResponse.json(response, { status: response.statusCode || 400 });
    }
    
    const nextResponse = NextResponse.json(response);

    removeToken(nextResponse);
    
    return nextResponse;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Server Error";
    return NextResponse.json({ message }, { status: 500 });
  }
}