import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Languages from './components/Languages'
import Projects from './components/Projects'
import OutsideWork from './components/OutsideWork'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-white text-navy-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <About />
        {/* <Languages /> */}
        <Projects />
        <OutsideWork />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
