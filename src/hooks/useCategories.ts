import { useState, useEffect } from "react";
import { categoryService } from "../api/services/category.service";
import type { Category } from "../types";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await categoryService.getCategories();
        setCategories(response.data);
      } catch (error: any) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const refetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await categoryService.getCategories();
      setCategories(response.data);
    } catch (error: any) {
      console.error("Error refetching categories:", error);
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  return {
    categories,
    loading,
    error,
    refetch,
  };
};
