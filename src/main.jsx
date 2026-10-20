import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from './context/user.context.jsx';
import { AuthProvider } from './context/auth.context.jsx';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
      </UserProvider>
    </BrowserRouter>
  // </StrictMode>,
)
