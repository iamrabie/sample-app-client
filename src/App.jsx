import { useState } from 'react';
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Auth from './components/auth.component';
import Dashboard from "./components/dashboard.component";
import { Routes , Route } from "react-router-dom";


function App() {

  return (
    <>
      {/* <SignUp /> */}
      {/* <Dashboard /> */}
      {/* <div>
        <Outlet />
      </div> */}

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-up" element={<Auth isSignedIn={false} />} />
        <Route path="/sign-in" element={<Auth isSignedIn={true} />} />
      </Routes>
    </>
  )
}

export default App
