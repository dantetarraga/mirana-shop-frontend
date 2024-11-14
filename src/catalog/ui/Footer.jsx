const Footer = () => {
  return (
    <footer className='text-white h-[500px] flex items-center justify-center bg-[#101820] clip-banner-inverse'>
      <div className='grid grid-cols-4 gap-[50px] w-[1050px]'>
        <div className='space-y-2 [&>ul]:space-y-2'>
          <h4 className='uppercase'>Registrate ahora y empieza a ahorrar</h4>
          <p>Registrate para ser el primero en enterarte de nuestras novedades, promociones especiales y esclusivas online.</p>

          <form className=''>
            <input className='relative rounded-md p-2' type='email' placeholder='Ingresa tu correo electrónico' />
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

        <div className='space-y-2 [&>ul]:space-y-2'>
          <h4 className='uppercase'>Conocenos más</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
