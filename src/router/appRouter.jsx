import { createBrowserRouter } from 'react-router'
import { MainLayout } from '@/shared'
import HomePage from '@/home/pages/HomePage'
import { productRouter } from '@/products/router/productRouter'

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
