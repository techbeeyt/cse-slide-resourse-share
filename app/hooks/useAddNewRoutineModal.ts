import { create } from 'zustand';

interface AddNewRoutineModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddNewRoutineModal = create<AddNewRoutineModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useAddNewRoutineModal;