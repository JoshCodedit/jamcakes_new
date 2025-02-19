import { FaPhone, FaInstagram, FaEnvelope } from 'react-icons/fa';
import background2 from '../assets/images/background2.jpeg';
import logo from '../assets/images/logo1.png';

export default function Footer() {
  return (
    <footer className="relative h-48 w-full mt-20 ">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${background2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.5,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4">
        {/* Logo */}
        <img src={logo} alt="Company Logo" className="h-16 w-auto mt-5" />

        {/* Icons */}
        <div className="flex gap-6 mb-5">
          <a href="tel:+441234567890" className="hover:text-gray-600">
            <FaPhone className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/jambakescakes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a href="mailto:jambakescakes@hotmail.com" className="hover:text-gray-600">
            <FaEnvelope className="text-2xl" />
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-5">
          <a href="/cake-care" className="hover:text-gray-600">
            CAKE CARE
          </a>
          <a href="/allergen-warning" className="hover:text-gray-600">
            ALLERGEN WARNING
          </a>
          <a href="/payment-terms" className="hover:text-gray-600">
            COLLECTIONS
          </a>
          <a href="/payment-terms" className="hover:text-gray-600">
            PAYMENT TERMS
          </a>
        </div>
      </div>
    </footer>
  );
}
