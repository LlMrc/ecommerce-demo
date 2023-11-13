import { create } from "zustand";


interface Counter {
  count: number;
  increaseCounter: (by: number) => void;
}

export const useCounter = create<Counter>()(

    (set) => ({
      count: 0,
      increaseCounter: (by) => set((state) => ({ count: state.count + by })),
    }),

  
);
