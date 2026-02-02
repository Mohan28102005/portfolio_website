
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import AnimatedBackground from './components/AnimatedBackground'
import './App.css'

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="app-container">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </div>
    </>
  )
}

export default App
