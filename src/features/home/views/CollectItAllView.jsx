const CollectItAllView = () => {
  return (
    <section className='px-4 space-y-5 lg:py-10 lg:mt-10'>
      <div className='flex justify-center'>
        <h2 className='text-xl font-black tracking-tighter text-center uppercase rounded-md md:text-2xl lg:text-4xl font-montserrat'>
          Coleccionalo todo
        </h2>
      </div>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-[10px] gap-y-[25px]'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className='relative cursor-pointer group hover:shadow-2xl'
          >
            <div className='absolute inset-0 z-10 bg-gradient-to-t from-[#101820] via-transparent to-transparent rounded-lg' />

            <div className='overflow-hidden rounded-lg'>
              <img
                src='/star-wars.jpg'
                alt='Product'
                className='object-cover w-full transition-transform duration-500 transform group-hover:scale-105'
              />
              <p className='absolute z-20 text-lg lg:text-3xl font-black tracking-tighter text-white uppercase bottom-8 left-4 group-hover:text-[#e8ecf6]'>
                La magia te espera
              </p>
            </div>

            <p className='absolute z-20 px-4 py-2 lg:py-3 text-xs lg:text-sm lg:font-bold text-white transform -translate-x-1/2 bg-[#101820] rounded-sm -bottom-3 left-1/2 group-hover:bg-[#F23F40]'>
              Comprar
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CollectItAllView
