import { createBrowserRouter } from 'react-router'
import { Explore } from '@renderer/views/Explore'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Explore
  }
])

export default router
