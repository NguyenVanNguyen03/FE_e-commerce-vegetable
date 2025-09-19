import React from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../types";

const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {products.map((product) => {
      return <ProductCard key={product._id} product={product} />;
    })}
  </div>
);

export default ProductGrid;
