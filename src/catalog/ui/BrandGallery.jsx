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

const BrandGallery = () => {
  return (
    <section className='flex gap-10'>
      <div className='relative w-[360px] h-72'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='bg-gray-900 text-white p-8 transform -rotate-12 origin-center w-full h-full'>
            <div className='rotate-12 font-montserrat absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-6'>
              <h2 className='text-3xl font-black'>TODAS TUS MARCAS FAVORITAS</h2>
              <p className='font-extrabold cursor-pointer border-b-4 w-fit border-[#f24040]'>SEE ALL BRANDS</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-10 flex-wrap items-center'>
        {BRANDS.map((brand, index) => (
          <img key={index} src={brand} alt={`Brand ${index + 1}`} className='w-36' />
        ))}
      </div>
    </section>
  )
}

export default BrandGallery
