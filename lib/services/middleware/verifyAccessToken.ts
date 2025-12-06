import { apiRequest } from "../api/apiRequest";
import { ApiResponse, AuthResponse } from "@/types/api";
import { API_BASE_URL } from "@/config/common";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const verifyToken = async(accesToken: RequestCookie): Promise<ApiResponse<AuthResponse, "user">> => {

  const token = accesToken.value;

  return apiRequest<ApiResponse<AuthResponse, "user">>({
    url: `${API_BASE_URL}/verify-token`,
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    method: "POST",
  })
}