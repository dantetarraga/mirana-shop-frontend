import { Check, ShoppingCart } from 'lucide-react'

const ProductDetails = ({ price, installments, paymentMethod }) => {
  return (
    <div className='space-y-4'>
      <div className='pb-4 border-2 h-fit'>
        <h3 className='bg-[#597B1D] text-white font-montserrat text-xl font-bold p-2 uppercase text-center'>
          in stock
        </h3>

        <div className='p-4 space-y-2 text-center font-montserrat'>
          <span className='text-2xl font-bold'>{price}</span>
          <p className='text-xs'>or {installments} interest-free payments of</p>
          <p className='text-xs'>
            <span className='font-bold'>{paymentMethod}</span> with YAPE
          </p>
        </div>

        <div className='w-full px-4 space-y-2'>
          <button className='flex items-center justify-center w-full gap-4 p-2 text-lg font-bold tracking-tighter text-white uppercase bg-red-600'>
            Add to cart
            <ShoppingCart size={20} fill='#fff' />
          </button>

          <h4 className='text-sm font-bold uppercase'>Select Packaging Grade</h4>
          <div className='space-y-1'>
            <div className='flex items-center justify-between px-2 py-1 bg-[#597B1D] text-white font-semibold'>
              <span>Standard</span>
              <Check size={16} color='#fff' />
            </div>

            <div className='flex items-center justify-between px-2 py-1 font-semibold text-black bg-gray-300'>
              <span>Standard</span>
              <Check size={16} color='#000' />
            </div>

            <div className='flex items-center justify-between px-2 py-1 font-semibold text-black bg-gray-300'>
              <span>Standard</span>
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
    </div>
  )
}

export default ProductDetails
