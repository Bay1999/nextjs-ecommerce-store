"use server";

import { LoginForm, RegisterForm } from "@/types/auth";
import { apiRequest } from "./api/apiRequest";
import { API_BASE_URL } from "@/config/common";
import { ApiResponse, AuthResponse } from "@/types/api";
import { cookies } from "next/headers";

export async function registerUser(data: RegisterForm): Promise<ApiResponse<AuthResponse, "user">> {

  return apiRequest<ApiResponse<AuthResponse, "user">, RegisterForm>({
    url: `${API_BASE_URL}/register`,
    method: "POST",
    body: data
  })
}

export async function loginUser(data: LoginForm): Promise<ApiResponse<AuthResponse, "user">> {
  return apiRequest<ApiResponse<AuthResponse, "user">, LoginForm>({
    url: `${API_BASE_URL}/login`,
    method: "POST",
    body: data
  })
}

export async function logoutUser(request: Request) {
  const token = request.headers.get("access_token");

  return apiRequest<ApiResponse<AuthResponse, "user">, LoginForm>({
    url: `${API_BASE_URL}/logout`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    method: "POST",
  })
}

export async function getUserDataCookie() {
  const cookieStore = await cookies();

  const dataUser = cookieStore.get("user")?.value || null;

  if(!dataUser) {
    return null;
  }

  return JSON.parse(dataUser);
}