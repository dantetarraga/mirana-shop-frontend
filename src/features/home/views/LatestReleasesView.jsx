import { SwiperSlide } from 'swiper/react'
import CarouselV2 from '../components/CarouselV2'

const Card = ({ image, title, description, link }) => {
  return (
    <div className='relative cursor-pointer group bg-white overflow-hidden lg:w-[460px] lg:h-[460px] border-[9px] border-black'>
      <img
        src={image}
        alt={title}
        className='object-cover w-full transition-transform duration-500 ease-in-out transform group-hover:scale-105'
      />

      <div className='absolute bottom-0 w-full p-2 text-center bg-black lg:h-40 bg-opacity-80'>
        <h3 className='text-sm font-bold text-white lg:text-lg'>{title}</h3>
        <p className='hidden mt-1 text-sm text-gray-200 lg:block'>
          {description}
        </p>
        <a
          href={link}
          className='hidden mt-2 font-bold text-red-500 lg:inline-block'
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
  return (
    <section>
      {/* <Carousel title='Últimos lanzamientos' hasClippedBackground slideDistance={574} visibleItems={4}>
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </Carousel> */}

      <CarouselV2
        title='Últimos lanzamientos'
        visibleItems={1}
        hasClippedBackground
        spaceBetween={24}
        slidesPerView={1.6}
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
      </CarouselV2>
    </section>
  )
}

export default LatestReleasesView
