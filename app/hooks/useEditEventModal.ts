import { Prisma } from '@prisma/client';
import { create } from 'zustand';

interface EditEventModalStore {
  isOpen: boolean;
  onOpen: (eventData: Prisma.EventCreateInput) => void;
  onClose: () => void;
  eventData: Prisma.EventCreateInput | null;
}

const useEditEventModal = create<EditEventModalStore>((set) => ({
  isOpen: false,
  eventData: null,
  onOpen: (eventData: Prisma.EventCreateInput) => set({ isOpen: true, eventData }),
  onClose: () => set({ isOpen: false }),
}));

export default useEditEventModal;