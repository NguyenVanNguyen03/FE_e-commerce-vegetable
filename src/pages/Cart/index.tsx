import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { orderService } from "../../api/services/order.service";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../contexts/ToastContext";
import { formatPrice } from "../../utils/format";
import { authService } from "../../api/services/auth.service";
import type { User } from "../../types/user.types";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      authService
        .getCurrentUser()
        .then(setCurrentUser)
        .catch(() => undefined);
    }
  }, []);

  const handleCheckout = async () => {
    if (items.length === 0) {
      setCheckoutError("Your cart is empty");
      return;
    }

    // Kiểm tra authentication
    const token = localStorage.getItem("token");
    if (!token) {
      setCheckoutError("Please login to checkout");
      showError("Please login to checkout");
      return;
    }

    setIsCheckingOut(true);
    setCheckoutError(null);

    try {
      // Require phone and address
      if (!currentUser?.phone || !currentUser?.address) {
        const message = "Please update your phone and address before checkout";
        setCheckoutError(message);
        showError(message);
        navigate("/profile");
        return;
      }
      // Tạo order từ giỏ hàng
      await orderService.createOrder();

      // Xóa giỏ hàng sau khi tạo order thành công
      clearCart();

      // Hiển thị thông báo thành công
      showSuccess("Order created successfully!");

      // Chuyển hướng đến trang orders
      navigate("/orders");
    } catch (error: any) {
      console.error("Checkout error:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to create order. Please try again.";
      setCheckoutError(errorMessage);
      showError(errorMessage);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <section className="min-h-[60vh] py-12 bg-slate-50 animate-fade-in pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Your Cart
        </h1>
        {items.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-16">
            Your cart is empty.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow mb-8">
              <thead>
                <tr className="text-left text-[#274C5B] font-semibold border-b">
                  <th className="p-4">Product</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Subtotal</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b last:border-none hover:bg-slate-50 transition"
                  >
                    <td className="p-4 flex items-center gap-4">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <span className="font-semibold text-[#274C5B]">
                        {item.name}
                      </span>
                    </td>
                    <td className="p-4 text-primary font-semibold">
                      {formatPrice(item.price)}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="w-8 h-8 rounded bg-gray-100 text-xl font-bold text-primary hover:bg-gray-200 border transition"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          className="w-8 h-8 rounded bg-gray-100 text-xl font-bold text-primary hover:bg-gray-200 border transition "
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-primary font-semibold">
                      {formatPrice(item.price * item.quantity)}
                    </td>
                    <td className="p-4">
                      <button
                        className="text-red-500 font-bold border border-red-500 rounded px-2 hover:bg-red-500 hover:text-white transition"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove"
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <button
                className="bg-white border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition"
                onClick={() => (window.location.href = "/shop")}
              >
                Continue Shopping
              </button>
              <div className="text-xl font-bold text-primary">
                Total:{" "}
                <span className="text-primary">{formatPrice(totalPrice)}</span>
              </div>
              <button
                className="bg-primary text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-[#1A2C47] transition text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                onClick={handleCheckout}
                disabled={isCheckingOut || items.length === 0}
              >
                {isCheckingOut ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  "Checkout"
                )}
              </button>
            </div>

            {/* Error message */}
            {checkoutError && (
              <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  {checkoutError}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
