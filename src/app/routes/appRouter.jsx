import { createBrowserRouter } from 'react-router'

import HomePage from '@/features/home/pages/HomePage'
import MainLayout from '../layouts/MainLayout'

import { productRouter } from '@/features/products/router/productRouter'
import { paymentRouter } from '@/features/payment/router/paymentRouter'

const router = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      ...productRouter,
      ...paymentRouter
    ]
  }
]

export const appRouter = createBrowserRouter(router)
