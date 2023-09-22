import React from "react";

//Global Style
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

//Navbar
import Nav from "./components/Nav";

//Router
import { Routes, Route, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from "framer-motion";
import ScrollTop from './components/ScrollTop';

function App() {
  const location = useLocation();
    return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork /> }  />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
