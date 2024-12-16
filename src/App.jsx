import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Router>
      <div className='bg-[#FDEFF6]'>
        <Navbar />
        <div className="pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes here as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
