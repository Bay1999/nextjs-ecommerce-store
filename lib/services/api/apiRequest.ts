import { ApiRequestOptions, QueryParams } from "@/types/api";
import axios, { AxiosError } from "axios";

export async function apiRequest<TResponse, TPayload = unknown, TParams = QueryParams>({
  url,
  method = "GET",
  body,
  params,
  headers
}: ApiRequestOptions<TPayload, TParams>) {
    try {
      const response = await axios<TResponse>({
        url,
        method,
        data: body,
        params,
        headers: {
          "Content-Type": "application/json",
          ...headers
        }
      })
      return {
        ...response.data,
        statusCode: response.status
      };
    } catch (error) {
      // Tangani error dari panggilan Axios
      const err = error as AxiosError<TResponse>;
      // Jika server memberikan response → return tetap typed
      if (err.response?.data) {
        return {
          ...err.response.data,
          statusCode: err.response.status
        };
      }

      // Jika tidak ada response → lempar error
      throw new Error(err.message || "Network/server error");
    }
}