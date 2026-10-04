import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

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
          <Route path="/about" element={<Placeholder title="About" />} />
          <Route path="/services" element={<Placeholder title="Services" />} />
          <Route path="/projects" element={<Placeholder title="Projects" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
          <Route path="/resume" element={<Placeholder title="Resume" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App