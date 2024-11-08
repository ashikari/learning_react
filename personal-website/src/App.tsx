import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';

import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

import './App.css'
import './Navbar.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App
