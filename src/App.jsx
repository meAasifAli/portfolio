import { lazy, Suspense } from "react"
// import Loader from "./components/Loader"
import { useStickyContext } from "./context/StickyProvider"
import ScrollUp from "./components/ScrollUp"

const About = lazy(() => import("./sections/About"))
const Contact = lazy(() => import("./sections/Contact"))
const Experience = lazy(() => import("./sections/Experience"))
const Footer = lazy(() => import("./components/Footer"))
const Home = lazy(() => import("./sections/Home"))
const Projects = lazy(() => import("./sections/Projects"))
const Services = lazy(() => import("./sections/Services"))
// const Navbar = lazy(() => import("./components/navigation/Navbar"))
const Lottie = lazy(() => import("./animations/Lottie"))

function App() {
  const { sticky } = useStickyContext()
  return (
    <Suspense fallback={<Lottie />}>
      <div className="space-y-0">
        {/* <Navbar /> */}
        <div className="fixed right-8 bottom-16 z-[100]">
          {
            sticky && <ScrollUp />
          }
        </div>
        <div className="w-full relative  space-y-4 sm:space-y-16 z-[40]">

          <Home />
          <About />
          <Experience />
          <Services />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </Suspense>

  )
}

export default App
