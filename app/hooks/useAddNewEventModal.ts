import { create } from 'zustand';

interface AddNewEventModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAddNewEventModal = create<AddNewEventModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useAddNewEventModal;