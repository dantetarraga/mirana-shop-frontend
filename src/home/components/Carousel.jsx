import { useState } from 'react'

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = children.length

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)

  return (
    <div className='relative w-full h-auto p-6'>
      <div className='absolute w-full overflow-hidden'>
        <div
          className='flex gap-6 transition-transform duration-700'
          style={{ width: `${totalSlides * 100}%`, transform: `translateX(-${(currentIndex / totalSlides) * 100}%)` }}
        >
          {children}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className='absolute z-20 flex space-x-4 transform -translate-y-1/2 top-1/2'>
        <button
          onClick={prevSlide}
          className='flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md'
        >
          Prev
        </button>

        <button
          onClick={nextSlide}
          className='flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Carousel
