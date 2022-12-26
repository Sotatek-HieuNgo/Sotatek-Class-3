import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

const Router = () => {

  const isLogged = localStorage.getItem('isLogged');

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={isLogged ? <App /> :<Login />} />
          <Route path="/signup" element={isLogged ? <App /> :<Login />} />
          <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Login />} />
          <Route path="/profile" element={isLogged ? <Profile /> : <Login />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;