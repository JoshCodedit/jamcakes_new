import React, { useState, useEffect } from 'react';
import '../index.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 260) { // Change 100 to the scroll position you want
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <nav className={`bg-[#fbdaeb3b] fixed top-0 left-0 shadow-sm w-full transition-transform duration-450 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="w-full max-w-6xl mx-auto">
                <ul className="flex justify-end items-center p-4">
                    <li className="mr-6">
                        <a href="https://www.instagram.com/jambakescakes/" className="nav-link text-2xl " target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="mr-6">
                        <a href="https://www.facebook.com/jambakescakes" className="nav-link text-2xl" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:jambakescakes@hotmail.com" className="nav-link text-2xl">
                            <MdEmail />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}