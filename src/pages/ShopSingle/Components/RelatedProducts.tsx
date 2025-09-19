import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../../../components/ProductGrid";
import type { Product } from "../../../types";
import { productService } from "../../../api/services/product.service";

export default function RelatedProducts() {
  const { id } = useParams<{ id: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelated = async () => {
      if (!id) return;
      try {
        setLoading(true);
        setError(null);
        const current = await productService.getById(id);
        const categoryId = current?.category?._id;
        if (!categoryId) {
          setProducts([]);
          setLoading(false);
          return;
        }
        const res = await productService.getAll({
          category: categoryId,
          limit: 4,
          page: 1,
        });
        const items = (res.products || [])
          .filter((p) => p._id !== id)
          .slice(0, 4);
        setProducts(items);
      } catch (e: any) {
        setError(e?.message || "Failed to load related products");
      } finally {
        setLoading(false);
      }
    };
    fetchRelated();
  }, [id]);

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        Related Products
      </h2>
      {loading && (
        <p className="text-center text-gray-500">Loading related products...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && <ProductGrid products={products} />}
    </div>
  );
}
