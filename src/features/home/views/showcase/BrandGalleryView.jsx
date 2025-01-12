/* eslint-disable multiline-ternary */
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'
import useUIState from '@/shared/hooks/useUIState'

const BRANDS = [
  '/brands/1.svg',
  '/brands/2.svg',
  '/brands/3.svg',
  '/brands/4.svg',
  '/brands/5.svg',
  '/brands/6.svg',
  '/brands/7.svg',
  '/brands/8.svg'
]

const BrandGalleryView = () => {
  const { screenSize } = useUIState()

  return (
    <>
      {screenSize === 'desktop' ? (
        <section className='relative z-10 flex items-center gap-[35px] text-white font-montserrat mt-8'>
          <div className='-z-10 absolute bg-gray-900 w-[350px] h-[350px] -left-[65px] -rotate-[10deg]' />

          <div className='flex flex-col justify-center gap-[24px]'>
            <h2 className='text-4xl font-black'>
              TODAS TUS <br /> MARCAS FAVORITAS
            </h2>

            <p className='relative font-extrabold cursor-pointer font-montserrat w-fit group'>
              VER TODAS LAS MARCAS
              <span className='absolute bottom-[-8px] left-0 rounded-sm w-0 h-[6px] bg-[#f24040] transition-all duration-300 group-hover:w-full' />
            </p>
          </div>

          <div className='grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] w-full gap-y-[0px] gap-x-[40px]'>
            {BRANDS.map((brand, index) => (
              <img
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                className='w-full transition-all duration-300 transform cursor-pointer hover:scale-110'
              />
            ))}
          </div>
        </section>
      ) : (
        <section className='relative z-10 flex flex-col items-center py-8 space-y-4 text-black font-montserrat -top-3'>
          <div className='absolute inset-0 clip-banner bg-[#E7E7E0] -z-10' />

          <h2 className='text-xl font-black text-center text-black md:text-4xl'>
            ALL YOUR FAVORITE BRANDS
          </h2>

          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={12}
            slidesPerView={4.6}
            className='w-full'
            breakpoints={{
              320: { slidesPerView: 4.6 },
              480: { slidesPerView: 5.6 }
            }}
          >
            {BRANDS.map((brand, index) => (
              <SwiperSlide key={index} className='flex justify-center'>
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className='w-24 transition-all duration-300 transform rounded-full cursor-pointer md:w-32 hover:scale-110'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <p className='font-black cursor-pointer group'>
            <span className='relative text-sm md:text-lg'>
              SEE ALL BRANDS
              <span className='absolute bottom-[-6px] left-0 h-[3.2px] bg-red-500 transition-all duration-300 w-full' />
            </span>
          </p>
        </section>
      )}
    </>
  )
}

export default BrandGalleryView
