import axiosInstance from "../config/axios";

export interface CartItemDto {
  _id: string;
  user: string;
  product: {
    _id: string;
    name: string;
    price: number;
    imageUrl?: string;
  };
  quantity: number;
  addedAt: string;
}

export interface CartItemCreate {
  productId: string;
  quantity: number;
}

export const cartService = {
  add: async (payload: CartItemCreate): Promise<CartItemDto> => {
    const res = await axiosInstance.post("/cart", payload);
    return res.data.data as CartItemDto;
  },
  get: async (): Promise<CartItemDto[]> => {
    const res = await axiosInstance.get("/cart");
    return res.data.data as CartItemDto[];
  },
  update: async (productId: string, quantity: number): Promise<CartItemDto> => {
    const res = await axiosInstance.put(`/cart/${productId}`, { quantity });
    return res.data.data as CartItemDto;
  },
  remove: async (productId: string): Promise<CartItemDto> => {
    const res = await axiosInstance.delete(`/cart/${productId}`);
    return res.data.data as CartItemDto;
  },
};
