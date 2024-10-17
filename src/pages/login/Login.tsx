import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormData, FormErrors, User } from '@/types/auth'
import { USER } from '@/constants/auth'
import { useSessionStore } from '@/store/session-store'
import { APP_ROUTES } from '@/constants/route-paths'
import { generateToken } from '@/utils/jwtUtils'
import LoginUI from './LoginUI'

function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    remember_me: false,
  })

  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const { login } = useSessionStore()
  const navigate = useNavigate()

  const { email, password, remember_me } = formData

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const validate = () => {
    const errors: FormErrors = {}
    if (!email) errors.email = 'El correo electrónico es requerido'
    if (!password) errors.password = 'La contraseña es requerida'
    return errors
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length === 0) {
      if (email === USER.email && password === USER.password) {
        const user: User = {
          email,
          fullName: 'Usuario ProLogin',
        }

        const token = await generateToken(user, remember_me)
        login(user, token, remember_me)

        navigate(APP_ROUTES.DASHBOARD)
      } else {
        setFormErrors({
          email: 'Correo o contraseña incorrectos',
          password: 'Correo o contraseña incorrectos',
        })
      }
    } else {
      setFormErrors(errors)
    }
  }

  return (
    <LoginUI
      handleChange={handleChange}
      formData={formData}
      formErrors={formErrors}
      handleSubmit={handleSubmit}
    />
  )
}

export default Login