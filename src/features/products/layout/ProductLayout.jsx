import { Outlet } from 'react-router'

const ProductLayout = () => {
  return (
    <main className='pt-[80px] px-[16px]'>
      <Outlet />
    </main>
  )
}

export default ProductLayout
