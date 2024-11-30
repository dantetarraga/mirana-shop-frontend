import { Search, ShoppingCart, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router'

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
    isScrolled || location.pathname !== '/' ? 'bg-[#00002A]' : 'bg-transparent'

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
      className={`fixed top-0 z-30 flex items-center w-full px-[48px] h-[75px] text-white ${backgroundClass}`}
    >
      <div className='flex flex-grow basis-0'>
        <img
          src='logo-miranashop.svg'
          alt='Mirana Shop'
          className='w-[140px] cursor-pointer'
          onClick={() => navigate('/')}
        />
      </div>

      <nav className='text-lg font-bold font-roboto-condensed'>
        <ul className='flex gap-16'>
          {ITEMS_NAVBAR.map((item) => (
            <li key={item.href}>
              <NavLink to={item.href} className='relative cursor-pointer group'>
                {({ isActive }) => (
                  <>
                    <span className='uppercase'>{item.label}</span>
                    <span
                      className={`bottom-[-8px] left-0 absolute rounded-sm w-0 h-[4px] bg-[#02A8FE] ${
                        isActive
                          ? 'w-full bg-[#02A8FE]'
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
        <ul className='flex gap-5 [&>*]:cursor-pointer [&>*]:rounded [&>*]:p-[8px]'>
          <li className='hover:bg-slate-500'>
            <Search />
          </li>
          <li className='hover:bg-slate-500'>
            <User />
          </li>
          <li className='hover:bg-slate-500'>
            <ShoppingCart />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
