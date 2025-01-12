import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import ProductDetails from '../views/ProductDetails'
import ProductGallery from '../views/ProductGallery'

const IMAGES_BY_PRODUCT = Array(5).fill('/alien.avif')

const productDescription = {
  title: 'Descripción del producto',
  content: `Sumérgete en el universo Marvel con este increíble casco de Green Goblin a escala 1:1, 
    una réplica exacta del usado en Spider-Man: No Way Home. Fabricado con materiales de alta calidad, 
    este casco coleccionable cuenta con detalles precisos, acabados metálicos y efectos de desgaste 
    que lo hacen parecer recién salido de la película.`,
  features: [
    'Material: Plástico de alta calidad con acabados metálicos',
    'Tamaño: Escala 1:1 (tamaño real)',
    'Detalles precisos de la película',
    'Perfecto para coleccionistas'
  ]
}

const ProductDetailPage = () => {
  // const { productId } = useParams()

  return (
    <section className='max-w-[1150px] mx-auto space-y-4'>

      <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
        <ProductGallery images={IMAGES_BY_PRODUCT} />

        {/* Detalles del producto */}
        <ProductDetails
          price='124.99'
          installments='4'
          paymentMethod='$31.25'
        />
      </div>

      {/* Descripcion del producto */}
      <section className='w-full p-6 mt-8 shadow-sm bg-card rounded-xl sm:p-8 lg:p-10'>
        <h2 className='mb-6 text-2xl font-bold text-description'>{productDescription.title}</h2>
        <div className='prose max-w-none'>
          <p className='mb-8 text-base text-primary sm:text-lg'>
            {productDescription.content}
          </p>
          <ul className='space-y-2 list-disc list-inside text-description'>
            {productDescription.features.map((feature, index) => (
              <li key={index} className='text-base sm:text-lg'>{feature}</li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  )
}

export default ProductDetailPage
