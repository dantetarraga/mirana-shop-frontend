import { Outlet } from 'react-router'
import { Navbar, Footer } from '../'
import { Sidebar } from 'lucide-react'

const MainLayout = () => {
  return (
    <div className='relative flex flex-col h-screen overflow-x-hidden'>
      <Navbar />

      <Sidebar />

      <main className='flex-grow'>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
