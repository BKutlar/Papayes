import React, {useState, useEffect} from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import {Routes, Route} from 'react-router-dom';
import About from './pages/about'; 
import Menu from './pages/menu';
import Contact from './pages/contact';
import DropDown from './components/DropDown';

function App() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggle = () => {
    setIsOpen(!isOpen);
  }

useEffect(() => {
  const hideMenu = () => {
    if(window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
      console.log('i resizeeed')
    }
  }
    window.addEventListener('resize',hideMenu);
    return () => {
      window.removeEventListener('resize',hideMenu);
    }
})

  return (
    <>
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
