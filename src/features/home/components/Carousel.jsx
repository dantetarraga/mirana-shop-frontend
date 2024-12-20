import { StepBack, StepForward } from 'lucide-react'

import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'
import { useRef } from 'react'

const Carousel = ({
  children,
  title,
  slidesPerView,
  spaceBetween,
  breakpoints,
  hasClippedBackground = false,
  hasClippedBackgroundInverted = false
}) => {
  const swiperRef = useRef(null)

  return (
    <div className='relative overflow-hidden lg:h-fit lg:pt-0'>
      {hasClippedBackground && (
        <div className='w-full h-[435px] clip-banner -z-10 left-0 top-0 absolute bg-[#E7E7E0]' />
      )}

      {hasClippedBackgroundInverted && (
        <div className='w-full h-[435px] clip-banner-inverse -z-10 left-0 top-0 absolute bg-[#E7E7E0]' />
      )}

      <div
        className={`flex items-center justify-between px-4 ${
          hasClippedBackground || hasClippedBackgroundInverted
            ? 'pt-10 mb-4 md:mb-8 lg:mb-12'
            : 'pb-6 lg:pb-12'
        }`}
      >
        <div className='flex-grow hidden md:block basis-0' />

        <h2 className='font-black tracking-tighter text-black uppercase md:text-2xl md:text-center sm:grow sm:basis-0 lg:text-4xl'>
          {title}
        </h2>

        <div className='flex justify-end space-x-3 md:grow md:basis-0'>
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className='px-[6px] py-[8px] bg-white rounded-md shadow-md hover:bg-gray-200 disabled:hover:bg-none disabled:bg-slate-100 '
          >
            <StepBack />
          </button>

          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className='px-[6px] py-[8px] bg-white rounded-md shadow-md hover:bg-gray-200 disabled:hover:bg-none disabled:bg-slate-100 '
          >
            <StepForward />
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: '.prev-button',
          nextEl: '.next-button'
        }}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default Carousel
