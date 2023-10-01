import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
