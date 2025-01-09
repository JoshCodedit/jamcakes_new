import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import PriceGuide from './pages/PriceGuide'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
function App() {
  return (
    <Router>
      <div className='bg-[#FDEFF6]'>
        <Navbar />
        <Header />
        <div className="pt-14">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/price-guide" element={<PriceGuide />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            {/* Add other routes here as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
