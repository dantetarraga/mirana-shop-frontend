import { useParams } from 'react-router'
import { useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const IMAGES_BY_PRODUCT = Array(5).fill('/alien.avif')

const ProductDetailPage = () => {
  const { productId } = useParams()
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const handleAddToCart = () => {}

  return (
    <section className='grid grid-cols-2 gap-5 max-w-[1200px] mx-auto'>
      <div className=''>
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
      </div>

      <div>
        <h1 className='mb-4 text-2xl font-bold text-gray-800'>Nombre Producto</h1>

        {/* Descripción */}
        <p className='mb-4 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ea molestiae perspiciatis obcaecati perferendis harum ipsam totam ipsa. Est voluptatem totam, corporis rerum illo a tempore possimus eius quaerat temporibus?</p>

        {/* Precio */}
        <p className='mb-6 text-lg font-semibold text-gray-900'>
          $400.00
        </p>

        {/* Botón de comprar */}
        <button
          className='px-6 py-3 font-medium text-white transition bg-blue-600 rounded-md hover:bg-blue-700'
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </section>
  )
}

export default ProductDetailPage
