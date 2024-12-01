import Carousel from '../components/Carousel'

const Card = ({ image, title, description, link }) => {
  return (
    <div className='relative cursor-pointer group bg-white overflow-hidden w-[460px] h-[460px] border-[9px] border-black'>
      <img
        src={image}
        alt={title}
        className='object-cover w-full transition-transform duration-500 ease-in-out transform group-hover:scale-105'
      />

      <div className='absolute bottom-0 w-full h-40 p-4 bg-black bg-opacity-80'>
        <h3 className='text-lg font-bold text-white'>{title}</h3>
        <p className='mt-1 text-sm text-gray-200'>{description}</p>
        <a href={link} className='inline-block mt-2 font-bold text-red-500'>
          Pre-Order Now
        </a>
      </div>
    </div>
  )
}

const cards = [
  {
    image: '/20.avif',
    title: 'Gill Beast: Namazu Vinyl Collectible',
    description:
      'Sideshow and Acro present the Gill Beast: Namazu Vinyl Collectible...',
    link: '#'
  },
  {
    image: '/20.avif',
    title: 'Harley Quinn™ & The Joker™: Lawless Love Art Print',
    description:
      '“You don’t have to be crazy to be in love... but it helps.”',
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

const LatestReleasesSection = () => {
  return (
    <section>
      <Carousel title='Últimos lanzamientos' hasClippedBackground slideDistance={574} visibleItems={4}>
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </Carousel>
    </section>
  )
}

export default LatestReleasesSection
