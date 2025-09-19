import axiosInstance from "../config/axios";
import { API_ENDPOINTS } from "../../constants/api.constants";
import type { Order, OrderDetail } from "../../types/order.types";
import type { ApiResponse } from "../../types/api.types";

export const orderService = {
  // Tạo đơn hàng từ giỏ hàng
  createOrder: async (): Promise<ApiResponse<Order>> => {
    const response = await axiosInstance.post(API_ENDPOINTS.ORDERS.CREATE);
    return response.data;
  },

  // Lấy danh sách đơn hàng của người dùng
  getOrders: async (): Promise<ApiResponse<Order[]>> => {
    const response = await axiosInstance.get(API_ENDPOINTS.ORDERS.LIST);
    return response.data;
  },

  // Lấy chi tiết đơn hàng
  getOrderDetails: async (
    orderId: string
  ): Promise<ApiResponse<OrderDetail[]>> => {
    const response = await axiosInstance.get(
      API_ENDPOINTS.ORDERS.DETAIL(orderId)
    );
    return response.data;
  },
};
