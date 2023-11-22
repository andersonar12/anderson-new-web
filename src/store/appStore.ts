import { create } from 'zustand'

interface State {
    navbarVisible: boolean;
    setNavbarVisible: (visible: boolean) => void;
}
export const useStore = create<State>((set) => ({
    navbarVisible: false,
    setNavbarVisible: (navbarVisible: boolean) => set({ navbarVisible: !navbarVisible }),
}))