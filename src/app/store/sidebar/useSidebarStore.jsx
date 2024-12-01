import { create } from 'zustand'

const useSidebarStore = create((set) => ({
  isOpenSidebar: false,
  toggleSidebar: () => set((state) => ({ isOpenSidebar: !state.isOpenSidebar }))
}))

export default useSidebarStore
