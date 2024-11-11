import { useState } from 'react'

const Card = ({ image, title, description, link }) => {
  return (
    <div className='relative bg-white overflow-hidden flex-shrink-0 w-[350px] h-[500px] border-[9px] border-black'>
      <img src={image} alt={title} className='w-full h-full object-cover' />

      <div className='absolute bottom-0 bg-black bg-opacity-80 w-full h-40 p-4'>
        <h3 className='text-lg font-bold text-white'>{title}</h3>
        <p className='text-sm text-gray-200 mt-1'>{description}</p>
        <a href={link} className='text-red-500 font-bold mt-2 inline-block'>Pre-Order Now</a>
      </div>
    </div>
  )
}

const LatestReleases = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const cards = [
    {
      image: '/20.avif',
      title: 'Gill Beast: Namazu Vinyl Collectible',
      description: 'Sideshow and Acro present the Gill Beast: Namazu Vinyl Collectible...',
      link: '#'
    },
    {
      image: '/20.avif',
      title: 'Harley Quinn™ & The Joker™: Lawless Love Art Print',
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

  const totalCards = cards.length

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards)
  }

  return (
    <div className='relative mt-16 h-[700px] p-6 w-full after:content-[""] after:bg-[#E7E7E0] after:absolute after:top-0 after:left-0 after:w-full after:h-[460px] after:clip-banner after:-z-10'>

      <div className='absolute top-[70px] w-full overflow-hidden'>
        <h2 className='text-center text-4xl font-extrabold text-black mb-10'>Ultimos Lanzamientos</h2>

        <div className='flex gap-6 transition-transform duration-700' style={{ transform: `translateX(-${currentIndex * 374}px)` }}>
          {cards.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <div className='absolute z-20 top-1/2 transform -translate-y-1/2 flex space-x-4'>
        <button
          onClick={prevSlide}
          className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md'
        >
          Prev
        </button>

        <button
          onClick={nextSlide}
          className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default LatestReleases
