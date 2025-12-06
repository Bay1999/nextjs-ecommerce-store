type QueryParams = Record<string, string | undefined>;

interface ApiRequestOptions<TPayload = unknown, TParams = QueryParams> {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    body?: TPayload;
    params?: TParams;
    headers?: Record<string, string>;
}

export interface SuccessResponse<TData, TKey extends string> {
  status: "success",
  message?: string,
  statusCode?: number,
  [TKey: string]: TData,
}

export interface ErrorResponse {
  status: "error",
  message: string,
  statusCode?: number,
}

export interface AuthResponse extends SuccessResponse<User, "user"> {
  token: string,
  token_type: string,
}

export type ApiResponse<TData, TKey extends string = "data"> = SuccessResponse<TData, TKey> | ErrorResponse | AuthResponse;