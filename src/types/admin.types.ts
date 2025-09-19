export interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  avatar: {
    url: string;
    public_id: string;
  };
  createdAt: string;
}

export interface AdminOrder {
  _id: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  totalAmount: number;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  createdAt: string;
}

export interface AdminOrderDetail {
  _id: string;
  product: {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
  quantity: number;
  priceEach: number;
}

export interface AdminOrderWithDetails extends AdminOrder {
  orderDetails: AdminOrderDetail[];
}

export interface AdminStats {
  statusStats: {
    _id: string;
    count: number;
    totalAmount: number;
  }[];
  totalOrders: number;
  totalRevenue: number;
}

export interface AdminUserResponse {
  success: boolean;
  count: number;
  data: AdminUser[];
}

export interface AdminOrderResponse {
  success: boolean;
  count: number;
  data: AdminOrder[];
}

export interface AdminStatsResponse {
  success: boolean;
  data: AdminStats;
}

// Admin Product Types
export interface AdminProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  stock: number;
  category: {
    _id: string;
    name: string;
  };
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminProductResponse {
  success: boolean;
  count: number;
  data: {
    products: AdminProduct[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      itemsPerPage: number;
    };
  };
}

export interface AdminProductStats {
  totalProducts: number;
  categoryStats: Array<{
    categoryName: string;
    count: number;
    avgPrice: number;
    totalValue: number;
  }>;
  priceStats: {
    minPrice: number;
    maxPrice: number;
    avgPrice: number;
    totalValue: number;
  };
  stockStats: {
    totalStock: number;
    lowStock: number;
    outOfStock: number;
  };
}

export interface AdminProductStatsResponse {
  success: boolean;
  data: AdminProductStats;
}

// Admin Category Types
export interface AdminCategory {
  _id: string;
  name: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminCategoryCreate {
  name: string;
  image: string;
}

export interface AdminCategoryUpdate {
  name?: string;
  image?: string;
}

export interface AdminCategoryResponse {
  success: boolean;
  count: number;
  data: AdminCategory[];
  pagination: {
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
  };
}

export interface AdminCategoryStats {
  totalCategories: number;
  recentCategories: number;
  categoriesWithProductCount: Array<{
    _id: string;
    name: string;
    productCount: number;
    createdAt: string;
  }>;
}
