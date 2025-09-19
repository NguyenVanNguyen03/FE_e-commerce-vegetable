import ProductGrid from "../../../components/ProductGrid";
import { useProducts } from "../../../hooks/useProducts";
import { useCategories } from "../../../hooks/useCategories";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ShopProductGrid() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const qParam = (params.get("q") || "").trim();
  const categoryParam = (params.get("category") || "").trim();
  const pageParam = Number(params.get("page") || 1);

  const { products, loading, error, pagination } = useProducts({
    q: qParam || undefined,
    category: categoryParam || undefined,
    page: pageParam,
    limit: 12,
  });

  const { categories } = useCategories();
  const activeCategoryName = useMemo(() => {
    if (!categoryParam) return "";
    const found = categories.find((c) => c._id === categoryParam);
    return found?.name || "";
  }, [categories, categoryParam]);

  const titleText = useMemo(() => {
    if (loading) return "";
    if (qParam)
      return `Found ${pagination.totalItems} result(s) for "${qParam}"`;
    return `All products (${pagination.totalItems})`;
  }, [loading, qParam, pagination.totalItems]);

  const goToPage = (page: number) => {
    const next = new URLSearchParams(location.search);
    if (page <= 1) {
      next.delete("page");
    } else {
      next.set("page", String(page));
    }
    navigate({ pathname: "/shop", search: `?${next.toString()}` });
  };

  const renderPagination = () => {
    if (!pagination || pagination.totalItems === 0) return null;
    const { currentPage, totalPages } = pagination;

    const pages: number[] = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);
    for (let i = start; i <= end; i++) pages.push(i);

    return (
      <div className="mt-10 flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-2">
          <button
            className="h-10 px-4 rounded-full border border-primary text-primary text-sm disabled:opacity-40 hover:bg-mint transition"
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {start > 1 && (
            <>
              <button
                className="h-10 px-4 rounded-full border border-primary text-primary text-sm hover:bg-mint transition"
                onClick={() => goToPage(1)}
              >
                1
              </button>
              {start > 2 && <span className="px-2">...</span>}
            </>
          )}
          {pages.map((p) => (
            <button
              key={p}
              className={`h-10 px-4 rounded-full border text-sm transition ${
                p === currentPage
                  ? "bg-primary text-white border-primary"
                  : "border-primary text-primary hover:bg-mint"
              }`}
              onClick={() => goToPage(p)}
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </button>
          ))}
          {end < totalPages && (
            <>
              {end < totalPages - 1 && <span className="px-2">...</span>}
              <button
                className="h-10 px-4 rounded-full border border-primary text-primary text-sm hover:bg-mint transition"
                onClick={() => goToPage(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}
          <button
            className="h-10 px-4 rounded-full border border-primary text-primary text-sm disabled:opacity-40 hover:bg-mint transition"
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        {/* Fixed page size of 12 per API; page-size selector removed per request */}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {loading && (
        <p className="text-center text-gray-500">Loading products...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && (
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-600">{titleText}</p>
            {activeCategoryName && (
              <span className="inline-flex items-center h-7 px-3 rounded-full bg-mint text-primary text-sm border border-primary/10">
                Category:{" "}
                <span className="ml-1 font-semibold">{activeCategoryName}</span>
              </span>
            )}
          </div>
        </div>
      )}
      <ProductGrid products={products} />
      {!loading && renderPagination()}
    </div>
  );
}
