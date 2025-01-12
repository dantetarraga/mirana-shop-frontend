import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  forwardRef
} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { ArrowLeft, ArrowRight, Car } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

const CarouselContext = createContext(null)

function useCarousel () {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const Carousel = ({
  children,
  navigation = true,
  orientation = 'horizontal',
  onSwiper,
  className,
  ...props
}) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const swiperRef = useRef(null)

  const scrollPrev = () => {
    swiperRef.current?.slidePrev()
  }

  const scrollNext = () => {
    swiperRef.current?.slideNext()
  }

  useEffect(() => {
    // const swiper = swiperRef.current
    // if (!swiper) return

    // const updateNavigationState = () => {
    //   setCanScrollPrev(!swiper.isBeginning)
    //   setCanScrollNext(!swiper.isEnd)
    // }

    // swiper.on('slideChange', updateNavigationState)
    // updateNavigationState()

    return () => {
      // swiper.off('slideChange', updateNavigationState)
    }
  }, [])

  return (

    <Swiper
      ref={swiperRef}
      modules={[Navigation]}
        // direction={orientation === 'horizontal' ? 'horizontal' : 'vertical'}
      onSwiper={onSwiper}
      navigation={navigation}
      slidesPerView={5}
      className={className}
      breakpoints={{
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1280: {
          slidesPerView: 4
        },
        1536: {
          slidesPerView: 5
        }
      }}
      {...props}
    >
      {children}
    </Swiper>
  )
}

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  // const { carouselRef, orientation } = useCarousel()
  const orientation = 'horizontal'
  return (
    <div className='overflow-hidden'>
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className
        )}
        {...props}
      />
    </div>
  )
})

CarouselContent.displayName = 'CarouselContent'

const CarouselItem = ({ children, className, ...props }) => {
  return (
    <SwiperSlide className={className} {...props}>
      {children}
    </SwiperSlide>
  )
}

const CarouselPrevious = ({ className, ...props }) => {
  const { scrollPrev, canScrollPrev } = useCarousel()

  return (
    <button
      className={`absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2 ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className='w-4 h-4' />
      <span className='sr-only'>Previous slide</span>
    </button>
  )
}

const CarouselNext = ({ className, ...props }) => {
  const { scrollNext, canScrollNext } = useCarousel()

  return (
    <button
      className={`absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2 ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className='w-4 h-4' />
      <span className='sr-only'>Next slide</span>
    </button>
  )
}

const Card = forwardRef((props, ref) => {
  const { className, ...rest } = props
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...rest}
    />
  )
})
Card.displayName = 'Card'

const CardHeader = forwardRef((props, ref) => {
  const { className, ...rest } = props
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...rest}
    />
  )
})

CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef((props, ref) => {
  const { className, ...rest } = props
  return (
    <h3
      ref={ref}
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className
      )}
      {...rest}
    />
  )
})

CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef((props, ref) => {
  const { className, ...rest } = props
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...rest}
    />
  )
})

CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef((props, ref) => {
  const { className, ...rest } = props
  return <div ref={ref} className={cn('p-6 pt-0', className)} {...rest} />
})

CardContent.displayName = 'CardContent'

const CardFooter = forwardRef((props, ref) => {
  const { className, ...rest } = props
  return (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...rest}
    />
  )
})
CardFooter.displayName = 'CardFooter'

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
}
