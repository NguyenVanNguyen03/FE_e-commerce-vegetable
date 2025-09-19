export interface Product {
  _id: string;
  name: string;
  description: string;
  salePrice: number;
  price: number;
  imageUrl: string;
  category: {
    _id: string;
    name: string;
  };
  stock: number;
  avgRating: number;
}

export interface ProductResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}
