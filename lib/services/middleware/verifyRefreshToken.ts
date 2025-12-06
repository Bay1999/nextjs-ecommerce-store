import { ApiResponse, AuthResponse } from "@/types/api";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { apiRequest } from "../api/apiRequest";
import { API_BASE_URL } from "@/config/common";

export const verifyRefreshToken = async (refreshToken: RequestCookie): Promise<ApiResponse<AuthResponse, "user">>  => {
  const token = refreshToken.value

  return apiRequest<ApiResponse<AuthResponse, "user">>({
    url: `${API_BASE_URL}/refresh-token`,
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    method: "POST",
  })
}