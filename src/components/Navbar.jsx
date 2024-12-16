import './component-styles/Navbar.css';
import logo from '../../public/images/logo1.png';

export default function Navbar() {
    return(
        <nav className="bg-[#FDEDF4] shadow-lg w-full fixed top-0 left-0">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <div id="logo" >
                    <img src={logo} alt="logo" className="w-20 h-20 m-3"/>
                </div>
                <ul className="flex justify-end items-center p-4">
                    <li className="mr-6"><a href="/" className="nav-link">Home</a></li>
                    <li className="mr-6"><a href="/about" className="nav-link">About</a></li>
                    <li className="mr-6"><a href="/price-guide" className="nav-link">Price Guide</a></li>
                    <li><a href="/contact" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}