import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import useScrollReveal from './hooks/useScrollReveal'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Skills from './pages/Skills'
import Journey from './pages/Journey'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import BackgroundFX from './components/BackgroundFX'

function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 py-40">
      <h1 className="font-heading text-6xl">Page not found</h1>
      <Link to="/" className="text-cyan underline">
        Back to home
      </Link>
    </div>
  )
}

function App() {
  const location = useLocation()
  useScrollReveal()

  return (
    <div className="flex min-h-screen flex-col">
      <BackgroundFX />
      <ScrollToTop />
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <div key={location.pathname} className="page-enter flex flex-1 flex-col">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App