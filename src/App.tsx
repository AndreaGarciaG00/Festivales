import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Map from './pages/Map';
import Workshops from './pages/Workshops';
import Schedule from './pages/Schedule';
import Information from './pages/Information';
import WorkshopDetail from './pages/WorkshopDetail';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/workshops/:id" element={<WorkshopDetail />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/information" element={<Information />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;