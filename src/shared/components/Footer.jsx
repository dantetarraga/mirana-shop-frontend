import Facebook from '@/assets/social-media/facebook.svg'
import Instagram from '@/assets/social-media/instagram.svg'
import Youtube from '@/assets/social-media/youtube.svg'
import Tiktok from '@/assets/social-media/tiktok.svg'

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
  return (
    <footer className='text-white h-[600px] flex items-center justify-center bg-[#101820] clip-banner-inverse'>
      <div className='grid grid-cols-4 gap-[50px] w-[1250px] [&>div>h4]:font-black [&>div>h4]:text-2xl [&>div>h4]:tracking-tighter'>
        <div className='space-y-2 [&>ul]:space-y-2'>
          <h4 className='uppercase'>Registrate ahora y empieza a ahorrar</h4>
          <p>
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

        <div className='space-y-2 [&>ul]:space-y-2'>
          <h4 className='uppercase'>Sobre Nosotros</h4>
          <ul>
            <li>Nuestra historia</li>
            <li>Programa de afiliados</li>
            <li>Chat en linea</li>
            <li>Carreras</li>
          </ul>
        </div>

        <div className='space-y-2 [&>ul]:space-y-2'>
          <h4 className='uppercase'>Atención al cliente</h4>
          <ul>
            <li>Devoluciones y cambios</li>
            <li>Información de envio</li>
            <li>Seguimiento de pedido</li>
            <li>Politica de privacidad</li>
          </ul>
        </div>

        <div className='space-y-6'>
          <h4 className='text-center uppercase'>Conocenos más</h4>

          <ul className='flex items-center justify-center gap-6'>
            {SOCIAL_MEDIA.map(({ image, alt }) => (
              <li key={alt}>
                <img src={image} alt={alt} className='w-[40px] rounded-md cursor-pointer' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
