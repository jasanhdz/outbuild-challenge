import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { APP_ROUTES } from '@/constants/route-paths'
import { useSessionStore } from '@/store/session-store'
import Process from '@/pages/LoaderScreen'

function PublicRoute({ children }: { children: ReactNode }) {
  const { isLoadingSession, isLoggedIn } = useSessionStore()

  if (isLoadingSession) return <Process />

  return !isLoggedIn ? <>{children}</> : <Navigate to={APP_ROUTES.DASHBOARD} replace />
}

export default PublicRoute
