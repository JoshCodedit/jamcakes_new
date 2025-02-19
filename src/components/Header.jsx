import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/images/logo1.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <>
      <div className="flex justify-center items-center pt-28">
        <img className="w-48 h-48 mb-5" src={logo1} alt="logo" />
      </div>

      {/* Burger Menu Button - Only visible below 820px */}
      <div className="hidden max-[820px]:block absolute top-14 left-4 z-50">
        {!isMenuOpen ? <p>Menu</p> : <p>Close</p>}
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            document.body.classList.toggle('menu-open');
          }}
          className="text-black p-2"
        >
          {isMenuOpen ? (
            // X icon for close
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="flex justify-center items-center max-w-6xl mx-auto">
        <ul
          className={`
                flex items-center p-4 font-['Archivo'] font-light gap-10
                max-[820px]:flex-col max-[820px]:fixed max-[820px]:top-0 max-[820px]:left-0 
                max-[820px]:h-screen max-[820px]:w-64 max-[820px]:bg-[#f6e6ee] max-[820px]:pt-16
                max-[820px]:shadow-lg max-[820px]:z-40
                ${isMenuOpen ? 'max-[820px]:translate-x-0' : 'max-[820px]:translate-x-[-100%]'}
                transition-transform duration-300 ease-in-out
            `}
        >
          <li className="mr-6 max-[820px]:mr-0 max-[820px]:mb-4">
            <Link to="/" className="nav-link" onClick={handleMenuClose}>
              HOME
            </Link>
          </li>
          <li className="mr-6 max-[820px]:mr-0 max-[820px]:mb-4">
            <Link to="/about" className="nav-link" onClick={handleMenuClose}>
              ABOUT
            </Link>
          </li>
          <li className="mr-6 max-[820px]:mr-0 max-[820px]:mb-4">
            <Link to="/gallery" className="nav-link" onClick={handleMenuClose}>
              GALLERY
            </Link>
          </li>
          <li className="mr-6 max-[820px]:mr-0 max-[820px]:mb-4">
            <Link to="/price-guide" className="nav-link" onClick={handleMenuClose}>
              PRICE GUIDE
            </Link>
          </li>
          <li className="max-[820px]:mb-4">
            <Link to="/contact" className="nav-link" onClick={handleMenuClose}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-b border-[#00000061] max-w-[70%] mx-auto"></div>
    </>
  );
}
