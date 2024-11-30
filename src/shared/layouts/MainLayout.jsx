import { Outlet } from 'react-router'
import { Navbar, Footer, Sidebar } from '../'

const MainLayout = () => {
  return (
    <div className='relative flex flex-col h-screen'>
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
