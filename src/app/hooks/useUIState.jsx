import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import useUIStore from '../store/useUIStore'

export const useUIState = () => {
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { toggleSidebar, isOpenSidebar } = useUIStore()

  const handleScroll = () => setIsScrolled(window.scrollY > 50)
  const handleResize = () => setIsMobile(window.matchMedia('(max-width: 640px)').matches)

  useEffect(() => {
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const backgroundClass = useMemo(
    () =>
      isScrolled || location.pathname !== '/' || isMobile
        ? 'bg-[#00002A]'
        : 'bg-transparent',
    [isScrolled, location.pathname, isMobile]
  )

  return {
    isScrolled,
    isMobile,
    toggleSidebar,
    backgroundClass,
    isOpenSidebar
  }
}

export default useUIState
