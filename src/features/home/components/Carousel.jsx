import { StepBack, StepForward } from 'lucide-react'

import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'
import { useRef, useState } from 'react'

const Carousel = ({
  children,
  title,
  slidesPerView,
  spaceBetween,
  hasClippedBackground = false,
  hasClippedBackgroundInverted = false
}) => {
  const swiperRef = useRef(null)

  return (
    <div className='relative lg:h-[600px] py-8 lg:p-[24px] overflow-hidden'>
      {hasClippedBackground && (
        <div className='w-full h-[435px] clip-banner -z-10 left-0 top-0 absolute bg-[#E7E7E0]' />
      )}

      {hasClippedBackgroundInverted && (
        <div className='w-full h-[435px] clip-banner-inverse -z-10 left-0 top-0 absolute bg-[#E7E7E0]' />
      )}

      <div className='flex items-center justify-between px-4 mb-5 lg:mt-20'>
        <h2 className='font-black tracking-tighter text-black uppercase grow basis-0 lg:text-4xl'>
          {title}
        </h2>

        <div className='flex justify-end space-x-3'>
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className='px-[6px] p-[8px] bg-white rounded-md shadow-md hover:bg-gray-200 disabled:hover:bg-none disabled:bg-slate-100 '
          >
            <StepBack />
          </button>

          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className='px-[6px] p-[8px] bg-white rounded-md shadow-md hover:bg-gray-200 disabled:hover:bg-none disabled:bg-slate-100 '
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
        className=''
      >
        {children}
      </Swiper>

    </div>
  )
}

export default Carousel
