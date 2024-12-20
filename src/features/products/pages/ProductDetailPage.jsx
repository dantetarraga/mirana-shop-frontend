import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import ProductDetails from '../views/ProductDetails'
import ProductGallery from '../views/ProductGallery'

const IMAGES_BY_PRODUCT = Array(5).fill('/alien.avif')

const ProductDetailPage = () => {
  // const { productId } = useParams()

  return (
    <section className='max-w-[1150px] mx-auto space-y-4'>
      <div className='pb-4 border-b-4 border-red-700'>
        <h2 className='text-xl font-bold uppercase md:text-2xl font-montserrat'>
          Spider-Man: No Way Home Marvel Legends Green Goblin 1:1 Scale Wearable
          Helmet
        </h2>
        <p className='text-sm font-bold uppercase'>
          Brand <span className='text-red-700'>Marvel</span>
        </p>
      </div>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
        <section className='md:col-span-2'>
          <ProductGallery images={IMAGES_BY_PRODUCT} />
        </section>

        {/* Detalles del producto */}
        <section>
          <ProductDetails
            price='$124.99'
            installments='4'
            paymentMethod='$31.25'
          />
        </section>
      </div>
    </section>
  )
}

export default ProductDetailPage
