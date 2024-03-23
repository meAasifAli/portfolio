
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./components/Footer"
import Home from "./sections/Home"
import Map from "./components/Map"
import Navbar from "./components/Navbar"
import Projects from "./sections/Projects"
import Services from "./sections/Services"


function App() {

  return (
    <div className="space-y-0">
      <Navbar />
      <div className="w-full space-y-4 sm:space-y-16">
        <Home />
        <About />
        <Experience />
        <Services />
        <Projects />
        <Contact />
        <Map />
      </div>
      <Footer />
    </div>
  )
}

export default App
