import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactQueryProvider } from './provider'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </StrictMode>,
)
