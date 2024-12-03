import { SwiperSlide } from 'swiper/react'
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

const RecommendedView = () => {
  return (
    <section>
      <Carousel title='Recommended for you' slidesPerView={2.6} spaceBetween={20}>
        {TOYS.map((toy, index) => (
          <SwiperSlide key={index} className='flex justify-center'>
            <div key={index} className='flex flex-col items-center space-y-4 cursor-pointer group'>
              <img src={toy.image} alt={toy.name} className='w-[70%] object-cover group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,.7)]' />

              <div className='w-full h-auto p-2 text-center bg-gray-100 lg:p-4'>
                <h3 className='text-sm font-bold lg:text-lg'>{toy.name}</h3>
                <p className='mt-1 text-sm text-gray-500'>{toy.type}</p>
                <p className='mt-1 text-sm text-gray-500'>${toy.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carousel>
    </section>
  )
}

export default RecommendedView
