import { Search, ShoppingCart, User } from 'lucide-react'
import './style.css'
import ProductCarousel from './catalog/ui/ProductCarousel'
import BrandGallery from './catalog/ui/BrandGallery'
import LatestReleases from './catalog/ui/LatestReleases'
import RecommendedSection from './catalog/ui/RecommendedSection'
import Footer from './catalog/ui/Footer'

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
        <nav className='fixed top-0 z-10 flex items-center w-full h-16 px-12 text-white py-14'>
          <div className='flex flex-grow basis-0'>
            <img
              src='logo-miranashop.svg'
              alt='Mirana Shop'
              className='w-[190px]'
            />
          </div>

          <ul className='flex justify-between gap-16 text-lg font-bold'>
            {ITEMS_NAVBAR.map((item) => (
              <li key={item.href}>{item.label}</li>
            ))}
          </ul>

          <div className='flex justify-end flex-grow gap-5 basis-0'>
            <Search />
            <User />
            <ShoppingCart />
          </div>
        </nav>

        {/* <section className='relative'> */}
        <ProductCarousel />
      </header>

      <main>
        <div className='mx-auto max-w-[1250px] '>
          <BrandGallery />

          <div className='mt-10 space-y-5'>
            <h2 className='text-4xl font-black tracking-tighter text-center uppercase rounded-md font-montserrat'>
              Coleccionalo todo
            </h2>

            <div className='flex gap-[20px]'>
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className='relative cursor-pointer group hover:shadow-2xl'>
                  <div className='absolute inset-0 z-10 bg-gradient-to-t from-[#101820] via-transparent to-transparent rounded-lg' />

                  <div className='overflow-hidden rounded-lg'>
                    <img
                      src='/star-wars.jpg'
                      alt='Product'
                      className='object-cover w-full transition-transform duration-500 transform group-hover:scale-105'
                    />
                    <p className='absolute z-20 text-3xl font-black tracking-tighter text-white uppercase bottom-10 left-4 group-hover:text-[#e8ecf6]'>
                      La magia te espera
                    </p>
                  </div>

                  <p className='absolute z-20 px-4 py-3 text-sm font-bold text-white transform -translate-x-1/2 bg-[#101820] rounded-sm -bottom-5 left-1/2 group-hover:bg-[#F23F40]'>
                    Comprar
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

      <LatestReleases />

      <RecommendedSection />

      <Footer />
    </div>
  )
}

export default App
