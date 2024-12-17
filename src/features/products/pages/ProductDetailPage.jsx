import { useParams } from 'react-router'
import { useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Check, ShoppingCart } from 'lucide-react'

const IMAGES_BY_PRODUCT = Array(5).fill('/alien.avif')

const ProductDetailPage = () => {
  const { productId } = useParams()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const handleAddToCart = () => {
    console.log('Add to cart')
  }

  return (
    <section className='max-w-[1200px] mx-auto space-y-4'>
      <div className='pb-4 border-b-4 border-red-700'>
        <h2 className='text-2xl font-bold uppercase font-montserrat'>
          Spider-Man: No Way Home Marvel Legends Green Goblin 1:1 Scale Wearable
          Helmet
        </h2>
        <p className='text-sm font-bold uppercase'>
          Brand <span className='text-red-700'>Marvel</span>
        </p>
      </div>

      <div className='grid grid-cols-3 gap-5'>
        <section className='col-span-2'>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff'
            }}
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mb-[10px]'
          >
            {IMAGES_BY_PRODUCT.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className='object-cover w-full h-full'
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {IMAGES_BY_PRODUCT.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Product ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className='space-y-4'>
          <div className='pb-4 border-2 h-fit'>
            <h3 className='bg-[#597B1D] text-white font-montserrat text-xl font-bold p-2 uppercase text-center'>
              in stock
            </h3>

            <div className='p-4 space-y-2 text-center font-montserrat'>
              <span className='text-2xl font-bold'>$124.99</span>
              <p className='text-xs'>or 4 interest-gree payments of</p>
              <p className='text-xs'>
                <span className='font-bold'>$31.25</span> with YAPE
              </p>
            </div>

            <div className='w-full px-4 space-y-2'>
              <button className='flex items-center justify-center w-full gap-4 p-2 text-lg font-bold tracking-tighter text-white uppercase bg-red-600'>
                Add to cart
                <ShoppingCart size={20} fill='#fff' />
              </button>

              <h4 className='text-sm font-bold uppercase'>select packaging grade</h4>
              <div className='space-y-1'>
                <div className='flex items-center justify-between px-2 py-1 bg-[#597B1D] text-white font-semibold'>
                  <span>standard</span>
                  <Check size={16} color='#fff' />
                </div>

                <div className='flex items-center justify-between px-2 py-1 font-semibold text-black bg-gray-300'>
                  <span>standard</span>
                  <Check size={16} color='#000' />
                </div>

                <div className='flex items-center justify-between px-2 py-1 font-semibold text-black bg-gray-300'>
                  <span>standard</span>
                  <Check size={16} color='#000' />
                </div>
              </div>

              <div className='flex items-center gap-5'>
                <span className='text-sm text-gray-500'>Cantidad</span>
                <select className='w-full p-2 border-2 border-gray-300 rounded'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                </select>
              </div>
            </div>
          </div>

          <div className='border' />
        </section>
      </div>
    </section>
  )
}

export default ProductDetailPage
