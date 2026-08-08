import { apiClient, DASHBOARD_API } from "@/lib";
import { DashboardResponse } from "../types/dashboard-api.types";
import { ApiResponse } from "@/types/api.types";

export const getDashboard = async (): Promise<DashboardResponse> => {
  const response = await apiClient.get<ApiResponse<DashboardResponse>>(
    DASHBOARD_API.DASHBOARD.ROOT,
  );

  return response.data.data;
};
