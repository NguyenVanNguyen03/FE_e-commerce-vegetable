import axiosInstance from "../config/axios";
import type { Product } from "../../types"; // Đảm bảo bạn có type Product

export const productService = {
  // Lấy tất cả sản phẩm (public) có phân trang và tìm kiếm
  getAll: async (params?: {
    q?: string;
    category?: string;
    page?: number;
    limit?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  }): Promise<{
    products: Product[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      itemsPerPage: number;
    };
  }> => {
    const res = await axiosInstance.get("/products", { params });
    return res.data.data;
  },

  // Lấy sản phẩm theo ID
  getById: async (id: string): Promise<Product> => {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data.data;
  },

  // Tạo sản phẩm mới
  create: async (product: Partial<Product>): Promise<Product> => {
    const res = await axiosInstance.post("/products", product);
    return res.data.data;
  },

  // Cập nhật sản phẩm
  update: async (id: string, product: Partial<Product>): Promise<Product> => {
    const res = await axiosInstance.put(`/products/${id}`, product);
    return res.data.data;
  },

  // Xóa sản phẩm
  delete: async (id: string): Promise<void> => {
    await axiosInstance.delete(`/products/${id}`);
  },
};

export default productService;
