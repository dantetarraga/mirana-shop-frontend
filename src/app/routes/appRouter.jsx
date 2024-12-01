import { createBrowserRouter } from 'react-router'
import HomePage from '@/features/home/pages/HomePage'
import { productRouter } from '@/features/products/router/productRouter'
import MainLayout from '../layouts/MainLayout'

const router = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      ...productRouter
    ]
  }
]

export const appRouter = createBrowserRouter(router)
