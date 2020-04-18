import React from 'react';

const Header = ({ tab }) => (
  <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand"></h3>
        <nav className="nav nav-masthead justify-content-center">
          <a className={`nav-link ${tab === 'home' ? 'active' : ''}`} href="#">Home</a>
          <a className={`nav-link ${tab === 'faq' ? 'active' : ''}`} href="#">FAQ</a>
        </nav>
      </div>
    </header>
);

export default Header;