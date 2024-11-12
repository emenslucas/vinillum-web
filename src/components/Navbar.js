import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="./assets/logo.svg" alt="Logo" className="logo-icon" />
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#premium">Premium</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#aboutus">Sobre nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <button className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>+</button>
    </nav>
  );
};

export default Navbar;
