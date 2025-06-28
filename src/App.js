import React from "react";
import PaletteTester from "./components/PaletteTester";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import InfoSection from "./pages/HomeInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import TestimonialsPage from "./pages/Testimonials";
import JoinOurFam from "./pages/JoinOurFam";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";



function App() {
    return ( 
      <div>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path='/about' element={ <About /> } />
            <Route path='/services' element={ <Services /> } />
            <Route path="/testimonials" element={ <TestimonialsPage />} />
            <Route path="/join" element={ <JoinOurFam />} />
            <Route path="/contact" element={ <Contact />} />
          </Routes>

 
        </Router> 

      </div>
    )
  
}

export default App;
