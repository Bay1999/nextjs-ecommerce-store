import { registerUser } from "@/lib/services/authService";
import { storeToken } from "@/lib/services/middleware/handleToken";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    try {
      const body = await request.json();

      const response = await registerUser(body);

      if(response.status === "error") {
        return NextResponse.json(response, { status: response.statusCode || 400 });
      }
      
      const nextResponse = NextResponse.json(response);

      storeToken(response, nextResponse);
      
      return nextResponse;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Server Error";
      return NextResponse.json({ message }, { status: 500 });
    }
}