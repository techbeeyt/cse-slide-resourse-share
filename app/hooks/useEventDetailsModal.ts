import { create } from 'zustand';
import { EventDataType } from '@/app/types';

interface EventDetailsModalStore {
  isOpen: boolean;
  eventId: string;
  eventDetails?: EventDataType;
  onOpen: (eventId: string) => void;
  onClose: () => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const useEventDetailsModal = create<EventDetailsModalStore>((set) => ({
  isOpen: false,
  eventId: '',
  eventDetails: undefined,
  isLoading: true,
  onOpen: (eventId) => set({ isOpen: true, eventId }),
  onClose: () => set({ isOpen: false, eventId: '' }),
  setIsLoading: (isLoading) => set({ isLoading })
}));

export default useEventDetailsModal;