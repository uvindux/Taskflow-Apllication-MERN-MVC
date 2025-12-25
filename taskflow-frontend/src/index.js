import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Users';
import Navbar from './Components/navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Navbar />   {/* 👈 Navbar ONCE for all pages */}

    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/users' element={<Users />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
