// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PianoPage from './pages/PianoPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/piano" element={<PianoPage />} />
    </Routes>
  </Router>
);

export default App;
