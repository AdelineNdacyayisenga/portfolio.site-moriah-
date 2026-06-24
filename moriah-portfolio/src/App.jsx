import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WorkPage } from './pages/WorkPage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'
import { ProjectPage } from './pages/ProjectPage'
import { jumpersBuddy } from './projects/jumpers-buddy'
import { koi } from './projects/koi'
import { portfolio } from './projects/portfolio'
import { sfAnimation } from './projects/sf-animation'

function App() {
  return (
    <BrowserRouter basename="/portfolio.site-moriah-/">
      <div className="portfolio-container">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<WorkPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work/jumpers-buddy" element={<ProjectPage data={jumpersBuddy} />} />
            <Route path="/work/koi" element={<ProjectPage data={koi} />} />
            <Route path="/work/portfolio" element={<ProjectPage data={portfolio} />} />
            <Route path="/work/sf-animation" element={<ProjectPage data={sfAnimation} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
