import { useState } from 'react';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Auth from './components/auth.component';
import Dashboard from "./components/dashboard.component";
import { Routes , Route , Navigate} from "react-router-dom";


function ProtectedRoute ({children}) {

  // const isLoggedIn = localStorage.getItem('user:token') !== null;
  const isLoggedIn = true;
  console.log("IS LOGGED IN ??? :::" , isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />
  }

  else {
    if (['/sign-up' , '/sign-in'].includes(window.location.pathname)) {
      return <Navigate to="/" />;
    }
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
        <Route path="/sign-up" element={<ProtectedRoute><Auth isSignedIn={false} /></ProtectedRoute>} />
        <Route path="/sign-in" element={<ProtectedRoute><Auth isSignedIn={true} /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
