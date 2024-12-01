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
    <section>
      <Carousel title='Recomendados para ti' visibleItems={5} slideDistance={370}>
        {TOYS.map((toy, index) => (
          <div key={index} className='w-[320px] space-y-4 flex items-center flex-col cursor-pointer group'>
            <img src={toy.image} alt={toy.name} className='w-[130px] object-cover group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.7)]' />

            <div className='w-full p-4 text-center bg-gray-100 h-[130px]'>
              <h3 className='text-lg font-bold'>{toy.name}</h3>
              <p className='mt-1 text-sm text-gray-500'>{toy.type}</p>
              <p className='mt-1 text-sm text-gray-500'>${toy.price}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default RecommendedSection
