import ProductLayout from '../layout/ProductLayout'
import ProductDetailPage from '../pages/ProductDetailPage'
import ProductPage from '../pages/ProductPage'

export const productRouter = [
  {
    path: '/products',
    element: <ProductLayout />,
    children: [
      {
        index: true,
        element: <ProductPage />
      },
      {
        path: ':productId',
        element: <ProductDetailPage />
      }
    ]
  }
]
