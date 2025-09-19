import { useEffect, useState } from "react";
import ProductInfoCard from "./ProductInfoCard";
import ProductTabs from "./ProductTabs";
import type { Product } from "../../../../types";
import { productService } from "../../../../api/services/product.service";

interface Props {
  productId?: string;
}

export default function MainProduct({ productId }: Props) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setError("Product ID is required");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await productService.getById(productId);
        setProduct(data);
        setError(null);
      } catch (err) {
        setError("Failed to load product details");
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 mb-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading product details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-red-500">{error || "Product not found"}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 mb-8">
      <ProductInfoCard product={product} />
      <ProductTabs
        description={product.description}
        additionalInfo="This is additional info about the product. You can add more details here."
      />
    </div>
  );
}
