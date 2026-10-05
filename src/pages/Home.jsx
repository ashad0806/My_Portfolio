import Hero from '../components/home/Hero'
import Expertise from '../components/home/Expertise'
import Journey from '../components/home/Journey'
import Achievements from '../components/home/Achievements'
import FeaturedProjects from '../components/home/FeaturedProjects'
import ContactSection from '../components/home/ContactSection'

function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <Journey />
      <Achievements />
      <FeaturedProjects />
      <ContactSection />
    </>
  )
}

export default Home