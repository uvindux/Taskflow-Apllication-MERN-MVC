import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { CheckCircle} from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // mock auth state
  const user = true;

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <div className="nav-logo">
            <CheckCircle className="logo-icon" size={32} />
            <span className="logo-text">TaskFlow</span>
          </div>

          <button
            className={`navbar__toggle ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar__menu ${isOpen ? 'active' : ''}`}>
            <ul className="navbar__links">
              <li><a href="#home" onClick={closeMenu}>Home</a></li>
              <li><a href="#about" onClick={closeMenu}>About</a></li>
              <li><a href="#service" onClick={closeMenu}>Service</a></li>
              <li><a href="#agent" onClick={closeMenu}>Agent</a></li>
            </ul>

            {/* <div className="navbar__auth">
              {user ? (
                <div className="user">
                  <img
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
                    alt="User"
                    className="navbar__user-img"
                  />
                  <Link to="/profile">
                    <span className="navbar__user-name">John Doe</span>
                  </Link>

                  <button className="profile">
                    <div className="notification">3</div>
                    <span>Profile</span>
                  </button>
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <button className="navbar__btn navbar__btn--login">
                      Login
                    </button>
                  </Link>

                  <Link to="/register">
                    <button className="navbar__btn navbar__btn--register">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div> */}
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="navbar__overlay"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
