import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import useUIStore from '../store/useUIStore'

export const useUIState = () => {
  const location = useLocation()
  // const [isMobile, setIsMobile] = useState(false)
  const [screenSize, setScreenSize] = useState('desktop')
  const [isScrolled, setIsScrolled] = useState(false)
  const { toggleSidebar, isOpenSidebar } = useUIStore()

  const handleScroll = () => setIsScrolled(window.scrollY > 50)
  const handleResize = () => {
    const width = window.innerWidth
    const screenSize = width <= 640
      ? 'mobile'
      : width <= 1024
        ? 'tablet'
        : 'desktop'

    setScreenSize(screenSize)
  }

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
      isScrolled || location.pathname !== '/' || screenSize === 'mobile' || screenSize === 'tablet'
        ? 'bg-[#00002A]'
        : 'bg-transparent',
    [isScrolled, location.pathname, screenSize]
  )

  return {
    isScrolled,
    screenSize,
    toggleSidebar,
    backgroundClass,
    isOpenSidebar
  }
}

export default useUIState
