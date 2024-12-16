import logo1 from '../../public/images/logo1.png';

export default function Header() {
    return(
        <>
        <div className='flex justify-center items-center'>
            <img className="w-48 h-48 mb-5" src={logo1} alt="logo" />
        </div>
        <div className="flex justify-center items-center max-w-6xl mx-auto">
                <ul className="flex items-center p-4 font-['Archivo'] font-light gap-10">
                    <li className="mr-6"><a href="/" className="nav-link">HOME</a></li>
                    <li className="mr-6"><a href="/about" className="nav-link">ABOUT</a></li>
                    <li className="mr-6"><a href="/price-guide" className="nav-link">PRICE GUIDE</a></li>
                    <li><a href="/contact" className="nav-link">CONTACT</a></li>
                </ul>
        </div>
        <div className="border-b border-[#00000067] max-w-4xl mx-auto"></div>
        </>
    )
}