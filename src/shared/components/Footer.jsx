import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import Facebook from '@/assets/social-media/facebook.svg'
import Instagram from '@/assets/social-media/instagram.svg'
import Youtube from '@/assets/social-media/youtube.svg'
import Tiktok from '@/assets/social-media/tiktok.svg'
import useUIState from '../../app/hooks/useUIState'

const SOCIAL_MEDIA = [
  {
    image: Facebook,
    alt: 'Facebook'
  },
  {
    image: Instagram,
    alt: 'Instagram'
  },
  {
    image: Youtube,
    alt: 'Youtube'
  },
  {
    image: Tiktok,
    alt: 'Tiktok'
  }
]

const Footer = () => {
  const [openMenu, setOpenMenu] = useState(null)
  const handleToggleMenu = (menuTitle) =>
    setOpenMenu(openMenu === menuTitle ? null : menuTitle)
  const { screenSize } = useUIState()

  return (
    <footer className='text-white flex items-center justify-center bg-[#101820] clip-banner min-h-[420px] '>
      <div className='grid grid-cols-1 lg:grid-cols-5 lg:gap-[50px] w-[85%] lg:w-[1250px] [&>div]:py-4 [&>div]:px-1'>
        <div
          className={`space-y-2 [&>ul]:space-y-2 ${screenSize !== 'desktop' && 'border-y border-white'}`}
          onClick={() => handleToggleMenu('register')}
        >
          <div className='flex justify-between'>
            <h4 className='footer-heading'>
              Registrate ahora y empieza a ahorrar
            </h4>
            {screenSize !== 'desktop' && <ChevronDown />}
          </div>

          <div hidden={screenSize !== 'desktop'} className='w-full'>
            <p className=''>
              Registrate para ser el primero en enterarte de nuestras novedades,
              promociones especiales y esclusivas online.
            </p>

            <form className=''>
              <input
                className='relative p-2 rounded-md'
                type='email'
                placeholder='Ingresa tu correo electrónico'
              />
              <button className='absolute' />
            </form>
          </div>
        </div>

        <div className={`space-y-2 [&>ul]:space-y-2 ${screenSize !== 'desktop' && 'border-y border-white'}`}>
          <div className='flex justify-between'>
            <h4
              className='footer-heading'
              onClick={() => handleToggleMenu('about')}
            >
              Sobre Nosotros
            </h4>
            {screenSize !== 'desktop' && <ChevronDown />}
          </div>

          <ul hidden={screenSize !== 'desktop'}>
            <li>Nuestra historia</li>
            <li>Programa de afiliados</li>
            <li>Chat en linea</li>
            <li>Carreras</li>
          </ul>
        </div>

        <div className={`space-y-2 [&>ul]:space-y-2 ${screenSize !== 'desktop' && 'border-y border-white'}`}>
          <div className='flex justify-between'>
            <h4 className='footer-heading'>Atención al cliente</h4>
            {screenSize !== 'desktop' && <ChevronDown />}
          </div>
          <ul hidden={screenSize !== 'desktop'}>
            <li>Devoluciones y cambios</li>
            <li>Información de envio</li>
            <li>Seguimiento de pedido</li>
            <li>Politica de privacidad</li>
          </ul>
        </div>

        <div className='space-y-6 lg:col-span-2 '>
          <h4 className='text-center footer-heading'>Conocenos más</h4>

          <ul className='flex items-center justify-center gap-6'>
            {SOCIAL_MEDIA.map(({ image, alt }) => (
              <li key={alt}>
                <img
                  src={image}
                  alt={alt}
                  className='w-[30px] lg:w-[40px] rounded-md cursor-pointer'
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
