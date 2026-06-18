import { I18nProvider } from './i18n/I18nContext'
import { ThemeProvider } from './theme/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import PainMatrix from './components/PainMatrix'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AppMockup from './components/AppMockup'
import { Network, Workflow, Cpu, Wrench, Layers, Braces } from 'lucide-react'

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </ThemeProvider>
  )
}

function AppContent() {
  return (
    <div className="bg-surface min-h-screen relative">
      <Navbar />
      <HeroSection />
      <FeatureSection
        id="protocols"
        icon={Network}
        mockup={<AppMockup variant="protocols" />}
        reverse={false}
      />
      <FeatureSection
        id="pipeline"
        icon={Workflow}
        mockup={<AppMockup variant="pipeline" />}
        reverse={true}
      />
      <FeatureSection
        id="analyzer"
        icon={Cpu}
        mockup={<AppMockup variant="analyzer" />}
        reverse={false}
      />
      <FeatureSection
        id="tools"
        icon={Wrench}
        mockup={<AppMockup variant="tools" />}
        reverse={true}
      />
      <FeatureSection
        id="workspace"
        icon={Layers}
        mockup={<AppMockup variant="workspace" />}
        reverse={false}
      />
      <FeatureSection
        id="utilities"
        icon={Braces}
        mockup={<AppMockup variant="utilities" />}
        reverse={true}
      />
      <PainMatrix />
      <CTA />
      <Footer />
    </div>
  )
}
