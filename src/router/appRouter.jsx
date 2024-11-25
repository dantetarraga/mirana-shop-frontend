import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '@/shared'
import Homepage from '../home/pages/HomePage'

const router = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      }
    ]
  }
]

export const appRouter = createBrowserRouter(router)
