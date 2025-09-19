import ProductGrid from "../../../components/ProductGrid";
import { useProducts } from "../../../hooks/useProducts";

export default function ProductSection() {
  const { products, loading, error } = useProducts({ page: 1, limit: 8 });
  return (
    <section className="py-16 bg-whit">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-secondary font-semibold mb-2 animate-fade-in">
          Categories
        </h3>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-8 animate-fade-in">
          Our Products
        </h2>
        {loading && (
          <p className="text-center text-gray-500">Loading products...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!loading && (
          <div className="stagger-children">
            <ProductGrid products={products} />
          </div>
        )}
        <div className="flex justify-center mt-8">
          <a
            href="/shop"
            className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-dark transition"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
