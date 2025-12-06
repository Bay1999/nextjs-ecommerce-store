import { ActivePageState } from "@/types/global";
import { create } from "zustand";

export const useActivePage = create<ActivePageState>((set) => ({
  activePage: "",
  setActivePage: (activePage: string) => set(() => ({ activePage })),
}))