export default function Navbar() {
    return(
        <nav className="bg-white shadow-lg w-full fixed top-0 left-0">
            <ul className="flex justify-end items-center p-4 max-w-7xl mx-auto">
                <li className="mr-6"><a href="/" className="text-gray-700 hover:text-blue-600 transition duration-300">Home</a></li>
                <li className="mr-6"><a href="/about" className="text-gray-700 hover:text-blue-600 transition duration-300">About</a></li>
                <li className="mr-6"><a href="/price-guide" className="text-gray-700 hover:text-blue-600 transition duration-300">Price Guide</a></li>
                <li><a href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">Contact</a></li>
            </ul>
        </nav>
    )
}