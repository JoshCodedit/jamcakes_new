import './component-styles/Navbar.css';

export default function Navbar() {
    return(
        <nav className="bg-[#FDEDF4] shadow-lg w-full fixed top-0 left-0">
            <ul className="flex justify-end items-center p-4 max-w-7xl mx-auto">
                <li className="mr-6"><a href="/" className="nav-link">Home</a></li>
                <li className="mr-6"><a href="/about" className="nav-link">About</a></li>
                <li className="mr-6"><a href="/price-guide" className="nav-link">Price Guide</a></li>
                <li><a href="/contact" className="nav-link">Contact</a></li>
            </ul>
        </nav>
    )
}