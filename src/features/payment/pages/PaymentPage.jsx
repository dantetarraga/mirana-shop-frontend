import { CreditCard, Minus, Package, Plus, Star, Ticket, Trash2, Truck } from 'lucide-react'
import { Button } from '../../products/views/ProductDetails'
import { Input } from '@/shared/components/Input'
import { Card, CardContent, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/Carousel'

const CART = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 200,
    quantity: 2,
    image: '20.avif'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 300,
    quantity: 1,
    image: 'toy.avif'
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 120,
    quantity: 1,
    image: 'alien.avif'
  }
]

const RECOMMENDED = [
  {
    id: 4,
    name: 'Producto Recomendado 1',
    price: 150,
    image: '20.avif'
  },
  {
    id: 5,
    name: 'Producto Recomendado 2',
    price: 180,
    image: '20.avif'
  },
  {
    id: 6,
    name: 'Producto Recomendado 3',
    price: 220,
    image: '20.avif'
  },
  {
    id: 7,
    name: 'Producto Recomendado 4',
    price: 190,
    image: '20.avif'
  }
]

const PaymentPage = () => {
  const subtotal = CART.reduce((acc, product) => acc + product.price * product.quantity, 0)
  const shipping = 0
  const tax = subtotal * 0.18
  const total = subtotal + shipping + tax

  return (
    <div className='max-w-5xl mx-auto space-y-4 bg-background'>
      <h3 className='text-2xl font-bold uppercase font-montserrat'>Mi carrito (3)</h3>

      <section className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        <div className='space-y-4 lg:col-span-2'>
          <div className='text-sm font-medium text-emerald-500'>
            Disponibles ahora
          </div>

          {
            CART.map((product) => (
              <div key={product.id} className='p-4 transition-colors border rounded-lg shadow-sm bg-card text-card-foreground border-border/50 hover:border-primary/50'>
                <div className='flex items-center gap-4'>
                  <img src={product.image} alt={product.name} className='object-cover w-20 h-20 rounded-md' />

                  <div className='flex-1'>
                    <h3 className='font-medium'>{product.name}</h3>
                    <p className='mb-2 text-sm text-muted-foreground'>{product.description}</p>
                    <p className='font-semibold text-primary'>S/ {product.price}</p>
                    <p className='mt-1 text-sm text-muted-foreground'>
                      Subtotal: S/ {(product.price * product.quantity).toFixed(2)}
                    </p>
                  </div>

                  <div className='flex items-center gap-2'>
                    <Button
                      variant='outline'
                      size='icon'
                      className='w-8 h-8'
                    >
                      <Minus className='w-4 h-4' />
                    </Button>

                    <span className='w-8 text-center'>{product.quantity}</span>

                    <Button
                      variant='outline'
                      size='icon'
                      className='w-8 h-8'
                    >
                      <Plus className='w-4 h-4' />
                    </Button>

                    <Button
                      variant='ghost'
                      size='icon'
                      className='w-8 h-8 text-destructive'
                    >
                      <Trash2 className='w-4 h-4' />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className='lg:col-span-1'>
          <div className='sticky p-6 space-y-6 border rounded-lg shadow-sm bg-card text-card-foreground border-border/50 top-4'>
            <h2 className='mb-4 text-xl font-semibold'>Resumen de Compra</h2>

            {/* Coupon Section */}
            <div className='space-y-2'>
              <label htmlFor='coupon' className='text-sm font-medium'>
                ¿Tienes un cupón?
              </label>
              <div className='flex gap-2'>
                <Input
                  id='coupon'
                  placeholder='Ingresa tu código'
                  className='flex-1'
                />
                <Button variant='outline'>
                  <Ticket className='w-4 h-4 mr-2' />
                  Aplicar
                </Button>
              </div>
            </div>

            <div className='space-y-4'>
              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>Subtotal:</span>
                <span>S/ {subtotal.toFixed(2)}</span>
              </div>

              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>Envío:</span>
                <span>S/ {shipping.toFixed(2)}</span>
              </div>

              <div className='flex items-center justify-between text-sm'>
                <span className='text-muted-foreground'>IGV (18%):</span>
                <span>S/ {tax.toFixed(2)}</span>
              </div>

              {/* Points Section */}
              {/* <div className='flex items-center justify-between p-3 text-sm rounded-md text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30'>
                <span className='flex items-center gap-2'>
                  <Gift className='w-4 h-4' />
                  Puntos a ganar:
                </span>
                <span className='font-semibold'>{totalPoints} pts</span>
              </div> */}

              <div className='pt-4 border-t border-border'>
                <div className='flex items-center justify-between mb-6'>
                  <span className='font-medium'>Total:</span>
                  <span className='text-2xl font-bold'>S/ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Shipping and Payment Info */}
            <div className='pt-4 space-y-4 border-t border-border'>
              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Truck className='w-4 h-4' />
                <span>Envío gratis en compras mayores a S/ 299</span>
              </div>

              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <CreditCard className='w-4 h-4' />
                <span>Pago seguro con tarjeta</span>
              </div>

              <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                <Package className='w-4 h-4' />
                <span>Garantía de devolución de 30 días</span>
              </div>
            </div>

            <Button className='w-full bg-primary hover:bg-primary/90'>
              Proceder al pago
            </Button>
          </div>
        </div>
      </section>

      <div className='mt-16'>
        <h2 className='flex items-center gap-2 mb-6 text-xl font-semibold'>
          <Star className='w-5 h-5 text-primary' />
          Recomendados para ti
        </h2>

        <Carousel className='w-full'>
          <CarouselContent className='-ml-4'>
            {RECOMMENDED.map((product) => (
              <CarouselItem key={product.id} className='pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4'>
                <Card className='transition-colors hover:border-primary/50'>
                  <CardContent className='p-4'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='object-cover w-full mb-4 rounded-md aspect-square'
                    />
                    <h3 className='mb-2 font-medium'>{product.name}</h3>
                    <p className='font-semibold text-primary'>S/ {product.price}</p>
                    <Button variant='outline' className='w-full mt-4'>
                      Agregar al carrito
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  )
}

export default PaymentPage
