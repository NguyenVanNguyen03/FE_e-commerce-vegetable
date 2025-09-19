import type { Product } from "./product.types";

export interface CartItem {
  productId: string;
  quantity: number;
  product: Product;
}

// Order types matching backend API
export interface Order {
  _id: string;
  user: string;
  totalAmount: number;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}

export interface OrderDetail {
  _id: string;
  order: string;
  product?: {
    _id?: string;
    name?: string;
    price?: number;
    imageUrl?: string;
  } | null;
  quantity: number;
  priceEach: number;
}

export interface OrderWithDetails extends Order {
  orderDetails: OrderDetail[];
}

export interface OrderResponse {
  orders: Order[];
  total: number;
  page: number;
  limit: number;
}
