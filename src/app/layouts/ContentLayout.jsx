import { Outlet } from 'react-router'

const ContentLayout = () => {
  return (
    <main className='pt-[80px] px-[16px]'>
      <Outlet />
    </main>
  )
}

export default ContentLayout
