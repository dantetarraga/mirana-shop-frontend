import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import useUIStore from '../../app/store/useUIStore'

export const useUIState = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [screenSize, setScreenSize] = useState('desktop')
  const { toggleSidebar, isOpenSidebar } = useUIStore()

  const handleScroll = useCallback(
    () => setIsScrolled(window.scrollY > 50),
    []
  )

  const handleResize = useCallback(() => {
    const width = window.innerWidth
    const newScreenSize =
      width <= 640 ? 'mobile' : width <= 1024 ? 'tablet' : 'desktop'
    setScreenSize(newScreenSize)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize, handleScroll])

  const backgroundClass = useMemo(
    () =>
      isScrolled ||
      location.pathname !== '/' ||
      screenSize === 'mobile' ||
      screenSize === 'tablet'
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
