import { ChangeEvent, FormEvent, useState } from "react"
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { FormData, FormErrors } from "@/types/auth"
import { Button, Checkbox, Input } from "@/components"

interface LoginUIProps {
  handleSubmit: (event: FormEvent) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  formErrors: FormErrors;
  formData: FormData;
}

function LoginUI({ formData, formErrors, handleSubmit, handleChange }: LoginUIProps) {
  const { email, password, remember_me } = formData;
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full lg:max-w-md p-8 space-y-8 lg:bg-[#242526] rounded-xl shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-center text-white">Bienvenido</h2>
          <p className="mt-2 text-sm text-center text-[#e4e6ea]">
            Inicia sesión con tu cuenta
          </p>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <Input
            label="Correo Electrónico"
            id="email"
            name="email"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            value={email}
            onChange={handleChange}
            errorMessage={formErrors.email}
          />
          <Input
            label="Contraseña"
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            value={password}
            onChange={handleChange}
            errorMessage={formErrors.password}
            icon={showPassword ? <FaEye /> : <FaEyeSlash />}
            onIconClick={togglePasswordVisibility}
          />
          <div className="flex items-center justify-between my-6">
            <Checkbox
              label="Recuérdame"
              id="remember_me"
              name="remember_me"
              checked={remember_me}
              onChange={handleChange}
            />
            <div className="text-sm">
              <a href="#" className="font-medium text-white hover:text-purple-500">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>
          <Button type="submit" variant="primary">
            Iniciar Sesión
          </Button>
        </form>
        <p className="text-sm text-center text-gray-400">
          ¿No tienes una cuenta?{' '}
          <a href="#" className="font-medium text-white hover:text-purple-500">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginUI;
