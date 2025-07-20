import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ClaimForm from './pages/ClaimForm';
import ClaimDetails from './pages/ClaimDetails';
import NotFound from './pages/NotFound';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/submit" element={<ClaimForm />} />
            <Route path="/claim/:id" element={<ClaimDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
