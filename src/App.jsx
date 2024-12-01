import { RouterProvider } from 'react-router'
import { appRouter } from './app/routes/appRouter'

function App () {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
