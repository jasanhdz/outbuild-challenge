import astronauta from '@/assets/astronauta.webp'
import starsBackground from '@/assets/stars-pttnr.webp'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-auto text-white bg-black text-center space-y-6"
      style={{ backgroundImage: `url(${starsBackground})` }}
    >
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-3xl font-bold">
        <span className="text-blue-500">¡Vaya!</span> Página no encontrada
      </p>
      <p className="text-lg">
        La página que estás buscando no existe.
      </p>
      <img
        src={astronauta}
        alt="Astronauta perdido en el espacio"
        className="w-64 h-64 animate-float"
        loading="lazy"
      />
      <Link
        to="/"
        className="mt-8 px-6 py-2 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
