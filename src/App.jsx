
import { Routes, Route } from 'react-router-dom'
import About from "./pages/About"
import Contact from "./pages/Contact"
import Experience from "./pages/Experience"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Map from "./components/Map"
import Navbar from "./components/Navbar"
import Projects from "./pages/Projects"
import Services from "./pages/Services"


function App() {



  return (
    <div className="w-full">
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
