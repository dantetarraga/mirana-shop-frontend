import { Trash } from 'lucide-react'

const CART = [
  {
    id: 1,
    name: 'Producto 1',
    price: 200,
    quantity: 2,
    image: '20.avif'
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 300,
    quantity: 1,
    image: 'toy.avif'
  },
  {
    id: 3,
    name: 'Producto 3',
    price: 120,
    quantity: 1,
    image: 'alien.avif'
  }
]

const PaymentPage = () => {
  return (
    <div className='max-w-[1150px] mx-auto space-y-4'>
      <h3 className='text-xl uppercase font-montserrat'>Mi carrito (3)</h3>

      <section className='grid grid-cols-3 gap-10'>
        <div className='flex flex-col col-span-2 p-4 divide-y-2 shadow-lg'>
          <h4 className='p-2 text-sm font-semibold text-green-600'>
            Disponibles ahora
          </h4>

          {
            CART.map((product) => (
              <div key={product.id} className='flex justify-between p-4'>
                <div className='flex gap-10'>
                  <img
                    className='object-contain rounded-lg w-[120px] h-[120px]'
                    src={`${product.image}`}
                    alt={product.name}
                  />
                  <div className='flex flex-col justify-around'>
                    <h5 className='font-semibold '>{product.name}</h5>
                    <p className='text-sm text-gray-500'>${product.price}</p>
                  </div>
                </div>

                <div className='flex flex-col justify-around'>
                  <Trash size={20} color='blue' className='self-end cursor-pointer' />

                  <div className='border-2 rounded-xl'>
                    <button className='px-4 py-2 text-sm text-gray-500 cursor-pointer'>-</button>
                    <span className='px-6 py-2'>{product.quantity}</span>
                    <button className='px-4 py-2 text-sm text-gray-500 cursor-pointer'>+</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className='p-4 divide-y-2 shadow-lg'>
          <h4 className='p-2 text-sm font-semibold'>Resumen</h4>

          <div className='flex justify-between text-lg font-semibold'>
            <p>Total: </p>
            <span>$820</span>
          </div>

          <button className='w-full px-4 py-2 font-semibold text-white bg-blue-800 rounded-3xl'>
            Confirmar compra
          </button>
        </div>
      </section>
    </div>
  )
}

export default PaymentPage
