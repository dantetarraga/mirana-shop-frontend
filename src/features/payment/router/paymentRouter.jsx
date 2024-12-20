import ContentLayout from '../../../app/layouts/ContentLayout'
import PaymentPage from '../pages/PaymentPage'

export const paymentRouter = [
  {
    path: '/payment',
    element: <ContentLayout />,
    children: [
      {
        index: true,
        element: <PaymentPage />
      }
    ]
  }
]
