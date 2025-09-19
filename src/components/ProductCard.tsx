import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { formatPrice } from "../utils/format";
import type { Product } from "../types";
import screenUrl from "../constants/screenUrls";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click when clicking add to cart
    addItem({
      id: product._id,
      name: product.name,
      price: product.salePrice ?? product.price,
      imageUrl: product.imageUrl,
      slug: product.name.toLowerCase().replace(/\s+/g, "-"),
    });
  };

  const handleCardClick = () => {
    navigate(screenUrl.SHOP_SINGLE.replace(":id", product._id));
  };

  return (
    <div
      className="rounded-3xl bg-light shadow-md p-6 flex flex-col relative min-h-[340px] cursor-pointer hover-scale transition-all animate-fade-in"
      onClick={handleCardClick}
    >
      <span className="absolute top-5 left-5 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-lg animate-slide-in-left">
        {typeof product.category === "string"
          ? product.category
          : product.category?.name || ""}
      </span>
      <div
        className="w-full flex justify-center items-center bg-light rounded-lg transition-transform "
        style={{ minHeight: 192 }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ backgroundColor: "bg-light" }}
          className="w-80 h-52 object-contain mix-blend-multiply transition-transform hover:scale-110 rounded-lg"
        />
      </div>
      <div className="flex items-center w-full justify-between mb-2 mt-6">
        <h4 className="font-bold text-lg text-primary text-left hover:text-green-600 transition-colors">
          {product.name}
        </h4>
        <button
          onClick={handleAddToCart}
          className="bg-accent text-primary px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-all hover-lift"
        >
          Add to Cart
        </button>
      </div>
      <div className="w-full h-px border-t-[1px] border-gray bg-gray-200 my-1"></div>
      <div className="flex flex-col gap-2">
        <div className="flex items-end gap-2">
          {product.salePrice ? (
            <>
              <span className="text-gray-400 line-through text-base">
                {formatPrice(product.price)}
              </span>
              <span className="text-primary font-bold text-xl animate-pulse">
                {formatPrice(product.salePrice)}
              </span>
            </>
          ) : (
            <span className="text-primary font-bold text-xl">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 transition-transform hover:scale-110 ${
                i < (product.avgRating ?? 0) ? "text-accent" : "text-gray-200"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
