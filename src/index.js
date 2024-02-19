import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './pages/Home/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
