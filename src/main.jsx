import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
// import { Netflix } from './Netflix'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Netflix/> */}
  </StrictMode>,
)
