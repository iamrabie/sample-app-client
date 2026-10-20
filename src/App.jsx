import "./App.css";

import Auth from "./components/auth.component";
import Dashboard from "./components/dashboard.component";
import { Routes, Route, Navigate } from "react-router-dom";

import { io } from "socket.io-client";

import { useEffect, useState } from "react";

let isLoggedIn = false;

function ProtectedRoute({ children }) {
  // const isLoggedIn = localStorage.getItem("user:token") !== null;
  console.log("IS LOGGED IN ??? :::", isLoggedIn);
  
  return isLoggedIn ? children : <Navigate to="/sign-in" replace />;
}


function PublicRoute({children}) {
  return isLoggedIn ? <Navigate to="/" replace /> : children;
}

export const socket = io("http://localhost:5000");

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/sign-up" element={<PublicRoute><Auth isSignedIn={false} /></PublicRoute>} />
        <Route path="/sign-in" element={<PublicRoute><Auth isSignedIn={true} /></PublicRoute>} />
      </Routes>
    </>
  );
}

export default App;
