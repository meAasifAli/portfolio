import { useEffect, useState } from "react"
import { Routes, Route } from 'react-router-dom'
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Map from "./components/Map"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"
import UncontrolledLottie from './animations/Lottie'
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, [3000])
  }, [])
  return (
    <div className="md:max-w-screen-xl w-full mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Map />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
