import { Prisma } from '@prisma/client';
import { create } from 'zustand';
import { MutatorCallback } from 'swr';

interface eventSliceStore {
  events: Prisma.EventCreateInput[];
  mutator: MutatorCallback | null;
  setEvents: (events: Prisma.EventCreateInput[]) => void;
  setMutator: (mutator: MutatorCallback) => void;
}

const useEventSlice = create<eventSliceStore>((set) => ({
  events: [],
  mutator: null,
  setEvents: (events) => set({ events }),
  setMutator: (mutator) => set({ mutator })
}));

export default useEventSlice;