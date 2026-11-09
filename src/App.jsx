import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CircuitBackdrop from './components/CircuitBackdrop'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="band band--hero">
          <CircuitBackdrop />
          <Hero />
          <Stats />
          <About />
        </div>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
