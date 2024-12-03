import { useState } from 'react'
import useUIState from '@/app/hooks/useUIState'

const slides = [
  {
    id: 1,
    imageDesktop: '/ironMan-tablet.jpg',
    imageMobile: '/ironMan-mobil.jpg',
    title: 'ALIEN ROMULUS',
    description:
      'Ultimate Scorched Xenomorph 7" Scale Action Figure & Accessory Set'
  },
  {
    id: 2,
    imageDesktop: '/ironMan-tablet.jpg',
    imageMobile: '/ironMan-mobil.jpg',
    title: 'ALIEN MASK SET',
    description: 'Exclusive Collectible Alien Mask & Accessories'
  }
]

const HeroView = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { screenSize } = useUIState()

  return (
    <div
      className={`relative w-full overflow-hidden ${
        (screenSize === 'tablet' || screenSize === 'mobile') && 'pt-[64px]'
      }`}
    >
      <div
        className='flex transition-transform duration-700'
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className='relative w-full min-w-full'>
            <img
              src={screenSize === 'mobile' ? slide.imageMobile : slide.imageDesktop}
              alt={slide.title}
              className='object-center w-full'
            />

            <div className='absolute inset-x-0 bottom-0 flex flex-col items-center justify-center p-8 mb-10 space-y-4'>
              <h2 className='text-white subsection-heading'>{slide.title}</h2>
              <p className='text-gray-100 md:text-lg'>{slide.description}</p>
              <button className='px-4 py-3 text-sm text-white bg-red-600 rounded-sm md:px-6 md:py-3 hover:bg-red-500'>
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
