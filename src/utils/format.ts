export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatPriceCompact = (price: number): string => {
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(1)}M ₫`;
  } else if (price >= 1000) {
    return `${(price / 1000).toFixed(1)}K ₫`;
  }
  return `${price.toLocaleString("vi-VN")} ₫`;
};
