import { create } from 'zustand'

const useUIStore = create((set) => ({
  theme: 'light',
  isOpenSidebar: false,
  toggleSidebar: () => set((state) => ({ isOpenSidebar: !state.isOpenSidebar })),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' }))
}))

export default useUIStore
