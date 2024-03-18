import React from "react";
import { Routes, Route, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Test from './components/Test/testIndex'
import Home from './pages/Home/home'

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence wait >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Test/>} />
        <Route path="/accueil" element={<Home/>} />
      </Routes>
    </AnimatePresence>
  );
};

export default App