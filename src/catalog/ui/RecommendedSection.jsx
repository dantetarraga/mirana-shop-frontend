import Carousel from '../components/Carousel'

const TOYS = [
  {
    image: '/30.png',
    name: 'Gill Beast: Namazu Vinyl Collectible',
    type: 'Siver Collectible',
    price: 120
  },
  {
    image: '/30.png',
    name: 'Harley Quinn™ & The Joker™: Lawless Love Art Print',
    type: 'Art Print',
    price: 50
  },
  {
    image: '/30.png',
    name: 'Purge Trooper Sixth Scale',
    type: 'Sixth Scale',
    price: 250
  },
  {
    image: '/30.png',
    name: 'Purge Trooper Sixth Scale',
    type: 'Sixth Scale',
    price: 250
  },
  {
    image: '/30.png',
    name: 'Purge Trooper Sixth Scale',
    type: 'Sixth Scale',
    price: 250
  },
  {
    image: '/30.png',
    name: 'Purge Trooper Sixth Scale',
    type: 'Sixth Scale',
    price: 250
  },
  {
    image: '/30.png',
    name: 'Purge Trooper Sixth Scale',
    type: 'Sixth Scale',
    price: 150
  }
]

const RecommendedSection = () => {
  return (
    <section className='h-[450px]'>
      <h3 className='uppercase text-center text-4xl font-extrabold'>Recomendados para ti</h3>
      <Carousel>
        {TOYS.map((toy, index) => (
          <div key={index} className='w-[250px] space-y-4 flex items-center flex-col'>
            <img src={toy.image} alt={toy.name} className='w-[100px] object-cover' />
            <div className='p-4 bg-gray-100'>
              <h3 className='text-lg font-bold'>{toy.name}</h3>
              <p className='text-sm text-gray-500 mt-1'>{toy.type}</p>
              <p className='text-sm text-gray-500 mt-1'>${toy.price}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default RecommendedSection
