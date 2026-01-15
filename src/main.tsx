import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './components/Auth'  // ADD
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>  {/* ADD THESE 2 */}
      <App />
    </AuthProvider>  {/* */}
  </React.StrictMode>,
)

