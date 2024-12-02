import { useState } from 'react'
import useUIState from '@/app/hooks/useUIState'

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

const HeroView = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { isMobile } = useUIState()

  return (
    <div className={`relative w-full overflow-hidden ${isMobile && 'pt-[65px]'}`}>
      <div
        className='flex transition-transform duration-700'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className='relative w-full min-w-full'>
            <img
              src={slide.image}
              alt={slide.title}
              className='object-cover w-full h-full'
            />

            <div className='absolute inset-x-0 bottom-0 flex flex-col items-center justify-center p-8 mb-10 text-white'>
              <h2 className='mb-4 text-4xl font-bold'>{slide.title}</h2>
              <p className='mb-6 text-lg'>{slide.description}</p>
              <button className='px-6 py-3 bg-red-600 rounded-md hover:bg-red-500'>
                PRE-ORDER NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute flex space-x-2 transform -translate-x-1/2 bottom-4 left-1/2'>
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

export default HeroView
