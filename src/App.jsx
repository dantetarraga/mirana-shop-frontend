import { RouterProvider } from 'react-router'
import { appRouter } from './router/appRouter'

function App () {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
