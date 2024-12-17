import '../index.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Navbar() {
    return(
        <nav className="bg-[#fbdaeb3b] fixed top-0 left-0 shadow-sm w-full">
            <div className="w-full max-w-6xl mx-auto">
                <ul className="flex justify-end items-center p-4">
                    <li className="mr-6">
                        <a href="https://instagram.com" className="nav-link text-2xl " target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="mr-6">
                        <a href="https://facebook.com" className="nav-link text-2xl" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:your@email.com" className="nav-link text-2xl">
                            <MdEmail />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}