import { AUTH_ROUTES } from '@/constants/route-paths'
import { useSessionStore } from '@/store/session-store'
import { useNavigate } from 'react-router-dom'

function Header() {
  const { logout } = useSessionStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate(AUTH_ROUTES.SIGN_IN)
  }

  return (
    <header className="bg-[#242526] shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white">ProDashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
