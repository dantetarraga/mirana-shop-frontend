import { SwiperSlide } from 'swiper/react'
import Carousel from '../components/Carousel'

const Card = ({ className, image, title, description, link }) => {
  return (
    <div className={`relative cursor-pointer group bg-white overflow-hidden border-[9px] border-black ${className}`}>
      <img
        src={image}
        alt={title}
        className='object-cover w-full transition-transform duration-500 ease-in-out transform group-hover:scale-105'
      />

      <div className='absolute bottom-0 w-full p-2 text-center bg-black lg:h-32 bg-opacity-80'>
        <h3 className='text-sm font-bold text-white lg:text-lg'>{title}</h3>
        <p className='hidden mt-1 text-sm text-gray-200 md:block lg:block'>
          {description}
        </p>
        <a
          href={link}
          className='hidden mt-2 font-bold text-red-500 md:block lg:inline-block'
        >
          Pre-Order Now
        </a>
      </div>
    </div>
  )
}

const cards = [
  {
    image: '/20.avif',
    title: 'Gill Beast: Namazu Vinyl',
    description:
      'Sideshow and Acro present the Gill Beast: Namazu Vinyl Collectible...',
    link: '#'
  },
  {
    image: '/20.avif',
    title: 'Harley Quinn™ & The Joker™',
    description: '“You don’t have to be crazy to be in love... but it helps.”',
    link: '#'
  },
  {
    image: '/20.avif',
    title: 'Purge Trooper Sixth Scale',
    description: 'In Star Wars: Commander, the Purge Trooper Commander...',
    link: '#'
  },
  {
    image: '/20.avif',
    title: 'Purge Trooper Sixth Scale',
    description: 'In Star Wars: Commander, the Purge Trooper Commander...',
    link: '#'
  },
  {
    image: '/20.avif',
    title: 'Purge Trooper Sixth Scale',
    description: 'In Star Wars: Commander, the Purge Trooper Commander...',
    link: '#'
  },
  {
    image: '/20.avif',
    title: 'Purge Trooper Sixth Scale',
    description: 'In Star Wars: Commander, the Purge Trooper Commander...',
    link: '#'
  },
  {
    image: '/20.avif',
    title: 'Purge Trooper Sixth Scale',
    description: 'In Star Wars: Commander, the Purge Trooper Commander...',
    link: '#'
  }
]

const LatestReleasesView = () => {
  const breakpoints = {
    1024: { slidesPerView: 3.7 }
  }
  return (
    <Carousel
      title='Últimos lanzamientos'
      visibleItems={1}
      hasClippedBackgroundInverted
      spaceBetween={12}
      slidesPerView={1.7}
      breakpoints={breakpoints}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index} className='flex justify-center'>
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        </SwiperSlide>
      ))}
    </Carousel>
  )
}

export default LatestReleasesView
