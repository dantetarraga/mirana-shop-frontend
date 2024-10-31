import { useState } from 'react'

const slides = [
  {
    id: 1,
    image: '/banners/Chucky.webp',
    title: 'ALIEN: ROMULUS',
    description:
      'Ultimate Scorched Xenomorph 7" Scale Action Figure & Accessory Set'
  },
  {
    id: 2,
    image: '/banners/inferno.jpg',
    title: 'ALIEN MASK SET',
    description: 'Exclusive Collectible Alien Mask & Accessories'
  }
]

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className='w-full overflow-hidden'>
      <div
        className='flex transition-transform duration-700'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className='relative w-full min-w-full'>
            <img
              src={slide.image}
              alt={slide.title}
              className='w-full h-full object-cover'
            />

            <div className='absolute bottom-0 inset-x-0 mb-10 flex flex-col items-center justify-center text-white p-8'>
              <h2 className='text-4xl font-bold mb-4'>{slide.title}</h2>
              <p className='text-lg mb-6'>{slide.description}</p>
              <button className='bg-red-600 px-6 py-3 rounded-md hover:bg-red-500'>
                PRE-ORDER NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductCarousel
