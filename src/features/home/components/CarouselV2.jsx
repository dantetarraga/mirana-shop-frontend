import { StepBack, StepForward } from 'lucide-react'

import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'
import { useRef } from 'react'

const CarouselV2 = ({ children, title, slidesPerView, spaceBetween, hasClippedBackground = false }) => {
  const swiperRef = useRef(null)
  const pagination = {
    clickable: true,
    renderBullet: (index, className) => {
      return `<span class="${className} custom-bullet">${index + 1}</span>`
    }
  }

  return (
    <div className='relative lg:h-[600px] p-2 lg:p-[24px] overflow-hidden'>

      {hasClippedBackground && <div className='w-full h-[435px] clip-banner -z-10 left-0 top-0 absolute bg-[#E7E7E0]' />}

      <div className='flex items-center mt-20 mb-5'>
        <div className='grow basis-0' />

        <h2 className='font-black tracking-tighter text-center text-black uppercase grow basis-0 lg:text-4xl'>
          {title}
        </h2>

        <div className='flex justify-end space-x-3 grow basis-0'>
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
        pagination={pagination}
        odules={[Pagination, Navigation]}
        navigation={{
          prevEl: '.prev-button',
          nextEl: '.next-button'
        }}
      >
        {children}
      </Swiper>
    </div>
  )
}

export default CarouselV2
