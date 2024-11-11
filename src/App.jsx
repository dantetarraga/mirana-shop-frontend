import { Search, ShoppingCart, User } from 'lucide-react'
import './style.css'
import ProductCarousel from './catalog/ui/ProductCarousel'
import BrandGallery from './catalog/ui/BrandGallery'
import LatestReleases from './catalog/ui/LatestReleases'

const ITEMS_NAVBAR = [
  { href: '/catalog', label: 'Colecciones' },
  { href: '/contacts', label: 'Temas' },
  { href: '/about', label: 'Marcas' },
  { href: '/delivery', label: 'Unete a la diversión' },
  { href: '/reviews', label: 'Sobre Nosotros' }
]

function App () {
  return (
    <div className='h-screen'>
      <header className='relative'>
        <nav className='flex items-center fixed h-16 z-10 top-0 text-white w-full px-12 py-14'>
          <div className='flex flex-grow basis-0'>
            <img
              src='logo-miranashop.svg'
              alt='Mirana Shop'
              className='w-[190px]'
            />
          </div>

          <ul className='flex justify-between gap-16 font-bold text-lg'>
            {ITEMS_NAVBAR.map((item) => (
              <li key={item.href}>{item.label}</li>
            ))}
          </ul>

          <div className='flex gap-5 flex-grow basis-0 justify-end'>
            <Search />
            <User />
            <ShoppingCart />
          </div>
        </nav>

        {/* <section className='relative'> */}
        <ProductCarousel />
      </header>

      <main className='mx-auto container'>
        <BrandGallery />

        <div className='space-y-5'>
          <h2 className='text-center font-bold text-4xl'>Recogerlo Todo</h2>
          <div className='grid grid-cols-4 gap-[24px]'>
            {
              Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className='w-[296px] relative cursor-pointer'>
                  <img
                    src='/10.jpg'
                    alt='Product'
                    className='rounded-md object-cover'
                  />
                  <p className='text-5xl font-bold text-white absolute bottom-12 left-8'>La magia te espera</p>

                  <p className='absolute text-sm font-bold -bottom-5 left-1/2 transform -translate-x-1/2 py-3 px-4 rounded-md bg-gray-800 text-white'>Prisionero de guerra</p>
                </div>
              ))
            }
          </div>
        </div>
      </main>

      <LatestReleases />

      <footer>
        <p>Mirana Shop</p>
      </footer>
    </div>
  )
}

export default App
