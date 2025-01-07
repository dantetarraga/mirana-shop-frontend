import { Check, ShoppingCart } from 'lucide-react'

const ProductDetails = ({ price, installments, paymentMethod }) => {
  return (
    <section>
      <h2 className='text-xl font-bold uppercase md:text-2xl font-montserrat'>
        Spider-Man: No Way Home Marvel Legends Green Goblin 1:1 Scale Wearable
        Helmet
      </h2>

      <p className='text-sm font-bold uppercase'>
        Marca - <span className='text-red-700'>Marvel</span>
      </p>

      <span className='text-2xl font-bold text-blue-500'>S/. {price}</span>
      <p>Envios a todas las regiones de Perú – Retira GRATIS en nuestras tiendas</p>
      <p>Consulta nuestros términos y condiciones</p>
      <span className='font-bold text-green-600 uppercase '>en stock</span>
      <p>Compre este producto ahora y gane 399 Points!</p>

      <div className='flex gap-5 text-sm'>
        <div className='flex border-2 rounded-xl'>
          <button className='px-3 py-2 text-sm text-gray-500 cursor-pointer hover:bg-slate-200'>-</button>
          <span className='px-6 py-2'>1</span>
          <button className='px-3 py-2 text-sm text-gray-500 cursor-pointer hover:bg-slate-200'>+</button>
        </div>

        <button className='flex items-center justify-center w-full gap-2 px-3 py-2 text-sm text-white bg-blue-500 rounded-lg'>
          <ShoppingCart size={18} />
          Agregar al carrito
        </button>
      </div>
    </section>
  )
}

export default ProductDetails
