import { useState } from 'react';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Auth from './components/auth.component';
import Dashboard from "./components/dashboard.component";
import { Routes , Route , Navigate} from "react-router-dom";


function ProtectedRoute ({children}) {

  const isLoggedIn = localStorage.getItem('user:token') !== null;
  console.log("IS LOGGED IN ??? :::" , isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />
  }

  return children;

} 

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
              <Dashboard />
          </ProtectedRoute>}
         />
        <Route path="/sign-up" element={<Auth isSignedIn={false} />} />
        <Route path="/sign-in" element={<Auth isSignedIn={true} />} />
      </Routes>
    </>
  )
}

export default App
