import "./App.css";

import Auth from "./components/auth.component";
import Dashboard from "./components/dashboard.component";
import { Routes, Route, Navigate } from "react-router-dom";

import { io } from "socket.io-client";

import { useEffect, useState , useContext} from "react";
import { AuthContext } from "./context/auth.context";

export const socket = io("http://localhost:5000");

  function ProtectedRoute({ children }) {
    const { token } = useContext(AuthContext);

    return token ? children : <Navigate to="/sign-in" replace />;
  }

  function PublicRoute({ children }) {
    const { token } = useContext(AuthContext);

    return token ? <Navigate to="/" replace /> : children;
  }

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
        <Route
          path="/sign-up"
          element={
            <PublicRoute>
              <Auth isSignedIn={false} />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-in"
          element={
            <PublicRoute>
              <Auth isSignedIn={true} />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
