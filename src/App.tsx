import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Blog } from './pages/Blog';
import { Footer } from './components/Footer/Footer';

const App: React.FC = () => (
  <>
    <Navbar />

    <div className="pages">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/blog" Component={Blog} />
        <Route path="#footer" Component={Footer} />
      </Routes>
    </div>
  </>
);

export default App;
