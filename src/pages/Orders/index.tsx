import React, { useState, useEffect } from "react";
import { orderService } from "../../api/services/order.service";
import { formatPrice } from "../../utils/format";
import type { Order, OrderDetail } from "../../types/order.types";
import OrderStatusBadge from "../../components/OrderStatusBadge";

// Simple loading component
const Loading = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetail[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        const response = await orderService.getOrderDetails(order._id);
        console.log("Order details response:", response.data);
        setOrderDetails(response.data);
      } catch (error) {
        console.error("Error fetching order details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [order._id]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 mb-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-primary mb-2">
            Order #{order._id.slice(-8).toUpperCase()}
          </h3>
          <p className="text-gray-600 text-sm">{formatDate(order.createdAt)}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <OrderStatusBadge status={order.status} />
          <span className="text-primary font-bold text-xl">
            {formatPrice(order.totalAmount)}
          </span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <Loading />
        </div>
      ) : (
        <div className="space-y-4">
          <h4 className="font-semibold text-primary mb-3">Order Items:</h4>
          {orderDetails.map((detail) => (
            <div
              key={detail._id}
              className="flex items-center gap-6 p-5 bg-light rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                {detail.product && detail.product.imageUrl ? (
                  <img
                    src={detail.product.imageUrl}
                    alt={detail.product.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                        `;
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-primary mb-2 text-lg">
                  {detail.product?.name || "Product unavailable"}
                </h4>
                <p className="text-gray-600 text-sm mb-1">
                  Quantity:{" "}
                  <span className="font-medium">{detail.quantity}</span>
                </p>
                <p className="text-gray-500 text-xs">
                  Unit Price: {formatPrice(detail.priceEach)}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary text-lg">
                  {formatPrice(detail.priceEach * detail.quantity)}
                </p>
                <p className="text-gray-500 text-sm">
                  {formatPrice(detail.priceEach)} × {detail.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("Fetching orders...");
        const response = await orderService.getOrders();
        console.log("Orders response:", response);
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(
          "Failed to load orders. Please check your connection and try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="text-center">
          <Loading />
          <p className="mt-4 text-gray-600">Loading your orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-light flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
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
          </div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            Error Loading Orders
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light ">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">My Orders</h1>
          <p className="text-gray-600 text-lg">Track and manage your orders</p>
        </div>

        {orders.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-40 h-40 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg
                className="w-20 h-20 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              No Orders Yet
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              You haven't placed any orders yet. Start shopping to see your
              orders here and track their progress.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => (window.location.href = "/shop")}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                Start Shopping
              </button>
              <button
                onClick={() => window.location.reload()}
                className="bg-secondary text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                Refresh
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {orders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
