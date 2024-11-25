import ProductPage from '../pages/ProductPage'

export const productRouter = [
  {
    path: '/products',
    children: [
      {
        index: true,
        element: <ProductPage />
      }
    ]
  }
]
