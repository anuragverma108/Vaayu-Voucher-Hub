import { create } from 'zustand';

interface UserState {
  name: string;
  points: number;
  setName: (name: string) => void;
  deductPoints: (amount: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: 'Anurag',
  points: 1000,
  setName: (name) => set({ name }),
  deductPoints: (amount) => set((state) => ({ points: state.points - amount })),
})); 