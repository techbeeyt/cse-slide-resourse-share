import { create } from 'zustand';

interface LeftbarStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useLeftbar = create<LeftbarStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useLeftbar;