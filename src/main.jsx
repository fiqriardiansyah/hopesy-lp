import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "react-multi-carousel/lib/styles.css";
import 'react-responsive-modal/styles.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
