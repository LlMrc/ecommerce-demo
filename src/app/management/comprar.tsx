import { create } from "zustand";
import { Product } from "../Type";

interface Comprar {
  product: Product[];
  add: (p: Product) => void;
}

export const useAddToList = create<Comprar>()((set) => ({
  product: [],
  add: (item) => set((state) => ({ product: [...state.product, item] })),
}));
