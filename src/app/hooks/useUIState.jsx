import { useEffect, useState } from 'react'
import useUIStore from '../store/useUiStore'
import { useLocation } from 'react-router'

const useUIState = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { toggleSidebar, isOpenSidebar } = useUIStore()
  const location = useLocation()

  const handleScroll = () => setIsScrolled(window.scrollY > 50)
  const handleResize = () => setIsMobile(window.matchMedia('(max-width: 640px)').matches)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const backgroundClass =
    isScrolled || location.pathname !== '/' || isMobile
      ? 'bg-[#00002A]'
      : 'bg-transparent'

  return {
    isScrolled,
    isMobile,
    toggleSidebar,
    backgroundClass,
    isOpenSidebar,

    handleScroll,
    handleResize
  }
}

export default useUIState
