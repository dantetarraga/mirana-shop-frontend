import { Search, ShoppingCart, User } from 'lucide-react'

const ITEMS_NAVBAR = [
  { href: '/catalog', label: 'Colecciones' },
  { href: '/contacts', label: 'Temas' },
  { href: '/about', label: 'Marcas' },
  { href: '/delivery', label: 'Unete a la diversión' },
  { href: '/reviews', label: 'Sobre Nosotros' }
]

const Navbar = () => {
  return (
    <header className='flex items-center fixed h-16 z-10 top-0 text-white w-full px-12 py-14'>
      <div className='flex flex-grow basis-0'>
        <img
          src='logo-miranashop.svg'
          alt='Mirana Shop'
          className='w-[190px]'
        />
      </div>

      <nav className='font-roboto-condensed font-bold text-lg'>
        <ul className='flex gap-16'>
          {ITEMS_NAVBAR.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex gap-5 flex-grow basis-0 justify-end'>
        <Search />
        <User />
        <ShoppingCart />
      </div>
    </header>
  )
}

export default Navbar
