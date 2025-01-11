import { ShoppingCart, Minus, Plus } from 'lucide-react'

import React, { useState } from 'react'

const categories = ['Figuras de acción', 'Juguetes', 'Coleccionables']

const buttonStyles = {
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  variants: {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline'
  },
  sizes: {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10'
  }
}

function getButtonClasses (variant, size, className) {
  const variantClass = buttonStyles.variants[variant] || buttonStyles.variants.default
  const sizeClass = buttonStyles.sizes[size] || buttonStyles.sizes.default
  return `${buttonStyles.base} ${variantClass} ${sizeClass} ${className || ''}`.trim()
}

export const Button = React.forwardRef(function Button (
  { className, variant = 'default', size = 'default', asChild = false, ...props },
  ref
) {
  const Component = asChild ? 'span' : 'button' // Cambia el componente base según la prop `asChild`
  return (
    <Component
      className={getButtonClasses(variant, size, className)}
      ref={ref}
      {...props}
    />
  )
})

const QuantitySelector = ({ value, onChange }) => {
  const decrease = () => onChange(Math.max(1, value - 1))
  const increase = () => onChange(value + 1)

  return (
    <div className='flex items-center gap-4'>
      <Button
        variant='outline'
        size='icon'
        onClick={decrease}
        className='h-12 w-12 border-2 border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white transition-all'
      >
        <Minus className='w-6 h-6' />
      </Button>

      <div className='w-20 h-12 flex items-center justify-center border-2 border-[#0EA5E9] rounded-md text-xl font-bold text-[#0EA5E9]'>
        {value}
      </div>

      <Button
        variant='outline'
        size='icon'
        onClick={increase}
        className='h-12 w-12 border-2 border-[#0EA5E9] text-[#0EA5E9] hover:bg-[#0EA5E9] hover:text-white transition-all'
      >
        <Plus className='w-6 h-6' />
      </Button>
    </div>
  )
}

const ProductDetails = ({ price }) => {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    console.log('Added to cart:', quantity)
  }

  return (
    <div className='flex flex-col gap-8 p-8 shadow-sm bg-card rounded-xl animate-fade-in'>
      <div className='space-y-4'>
        <div className='flex items-center gap-3'>
          <h1 className='text-3xl font-extrabold tracking-tight text-[#334155] leading-tight'>
            Groot Guardians of the Galaxy Vol. 3 – HOT TOYS
          </h1>
          <div className='inline-flex items-center px-3 py-1 text-sm font-bold text-green-600 uppercase rounded-full bg-green-50 animate-scale-in'>
            En stock
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-sm font-medium text-[#64748B]'>MARCA -</span>
          <span className='text-sm font-bold text-[#0EA5E9]'>Marvel</span>
        </div>
      </div>

      <div className='py-6 px-8 bg-[#F8FAFC] rounded-lg border-2 border-[#E2E8F0]'>
        <div className='flex items-center justify-between gap-4'>
          <span className='text-4xl font-black text-[#334155] tracking-tight'>S/.{price}</span>
          <div className='flex items-center gap-2'>
            <span className='text-lg font-bold text-[#0EA5E9]'>¡Gana puntos!</span>
            <p className='text-lg text-[#64748B]'>
              Obtén 600 Points
            </p>
          </div>
        </div>
      </div>

      <div className='space-y-4'>
        <p className='text-lg text-[#64748B] font-medium'>Envíos a todas las regiones de Perú – Retira GRATIS en nuestras tiendas</p>
        <a href='#' className='text-sm text-[#0EA5E9] hover:text-[#0284C7] transition-colors font-medium hover:underline'>
          Consulta nuestros términos y condiciones
        </a>
      </div>

      <div className='flex flex-col gap-6'>
        <QuantitySelector value={quantity} onChange={setQuantity} />
        <Button
          size='lg'
          className='w-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-lg font-bold py-6 transition-all transform hover:scale-105'
          onClick={handleAddToCart}
        >
          <ShoppingCart className='w-6 h-6 mr-2' />
          Agregar al carrito
        </Button>
      </div>

      <div className='mt-6'>
        <h3 className='mb-2 text-sm font-medium text-gray-900'>Categoría:</h3>
        <div className='flex flex-wrap gap-2 text-sm text-gray-600'>
          {categories.map((category, index) => (
            <span key={category}>
              {category}
              {index < categories.length - 1 && ', '}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
