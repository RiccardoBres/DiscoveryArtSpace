import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CarouselVolum1 } from './Components/Organism/CarouselPages/CarouselVolum1';
import { CarouselVolum2 } from './Components/Organism/CarouselPages/CarouselVolum2';
import { CarouselVolum3 } from './Components/Organism/CarouselPages/CarouselVol3';

import Home from './Pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/first-event" element={<CarouselVolum1 />} />
        <Route path="/second-event" element={<CarouselVolum2 />} />
        <Route path="/third-event" element={<CarouselVolum3 />} />
      </Routes>
    </Router>
  )
}

export default App

