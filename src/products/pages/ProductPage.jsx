import { AlignLeft, Heart, ShoppingCart } from 'lucide-react'

const ProductPage = () => {
  return (
    <section className='pt-[149px] px-[90px] space-y-[16px]'>
      <h3 className='text-2xl font-black uppercase'>Productos</h3>

      <div className='inline-flex gap-[8px] cursor-pointer'>
        <AlignLeft />
        <span>Ver filtros</span>
      </div>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[20px]'>
        {Array(15)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className='space-y-3 cursor-pointer'
            >
              <div className='flex justify-center py-4 rounded-md relative bg-[#F2F2EE] '>
                <img src='/toy.avif' alt='' className='object-cover w-[75%]' />
                <span className='absolute bottom-4 right-4 px-[8px] rounded-sm py-[4px] text-xs font-bold text-white uppercase bg-black'>
                  Pre lanzamiento
                </span>
              </div>

              <div className='space-y-[1px]'>
                <p className='text-sm font-bold uppercase'>Batman</p>
                <p className='text-xs text-gray-500'>
                  Lorem ipsum dolor sit amet.
                </p>

                <div className='flex items-center justify-between'>
                  <p className='text-sm font-bold'>S/ 50.00</p>

                  <div className='inline-flex gap-2'>
                    <Heart />
                    <ShoppingCart />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default ProductPage
