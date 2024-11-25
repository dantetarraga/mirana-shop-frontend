import { StepBack, StepForward } from 'lucide-react'
import useCarousel from '../hooks/useCarousel'

const Carousel = ({ children, title, visibleItems, slideDistance, hasClippedBackground = false }) => {
  const {
    currentSlide,
    isNextDisabled,
    isPrevDisabled,
    nextSlide,
    prevSlide
  } = useCarousel(children.length, visibleItems)

  return (
    <div className='relative h-[600px] p-[24px] overflow-hidden'>

      {hasClippedBackground && <div className='w-full h-[435px] clip-banner -z-10 left-0 top-0 absolute bg-[#E7E7E0]' />}

      <div className='w-full overflow-hidden'>
        <div className='flex mt-[50px]'>
          <div className='grow basis-0' />

          <h2 className='text-4xl font-black tracking-tighter text-center text-black uppercase'>
            {title}
          </h2>

          <div className='flex justify-end space-x-4 grow basis-0'>
            <button
              onClick={prevSlide}
              className={`px-[6px] p-[8px] bg-white rounded-md shadow-md hover:bg-gray-200 disabled:hover:bg-none disabled:bg-slate-100 ${
                isPrevDisabled && 'bg-slate-100 shadow-none'
              }`}
              disabled={isPrevDisabled}
            >
              <StepBack />
            </button>

            <button
              onClick={nextSlide}
              className={`px-[6px] p-[8px] bg-white rounded-md shadow-md hover:bg-gray-200 disabled:hover:bg-none disabled:bg-slate-100 ${
                isNextDisabled && 'bg-slate-100 shadow-none'
              }`}
              disabled={isNextDisabled}
            >
              <StepForward />
            </button>
          </div>
        </div>

        <div
          className='absolute top-[140px] flex gap-[24px] transition-transform duration-700'
          style={{ transform: `translateX(-${currentSlide * slideDistance}px)` }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Carousel
