import { StepBack, StepForward } from 'lucide-react'
import { useState } from 'react'

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

const LatestReleasesSection = () => {
  const [currentSlide, setcurrentSlide] = useState(0)
  const visibleCards = 4
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

  const totalCards = cards.length

  const nextSlide = () => {
    if (currentSlide < totalCards - visibleCards) setcurrentSlide((prevSlide) => prevSlide + 1)
  }

  const prevSlide = () => {
    if (currentSlide > 0) setcurrentSlide((prevSlide) => prevSlide - 1)
  }

  return (
    <div className='relative mt-16 h-[700px] p-[24px] overflow-hidden'>
      <div className='w-full h-[435px] clip-banner -z-10 left-0 top-0 absolute bg-[#E7E7E0]' />

      <div className='w-full overflow-hidden'>
        <div className='flex mt-[50px]'>
          <div className='grow basis-0' />
          <h2 className='text-4xl font-black tracking-tighter text-center text-black uppercase'>
            Ultimos Lanzamientos
          </h2>

          <div className='flex justify-end space-x-4 grow basis-0'>
            <button
              onClick={prevSlide}
              className={`px-[6px] p-[8px] bg-white rounded-md shadow-md hover:bg-gray-200 disabled:hover:bg-none disabled:bg-slate-100 ${
                currentSlide === 0 && 'bg-slate-100 shadow-none'
              }`}
              disabled={currentSlide === 0}
            >
              <StepBack />
            </button>

            <button
              onClick={nextSlide}
              className={`px-[6px] p-[8px] bg-white rounded-md shadow-md hover:bg-gray-200 disabled:hover:bg-none disabled:bg-slate-100 ${
                currentSlide === totalCards - visibleCards && 'bg-slate-100 shadow-none'
              }`}
              disabled={currentSlide >= totalCards - visibleCards}
            >
              <StepForward />
            </button>
          </div>
        </div>

        <div
          className='absolute top-[140px] flex gap-[24px] transition-transform duration-700'
          style={{ transform: `translateX(-${currentSlide * 574}px)` }}
        >
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
    </div>
  )
}

export default LatestReleasesSection
