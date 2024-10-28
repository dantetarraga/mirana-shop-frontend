import { Search, ShoppingCart, User } from 'lucide-react';
import Home from './catalog/pages/Home';
import './style.css'
import ProductCarousel from './catalog/ui/ProductCarousel';

const ITEMS_NAVBAR = [
  { href: '/catalog', label: 'Colecciones' },
  { href: '/contacts', label: 'Temas' },
  { href: '/about', label: 'Marcas' },
  { href: '/delivery', label: 'Unete a la diversión' },
  { href: '/reviews', label: 'Sobre Nosotros' },
];

const slides = [
  {
    id: 1,
    image: "/banners/Chucky.webp",
    title: "ALIEN: ROMULUS",
    description:
      'Ultimate Scorched Xenomorph 7" Scale Action Figure & Accessory Set',
  },
  {
    id: 2,
    image: "/banners/inferno.jpg",
    title: "ALIEN MASK SET",
    description: "Exclusive Collectible Alien Mask & Accessories",
  },
];

function App() {
  return (
    <div className='h-screen'>
      <header className='relative'>
        <nav className='flex items-center fixed h-16 z-10 top-0 text-white w-full px-12 py-14'>
          <div className='flex flex-grow basis-0'>
            <img src="logo-miranashop.svg" alt="Mirana Shop" className='w-[190px]' />
          </div>

          <ul className='flex justify-between font-roboto-condensed gap-16 font-bold text-lg'>
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

      <footer>
        <p>Mirana Shop</p>
      </footer>
    </div>
  );
}

export default App;
