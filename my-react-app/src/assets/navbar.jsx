// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Dulce Tentaciones</h1>
      <ul style={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 15,
    left: 20,
    right: 15,
    width: '95vw',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
  },
  links: {
    display: 'flex-end',
    align: 'right-align',
    gap: '1rem',
    listStyle: 'none',
  }
};

export default Navbar;
