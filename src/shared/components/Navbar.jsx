/* eslint-disable multiline-ternary */
import { Menu, Moon, Search, ShoppingCart, Sun, User } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router'
import useUIStore from '../../app/store/useUIStore'
import { useEffect } from 'react'
import useUIState from '../hooks/useUIState'

const ITEMS_NAVBAR = [
  { href: '/products', label: 'Productos' },
  { href: '/contacts', label: 'Temas' },
  { href: '/about', label: 'Marcas' },
  { href: '/delivery', label: 'Unete a la diversión' },
  { href: '/reviews', label: 'Sobre Nosotros' }
]

const Navbar = () => {
  const { toggleSidebar, backgroundClass } = useUIState()
  const { theme, toggleTheme } = useUIStore()
  const navigate = useNavigate()

  console.log('Navbar render')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const goToPayment = () => navigate('/payment')

  return (
    <header
      className={`fixed top-0 z-30 flex items-center w-full pr-[16px] lg:px-[48px] h-[65px] text-white ${backgroundClass}`}
    >
      <button
        className='bg-[#02A8FE] h-full flex items-center justify-center w-[55px] lg:hidden'
        onClick={toggleSidebar}
      >
        <Menu size={30} />
      </button>

      <div className='flex flex-grow basis-0'>
        <img
          src='logo-miranashop.svg'
          alt='Mirana Shop'
          className='w-[100px] md:w-[120px] cursor-pointer'
          onClick={() => navigate('/')}
        />
      </div>

      <nav className='hidden text-sm font-bold md:text-lg lg:block font-roboto-condensed'>
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

      <div className='flex justify-end flex-grow basis-0'>
        <ul className='flex gap-[8px] [&>*]:cursor-pointer [&>*]:rounded md:[&>*]:p-[8px] [&>*]:p-[4px]'>
          <li className='hover:bg-slate-500'>
            <Search size={22} />
          </li>
          <li className='hover:bg-slate-500'>
            {theme === 'light' ? (
              <Sun onClick={toggleTheme} />
            ) : (
              <Moon onClick={toggleTheme} />
            )}
          </li>
          <li className='hover:bg-slate-500'>
            <User size={22} />
          </li>
          <li className='relative hover:bg-slate-500' onClick={goToPayment}>
            <ShoppingCart size={22} />
            <span className='absolute md:top-0 md:right-0 flex items-center justify-center bg-red-600 text-xs font-semibold rounded-full w-[16px] h-[16px] -right-1 -top-[2px]'>
              5
            </span>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
