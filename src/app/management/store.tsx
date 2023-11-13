import { create } from "zustand";

interface Drawer {
  isOpen: boolean;
  toggle: () => void;
}

export const openDrawer = create<Drawer>()((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
