import { Loader } from "@/components/loader"

interface LoaderScreenProps {
  message?: string
}

export default function LoaderScreen({ message = 'Cargando...' }: LoaderScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Loader />
      <p className="text-blue-500 text-lg mt-4">{message}</p>
    </div>
  );
}
