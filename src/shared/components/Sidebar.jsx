import { Play, X } from 'lucide-react'
import { useNavigate } from 'react-router'
import useUIState from '../hooks/useUIState'

const ITEMS_NAVBAR = [
  { href: '/products', label: 'Productos' },
  { href: '/contacts', label: 'Temas' },
  { href: '/about', label: 'Marcas' },
  { href: '/delivery', label: 'Unete a la diversión' },
  { href: '/reviews', label: 'Sobre Nosotros' }
]

const Sidebar = () => {
  const { toggleSidebar, isOpenSidebar } = useUIState()
  const navigate = useNavigate()

  const handleNavigate = (to) => {
    navigate(to)
    toggleSidebar()
  }

  return (
    <div
      className={`fixed top-0 left-0 h-full p-4 z-40 w-full text-white bg-[#00002A] font-bold text-lg transform transition-transform duration-300 divide-y divide-gray-500 space-y-4 ${
        isOpenSidebar ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className='flex items-center justify-between h-[80px]'>
        <img
          src='logo-miranashop.svg'
          alt='Mirana Shop'
          className='w-[140px] cursor-pointer object-cover'
          onClick={() => handleNavigate('/')}
        />

        <button onClick={toggleSidebar}>
          <X size={24} />
        </button>
      </div>

      <nav>
        <ul className='flex flex-col tracking-tighter divide-y divide-gray-500'>
          {ITEMS_NAVBAR.map((item) => (
            <li key={item.href} className='px-3 py-5'>
              <div
                onClick={() => handleNavigate(item.href)}
                className='flex items-center justify-between uppercase'
              >
                <span>{item.label}</span>
                <Play size={12} fill='#fff' />
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
