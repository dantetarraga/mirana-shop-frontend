import { BookCheck, HandCoins, PackageSearch, Ticket } from 'lucide-react'

const ShopAdvantages = () => {
  return (
    <div className='flex flex-col justify-center space-y-8'>
      <div className='w-3/4 mx-auto space-y-4 text-center lg:w-1/3'>
        <h3 className='subsection-heading'>¿Por que comprar en Mirana Shop?</h3>
        <p className='text-sm text-center text-gray-500 md:text-base'>
          Comprar con Sideshow viene con beneficios únicos que no están disponibles en ningún otro lugar. Descubre todas las razones para quedarte y jugar.
        </p>
      </div>

      <li className='grid grid-cols-2 md:grid-cols-4 max-w-3xl lg:max-w-[1250px] lg:w-full mx-auto [&>ul]:flex [&>ul]:flex-col [&>ul]:items-center [&>ul]:text-center [&>ul]:space-y-6'>
        <ul className=''>
          <PackageSearch size='45%' strokeWidth={1} />
          <span className='text-sm font-black uppercase'>FLEXIBLE PAYMENT OPTIONS</span>
        </ul>

        <ul>
          <BookCheck size='45%' strokeWidth={1} />
          <span className='text-sm font-black uppercase'>FLEXIBLE PAYMENT OPTIONS</span>
        </ul>

        <ul>
          <HandCoins size='45%' strokeWidth={1} />
          <span className='text-sm font-black uppercase'>FLEXIBLE PAYMENT OPTIONS</span>
        </ul>

        <ul>
          <Ticket size='45%' strokeWidth={1} />
          <span className='text-sm font-black uppercase'>FLEXIBLE PAYMENT OPTIONS</span>
        </ul>
      </li>
    </div>
  )
}

export default ShopAdvantages
