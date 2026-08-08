import { ApiResponse } from "@/types/api.types";
import { AxiosResponse } from "axios";

export function unwrapApiResponse<T>(response: AxiosResponse<ApiResponse<T>>): T {
  const envelope = response.data;

  if (!envelope.success) {
    throw new Error(envelope.message);
  }

  return envelope.data;
}
