import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
import { useAuthentication } from "../hooks/UseAuthentication";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import { AuthProvider } from "../context/AuthContext";
import Dashboard from "../pages/Dashboard/Dashboard";

const AppRoutes = ()  => {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth])

  if(loadingUser) {
    return <p>Carregando...</p>
  }

  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={!user ? <Login /> : <Navigate to="/dashboard" />} 
          />

          <Route 
            path="/register"
            element={!user ? <Register /> : <Navigate to="/dashboard" />} 
          />

          <Route 
            path="/dashboard"
            element={user ? <Dashboard /> : <Navigate to="/" />} 
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;