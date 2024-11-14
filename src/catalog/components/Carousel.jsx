import { useState } from 'react'

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = children.length

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)

  return (
    <div className='relative p-6 w-full'>
      <div className='absolute w-full overflow-hidden'>
        <div className='flex gap-6 transition-transform duration-700' style={{ transform: `translateX(-${currentIndex * 374}px)` }}>
          {children}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className='absolute z-20 top-1/2 transform -translate-y-1/2 flex space-x-4'>
        <button
          onClick={prevSlide}
          className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md'
        >
          Prev
        </button>

        <button
          onClick={nextSlide}
          className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Carousel
