const BRANDS = [
  '/brands/1.svg',
  '/brands/2.svg',
  '/brands/3.svg',
  '/brands/4.svg',
  '/brands/5.svg',
  '/brands/6.svg',
  '/brands/7.svg',
  '/brands/8.svg'
]

const BrandGallerySection = () => {
  return (
    <section className='relative z-10 flex items-center gap-[35px] text-white font-montserrat mt-8'>
      <div className='-z-10 absolute bg-gray-900 w-[350px] h-[350px] -left-[65px] -rotate-[10deg]' />

      <div className='flex flex-col justify-center gap-[24px]'>
        <h2 className='text-4xl font-black'>
          TODAS TUS <br /> MARCAS FAVORITAS
        </h2>

        <p className='relative font-extrabold cursor-pointer font-montserrat w-fit group'>
          VER TODAS LAS MARCAS
          <span className='absolute bottom-[-8px] left-0 rounded-sm w-0 h-[6px] bg-[#f24040] transition-all duration-300 group-hover:w-full' />
        </p>
      </div>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] w-full gap-y-[0px] gap-x-[40px]'>
        {BRANDS.map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt={`Brand ${index + 1}`}
            className='w-full transition-all duration-300 transform cursor-pointer hover:scale-110'
          />
        ))}
      </div>
    </section>
  )
}

export default BrandGallerySection
