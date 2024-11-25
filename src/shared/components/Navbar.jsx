import { Search, ShoppingCart, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const ITEMS_NAVBAR = [
  { href: '/products', label: 'Productos' },
  { href: '/contacts', label: 'Temas' },
  { href: '/about', label: 'Marcas' },
  { href: '/delivery', label: 'Unete a la diversión' },
  { href: '/reviews', label: 'Sobre Nosotros' }
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 0) setIsScrolled(true)
    else setIsScrolled(false)
  }

  return (
    <header
      className={`fixed top-0 z-30 flex items-center w-full h-[125px] px-[48px] text-white ${
        isScrolled ? 'bg-gray-900' : 'bg-transparent'
      }`}
    >
      <div className='flex flex-grow basis-0'>
        <img
          src='logo-miranashop.svg'
          alt='Mirana Shop'
          className='w-[190px]'
        />
      </div>

      <nav className='text-xl font-bold font-roboto-condensed'>
        <ul className='flex gap-16'>
          {ITEMS_NAVBAR.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className='relative cursor-pointer group'
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span className={`${isActive ? 'w-full' : 'absolute bottom-[-8px] left-0 rounded-sm w-0 h-[6px] bg-[#f24040] transition-all duration-300 group-hover:w-full'}`} />
                </>
              )}
            </NavLink>
          ))}
        </ul>
      </nav>

      <div className='flex justify-end flex-grow gap-5 basis-0 [&>*]:cursor-pointer'>
        <Search />
        <User />
        <ShoppingCart />
      </div>
    </header>
  )
}

export default Navbar
