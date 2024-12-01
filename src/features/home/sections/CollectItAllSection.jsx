const CollectItAllSection = () => {
  return (
    <section className='py-10 mt-10 space-y-5'>
      <div className='flex justify-center'>
        <h2 className='text-4xl font-black tracking-tighter text-center uppercase rounded-md w-fit font-montserrat'>
          Coleccionalo todo
        </h2>
      </div>

      <div className='flex gap-[20px]'>
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
              <p className='absolute z-20 text-3xl font-black tracking-tighter text-white uppercase bottom-10 left-4 group-hover:text-[#e8ecf6]'>
                La magia te espera
              </p>
            </div>

            <p className='absolute z-20 px-4 py-3 text-sm font-bold text-white transform -translate-x-1/2 bg-[#101820] rounded-sm -bottom-5 left-1/2 group-hover:bg-[#F23F40]'>
              Comprar
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CollectItAllSection
