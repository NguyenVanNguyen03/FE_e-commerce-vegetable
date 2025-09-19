import React, { useState } from "react";
import type { Product } from "../../../../types";
import { useCart } from "../../../../contexts/CartContext";
import { formatPrice } from "../../../../utils/format";

interface Props {
  product: Product;
}

const ProductInfoCard: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, updateQuantity, items } = useCart();

  const handleAddToCart = () => {
    const existingItem = items.find((item) => item.id === product._id);

    if (existingItem) {
      updateQuantity(product._id, existingItem.quantity + quantity);
    } else {
      addItem({
        id: product._id,
        name: product.name,
        price: product.salePrice ?? product.price,
        imageUrl: product.imageUrl,
        slug: product.name.toLowerCase().replace(/\s+/g, "-"),
      });
      if (quantity > 1) {
        updateQuantity(product._id, quantity);
      }
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(1);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl p-8 gap-8 items-center w-[90%] mx-auto">
      <div
        className="w-[320px] md:w-auto flex-1 justify-center items-center bg-light rounded-2xl p-4"
        style={{ minWidth: 160, minHeight: 160 }}
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply rounded-md"
        />
      </div>
      <div className="flex-1">
        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-lg mb-2 inline-block">
          {product.category.name}
        </span>
        <h2 className="text-2xl font-bold text-primary mb-2">{product.name}</h2>
        <div className="flex items-center gap-2 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < (product.avgRating ?? 0) ? "text-accent" : "text-gray-200"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
        </div>
        <div className="flex items-center gap-4 mb-4">
          <span className="text-gray-400 line-through text-lg">
            {formatPrice(product.price)}
          </span>
          <span className="text-primary font-bold text-2xl">
            {formatPrice(product.salePrice ?? product.price)}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex items-center gap-4">
          <label className="font-semibold text-primary">Quantity:</label>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 border border-gray-300 rounded px-2 py-1 text-center"
          />
          <button
            onClick={handleAddToCart}
            className="bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-dark transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoCard;
