import { Navigate } from 'react-router-dom'
import { useSessionStore } from '@/store/session-store'
import { APP_ROUTES, AUTH_ROUTES } from '@/constants/route-paths'
import Process from '@/pages/LoaderScreen'

function RootRoute() {
  const { isLoadingSession, isLoggedIn } = useSessionStore()

  if (isLoadingSession) return <Process />

  return isLoggedIn ? (
    <Navigate to={APP_ROUTES.DASHBOARD} replace />
  ) : (
    <Navigate to={AUTH_ROUTES.SIGN_IN} replace />
  )
}

export default RootRoute
