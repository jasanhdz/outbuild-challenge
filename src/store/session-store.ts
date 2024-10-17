import { StateCreator, create } from 'zustand'
import { devtools } from 'zustand/middleware'
import Cookies from 'js-cookie'
import { TOKEN_KEY } from '@/constants/auth'
import { verifyToken } from '@/utils/jwtUtils'
import type { SessionStore } from '@/types/auth'

const sessionStore: StateCreator<SessionStore, [['zustand/devtools', SessionStore]]> = (set) => ({
  isLoadingSession: false,
  isLoggedIn: false,
  user: null,
  login: (user, token, rememberMe) => {
    const cookiesOptions = rememberMe ? { expires: 1 } : undefined
    Cookies.set(TOKEN_KEY, token, cookiesOptions)
    set({ isLoadingSession: true })

    setTimeout(() => {
      set({ isLoggedIn: true, user, isLoadingSession: false });
    }, 1000)
  },
  logout: () => {
    Cookies.remove(TOKEN_KEY)
    set({ isLoggedIn: false, user: null })
  },
})

export const initializeSession = async() => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) {
    try {
      const user = await verifyToken(token)
      useSessionStore.setState({
        isLoadingSession: false,
        isLoggedIn: true,
        user: user,
      })
    } catch(error) {
      console.error(error)
      // Token inválido o expirado
      useSessionStore.setState({
        isLoadingSession: false,
        isLoggedIn: false,
        user: null,
      })
      Cookies.remove(TOKEN_KEY)
    }
  } else {
    useSessionStore.setState({
      isLoadingSession: false,
      isLoggedIn: false,
      user: null,
    })
  }
}

export const useSessionStore = create(devtools(sessionStore))

