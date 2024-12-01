import { useState } from 'react'

const useCarousel = (totalItems, visibleItems) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isNextDisabled = currentSlide >= totalItems - visibleItems
  const isPrevDisabled = currentSlide === 0

  const nextSlide = () => {
    if (currentSlide === totalItems - 1) return
    if (currentSlide < totalItems - visibleItems) setCurrentSlide((prevSlide) => prevSlide + 1)
  }

  const prevSlide = () => {
    if (currentSlide === 0) return
    if (currentSlide > 0) setCurrentSlide((prevSlide) => prevSlide - 1)
  }

  return {
    // Return the state variables to be used in the component
    currentSlide,
    isNextDisabled,
    isPrevDisabled,

    // Return the functions to be used in the component
    nextSlide,
    prevSlide
  }
}

export default useCarousel
