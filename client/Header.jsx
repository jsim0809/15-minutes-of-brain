import React from 'react';

const Header = ({ tab, handleMenuBarClick }) => (
  <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand" onClick={handleMenuBarClick}>15 Minutes of Brain</h3>
        <nav className="nav nav-masthead justify-content-center">
          <a className={`nav-link ${tab === 'Home' || tab === '15 Minutes of Brain' ? 'active' : ''}`} onClick={handleMenuBarClick}>Home</a>
          <a className={`nav-link ${tab === 'About' ? 'active' : ''}`} onClick={handleMenuBarClick}>About</a>
        </nav>
      </div>
    </header>
);

export default Header;