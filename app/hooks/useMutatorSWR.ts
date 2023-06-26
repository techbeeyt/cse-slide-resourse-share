import { create } from 'zustand';

interface MutatorSWRStore {
  mutator: any;
  setMutator: (m: any) => void;
  removeMutator: () => void;
}

const useMutatorSWR = create<MutatorSWRStore>((set) => ({
  mutator: null,
  setMutator: (m: any) => set({ mutator: m }),
  removeMutator: () => set({ mutator: null }),
}));

export default useMutatorSWR;