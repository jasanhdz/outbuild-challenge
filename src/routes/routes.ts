import { lazy } from "react"
import { AppRoute } from "@/types/route"
import { APP_ROUTES, AUTH_ROUTES } from "@/constants/route-paths"

export const publicRoutes: AppRoute[] = [
  {
    title: 'Iniciar sesión',
    path: AUTH_ROUTES.SIGN_IN,
    component: lazy(() => import('@/pages/login/Login')),
    layout: 'AUTH'
  }
]

export const privateRoutes: AppRoute[] = [
  {
    title: 'Dashboard',
    path: APP_ROUTES.DASHBOARD,
    component: lazy(() => import('@/pages/dashboard/Dashboard')),
    layout: 'APP'
  }
]