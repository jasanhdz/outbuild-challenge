import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { AUTH_ROUTES } from '@/constants/route-paths'
import { useSessionStore } from '@/store/session-store'
import LoaderScreen from '@/pages/LoaderScreen'

function PrivateRoute({ children }: { children: ReactNode }) {
  const { isLoadingSession, isLoggedIn } = useSessionStore()

  if (isLoadingSession) return <LoaderScreen message='Procesando token...' />

  return isLoggedIn ? <>{children}</> : <Navigate to={AUTH_ROUTES.SIGN_IN} replace />
}

export default PrivateRoute
