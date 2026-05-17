import Nav from './components/Nav'
import Hero from './components/Hero'
import Workflow from './components/Workflow'
import Problems from './components/Problems'
import Features from './components/Features'
import DashboardSection from './components/DashboardSection'
import HowWorks from './components/HowWorks'
import WhySection from './components/WhySection'
import VisionSection from './components/VisionSection'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import { useNavScroll } from './hooks/useNavScroll'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  const scrolled = useNavScroll()
  useScrollReveal()

  return (
    <>
      <Nav scrolled={scrolled} />
      <Hero />
      <Workflow />
      <Problems />
      <Features />
      <DashboardSection />
      <HowWorks />
      <WhySection />
      <VisionSection />
      <FinalCta />
      <Footer />
    </>
  )
}

export default App
