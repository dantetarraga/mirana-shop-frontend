import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper/modules'

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
  return (
    <section className='relative z-10 flex flex-col items-center py-12 space-y-4 text-black lg:py-8 lg:mt-8 font-montserrat -top-3'>
      {/* <div className='-z-10 absolute bg-gray-900 w-[350px] h-[350px] -left-[65px] -rotate-[10deg]' /> */}

      {/* <div className='flex flex-col justify-center gap-[24px]'>
        <h2 className='text-4xl font-black'>
          TODAS TUS <br /> MARCAS FAVORITAS
        </h2>

        <p className='relative font-extrabold cursor-pointer font-montserrat w-fit group'>
          VER TODAS LAS MARCAS
          <span className='absolute bottom-[-8px] left-0 rounded-sm w-0 h-[6px] bg-[#f24040] transition-all duration-300 group-hover:w-full' />
        </p>
      </div> */}

      <div className='absolute inset-0 clip-banner bg-[#E7E7E0] -z-10' />

      <h2 className='text-xl font-black text-center text-black md:text-4xl'>
        ALL YOUR FAVORITE BRANDS
      </h2>

      {/* Swiper Carrusel */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={4}
        slidesPerView={4.6}
        className='w-full max-w-[900px]'
        breakpoints={{
          320: { slidesPerView: 4.6 }, // Móviles
          480: { slidesPerView: 5.6 } // Tablets pequeñas
        }}
      >
        {BRANDS.map((brand, index) => (
          <SwiperSlide key={index} className='flex justify-center'>
            <img
              key={index}
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
  )
}

// const BrandGalleryView = () => {
//   return (
//     <section className="relative z-10 flex flex-col items-center py-8 mt-8 text-black font-montserrat">
//       {/* Background Shape */}
//       <div className="absolute inset-0 clip-banner-inverse bg-[#E7E7E0] -z-10" />

//       {/* Title */}
//       <h2 className="mb-8 text-4xl font-black text-center">
//         ALL YOUR <br /> FAVORITE BRANDS
//       </h2>

//       {/* Brand Gallery */}
//       <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
//         {BRANDS.map((brand, index) => (
//           <img
//             key={index}
//             src={brand}
//             alt={`Brand ${index + 1}`}
//             className="w-24 h-24 transition-all duration-300 transform rounded-full cursor-pointer hover:scale-110"
//           />
//         ))}
//       </div>

//       {/* Link to View All Brands */}
//       <p className="mt-6 font-extrabold cursor-pointer group">
//         <span className="relative">
//           SEE ALL BRANDS
//           <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
//         </span>
//       </p>
//     </section>
//   );
// };

// export default BrandGalleryView;

export default BrandGalleryView
