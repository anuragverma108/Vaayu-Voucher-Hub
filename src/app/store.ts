import { create } from 'zustand';
import { useEffect, useState } from 'react';

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

// Custom hook to handle hydration
export const useHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
}; 