import { Suspense, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRoutes from "@/routes/AppRoutes"
import { initializeSession } from "@/store/session-store"
import LoaderScreen from "./pages/LoaderScreen"

function App() {
  useEffect(() => {
    initializeSession()
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderScreen />}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
