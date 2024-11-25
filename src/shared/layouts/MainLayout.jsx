import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../'

const MainLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />

      <main className='flex-grow'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
