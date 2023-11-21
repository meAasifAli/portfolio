import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Map from "./components/Map"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Services />
      <Projects />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}

export default App
