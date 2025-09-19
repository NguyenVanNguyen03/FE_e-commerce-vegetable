import axiosInstance from "../config/axios";
import { API_ENDPOINTS } from "../../constants/api.constants";
import type { Category, ApiResponse } from "../../types";

export const categoryService = {
  // Lấy tất cả categories
  getCategories: async (): Promise<ApiResponse<Category[]>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.CATEGORIES.LIST);
    return response.data;
  },

  // Lấy category theo ID
  getCategoryById: async (id: string): Promise<ApiResponse<Category>> => {
    const response = await axiosInstance.get(
      API_ENDPOINTS.CATEGORIES.DETAIL(id)
    );
    return response.data;
  },
};
