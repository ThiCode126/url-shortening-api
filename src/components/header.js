import React, { useState } from 'react'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <header id="header-app">
      <div className="cw">
        <a href="/" className="link-nav brand">
          <img src="assets/Shortly.svg" alt="logo" />
        </a>
        <nav className={`${isNavOpen ? 'open' : 'closed'}`}>
          <div className="left-nav">
            <a href="/" className="link-nav">Features</a>
            <a href="/" className="link-nav">Pricing</a>
            <a href="/" className="link-nav">Ressources</a>
          </div>
          <div className="right-nav">
            <a href="/" className="link-nav login">Login</a>
            <a href="/" className="link-nav sign-up">Sign Up</a>
          </div>
        </nav>
        <div className="toggle-menu" onClick={() => setIsNavOpen(!isNavOpen)}>
          <span className="bar bar__1"></span>
          <span className="bar bar__2"></span>
          <span className="bar bar__3"></span>
        </div>
      </div>
    </header>
  )
}

export default Header