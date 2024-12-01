import { create } from 'zustand'

const useUIStore = create((set) => ({
  isOpenSidebar: false,
  toggleSidebar: () => set((state) => ({ isOpenSidebar: !state.isOpenSidebar }))
}))

export default useUIStore
