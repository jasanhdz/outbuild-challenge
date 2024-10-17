import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'
import NotFound from '@/pages/NotFound'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import RootRoute from './RootRoute'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<RootRoute />} />
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PublicRoute><route.component /></PublicRoute>}
        />
      ))}
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<PrivateRoute><route.component /></PrivateRoute>}
        />
      ))}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes