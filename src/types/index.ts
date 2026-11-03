export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};
