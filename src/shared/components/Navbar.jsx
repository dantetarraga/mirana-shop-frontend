import { Search, ShoppingCart, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const ITEMS_NAVBAR = [
  { href: '/products', label: 'Productos' },
  { href: '/contacts', label: 'Temas' },
  { href: '/about', label: 'Marcas' },
  { href: '/delivery', label: 'Unete a la diversión' },
  { href: '/reviews', label: 'Sobre Nosotros' }
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const backgroundClass =
    isScrolled || location.pathname !== '/' ? 'bg-gray-900' : 'bg-transparent'

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
      className={`fixed top-0 z-30 flex items-center w-full h-[125px] px-[48px] text-white ${backgroundClass}`}
    >
      <div className='flex flex-grow basis-0'>
        <img
          src='logo-miranashop.svg'
          alt='Mirana Shop'
          className='w-[190px] cursor-pointer'
          onClick={() => navigate('/')}
        />
      </div>

      <nav className='text-xl font-bold font-roboto-condensed'>
        <ul className='flex gap-16'>
          {ITEMS_NAVBAR.map((item) => (
            <li key={item.href}>
              <NavLink to={item.href} className='relative cursor-pointer group'>
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`bottom-[-8px] left-0 absolute rounded-sm w-0 h-[4px] bg-[#f24040] ${
                        isActive
                          ? 'w-full bg-[#f24040]'
                          : 'transition-all duration-300 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex justify-end flex-grow gap-5 basis-0'>
        <ul className='flex gap-5'>
          <li className='p-2 rounded cursor-pointer hover:bg-gray-500'>
            <Search />
          </li>
          <li className='p-2 rounded cursor-pointer hover:bg-gray-500'>
            <User />
          </li>
          <li className='p-2 rounded cursor-pointer hover:bg-gray-500'>
            <ShoppingCart />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
