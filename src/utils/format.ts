const formatIDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
}).format;

export const formatPrice = (price: number): string => formatIDR(price);
