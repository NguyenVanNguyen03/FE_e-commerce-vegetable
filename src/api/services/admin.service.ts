import axiosInstance from "../config/axios";
import type {
  AdminUser,
  AdminOrder,
  AdminOrderWithDetails,
  AdminUserResponse,
  AdminOrderResponse,
  AdminStatsResponse,
  AdminProduct,
  AdminProductResponse,
  AdminProductStats,
  AdminCategory,
  AdminCategoryResponse,
  AdminCategoryStats,
} from "../../types/admin.types";
import type { ApiResponse } from "../../types/api.types";

export const adminService = {
  // ========== USER MANAGEMENT ==========

  // Lấy tất cả users
  getUsers: async (params?: {
    page?: number;
    limit?: number;
    role?: string;
    search?: string;
  }): Promise<AdminUserResponse> => {
    const response = await axiosInstance.get("/auth/admin/users", { params });
    return response.data;
  },

  // Lấy user theo ID
  getUserById: async (id: string): Promise<ApiResponse<AdminUser>> => {
    const response = await axiosInstance.get(`/auth/admin/users/${id}`);
    return response.data;
  },

  // Cập nhật user
  updateUser: async (
    id: string,
    data: Partial<AdminUser>
  ): Promise<ApiResponse<AdminUser>> => {
    const response = await axiosInstance.put(`/auth/admin/users/${id}`, data);
    return response.data;
  },

  // Xóa user
  deleteUser: async (id: string): Promise<ApiResponse<{}>> => {
    const response = await axiosInstance.delete(`/auth/admin/users/${id}`);
    return response.data;
  },

  // Thay đổi role user
  changeUserRole: async (
    id: string,
    role: "user" | "admin"
  ): Promise<ApiResponse<AdminUser>> => {
    const response = await axiosInstance.put(`/auth/admin/users/${id}/role`, {
      role,
    });
    return response.data;
  },

  // ========== ORDER MANAGEMENT ==========

  // Lấy tất cả orders
  getOrders: async (params?: {
    page?: number;
    limit?: number;
    status?: string;
    userId?: string;
    startDate?: string;
    endDate?: string;
  }): Promise<AdminOrderResponse> => {
    console.log("Admin service - getOrders called with params:", params);
    const response = await axiosInstance.get("/orders/admin/orders", {
      params,
    });
    console.log("Admin service - getOrders response:", response.data);
    return response.data;
  },

  // Lấy order theo ID
  getOrderById: async (
    id: string
  ): Promise<ApiResponse<AdminOrderWithDetails>> => {
    const response = await axiosInstance.get(`/orders/admin/orders/${id}`);
    return response.data;
  },

  // Cập nhật trạng thái order
  updateOrderStatus: async (
    id: string,
    status: string
  ): Promise<ApiResponse<AdminOrder>> => {
    const response = await axiosInstance.put(
      `/orders/admin/orders/${id}/status`,
      { status }
    );
    return response.data;
  },

  // Xóa order
  deleteOrder: async (id: string): Promise<ApiResponse<{}>> => {
    const response = await axiosInstance.delete(`/orders/admin/orders/${id}`);
    return response.data;
  },

  // Lấy thống kê orders
  getOrderStats: async (): Promise<AdminStatsResponse> => {
    const response = await axiosInstance.get("/orders/admin/orders/stats");
    return response.data;
  },

  // ========== PRODUCT MANAGEMENT ==========

  // Lấy tất cả products
  getProducts: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<AdminProductResponse> => {
    const response = await axiosInstance.get("/products/admin/products", {
      params,
    });
    return response.data;
  },

  // Lấy product theo ID
  getProductById: async (id: string): Promise<ApiResponse<AdminProduct>> => {
    const response = await axiosInstance.get(`/products/admin/products/${id}`);
    return response.data;
  },

  // Tạo product mới
  createProduct: async (
    productData: FormData
  ): Promise<ApiResponse<AdminProduct>> => {
    const response = await axiosInstance.post(
      "/products/admin/products",
      productData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  // Cập nhật product
  updateProduct: async (
    id: string,
    productData: FormData
  ): Promise<ApiResponse<AdminProduct>> => {
    const response = await axiosInstance.put(
      `/products/admin/products/${id}`,
      productData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  // Xóa product
  deleteProduct: async (id: string): Promise<ApiResponse<{}>> => {
    const response = await axiosInstance.delete(
      `/products/admin/products/${id}`
    );
    return response.data;
  },

  // Lấy thống kê products
  getProductStats: async (): Promise<AdminProductStats> => {
    const response = await axiosInstance.get("/products/admin/products/stats");
    return response.data.data;
  },

  // ========== CATEGORY MANAGEMENT ==========

  // Lấy tất cả categories cho admin
  getCategories: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<AdminCategoryResponse> => {
    const response = await axiosInstance.get("/categories/admin/categories", {
      params,
    });
    return response.data;
  },

  // Lấy category theo ID cho admin
  getCategoryById: async (id: string): Promise<ApiResponse<AdminCategory>> => {
    const response = await axiosInstance.get(
      `/categories/admin/categories/${id}`
    );
    return response.data;
  },

  // Tạo category mới cho admin
  createCategory: async (
    categoryData: FormData
  ): Promise<ApiResponse<AdminCategory>> => {
    const response = await axiosInstance.post(
      "/categories/admin/categories",
      categoryData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  // Cập nhật category cho admin
  updateCategory: async (
    id: string,
    categoryData: FormData
  ): Promise<ApiResponse<AdminCategory>> => {
    const response = await axiosInstance.put(
      `/categories/admin/categories/${id}`,
      categoryData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },

  // Xóa category cho admin
  deleteCategory: async (id: string): Promise<ApiResponse<{}>> => {
    const response = await axiosInstance.delete(
      `/categories/admin/categories/${id}`
    );
    return response.data;
  },

  // Lấy thống kê categories cho admin
  getCategoryStats: async (): Promise<AdminCategoryStats> => {
    const response = await axiosInstance.get(
      "/categories/admin/categories/stats"
    );
    return response.data.data;
  },
};
