import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Journey from './pages/Journey'

function Placeholder({ title }) {
  return (
    <div className="flex flex-1 items-center justify-center py-40">
      <h1 className="font-heading text-6xl">{title}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Placeholder title="Projects" />} />
          <Route path="/projects/:slug" element={<Placeholder title="Project Details" />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
          <Route path="/resume" element={<Placeholder title="Resume" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App