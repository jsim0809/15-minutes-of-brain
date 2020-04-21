import React from 'react';

const Header = ({ tab, video, handleMenuBarClick }) => (
  <header className={`masthead mb-${(!video || tab === 'About') ? 'auto' : '5'}`}>
      <div className="inner">
        <h3 className="masthead-brand" onClick={handleMenuBarClick}>Brain15</h3>
        <nav className="nav nav-masthead justify-content-center">
          <a className={`nav-link ${tab === 'Home' || tab === 'Brain15' ? 'active' : ''}`} onClick={handleMenuBarClick}>Home</a>
          <a className={`nav-link ${tab === 'About' ? 'active' : ''}`} onClick={handleMenuBarClick}>About</a>
        </nav>
      </div>
    </header>
);

export default Header;