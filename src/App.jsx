import { useEffect, useState } from "react"
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
    <div className="md:max-w-screen-xl mx-auto">
      {
        loading ? <UncontrolledLottie /> : <> <Navbar />
          <Home />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Contact />
          <Map />
          <Footer />
        </>
      }

    </div>
  )
}

export default App
