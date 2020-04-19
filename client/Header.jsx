import React from 'react';

const Header = ({ tab, handleMenuBarClick }) => (
  <header className="masthead mb-auto">
      <div className="inner">
        <h3 name="home" className="masthead-brand" onClick={handleMenuBarClick}>15 Minutes of Brain</h3>
        <nav className="nav nav-masthead justify-content-center">
          <a name="home" className={`nav-link ${tab === 'home' ? 'active' : ''}`} onClick={handleMenuBarClick}>Home</a>
          <a name="faq" className={`nav-link ${tab === 'faq' ? 'active' : ''}`} onClick={handleMenuBarClick}>FAQ</a>
        </nav>
      </div>
    </header>
);

export default Header;