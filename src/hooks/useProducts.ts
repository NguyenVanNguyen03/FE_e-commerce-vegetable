import { useEffect, useState } from "react";
import { productService } from "../api/services/product.service";
import type { Product } from "../types";

export function useProducts(params?: {
  q?: string;
  category?: string;
  page?: number;
  limit?: number;
}) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<{
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  }>({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: params?.limit || 12,
  });

  const fetchProducts = async (override?: {
    q?: string;
    category?: string;
    page?: number;
    limit?: number;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await productService.getAll({ ...params, ...override });
      setProducts(res.products);
      setPagination(res.pagination);
    } catch (err: any) {
      setError(err?.message || "Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.q, params?.category, params?.page, params?.limit]);

  return { products, loading, error, refresh: fetchProducts, pagination };
}
