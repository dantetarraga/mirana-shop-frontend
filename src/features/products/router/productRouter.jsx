import ContentLayout from '@/app/layouts/ContentLayout'
import ProductDetailPage from '../pages/ProductDetailPage'
import ProductsPage from '../pages/ProductsPage'

export const productRouter = [
  {
    path: '/products',
    element: <ContentLayout />,
    children: [
      {
        index: true,
        element: <ProductsPage />
      },
      {
        path: ':productId',
        element: <ProductDetailPage />
      }
    ]
  }
]
