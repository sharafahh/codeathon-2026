import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventsGrid from './components/EventsGrid'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import CrackTheCodePage from './pages/CrackTheCodePage'
import HackathonPage from './pages/HackathonPage'
import TechForgePage from './pages/TechForgePage'
import SplashCursor from './components/SplashCursor'
import './index.css'

function HomePage() {
  return (
    <>
      <Hero />
      <EventsGrid />
      <CTASection />
      <Footer />
    </>
  )
}

function PlaceholderPage({ title }) {
  return (
    <main className="min-h-screen bg-[#F7FBFF] px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-[#0F172A] sm:text-5xl">{title}</h1>
      <p className="mt-4 text-[#475569]">Page under construction.</p>
    </main>
  )
}

function EventLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <SplashCursor
        DENSITY_DISSIPATION={2.5}
        PRESSURE={0.45}
        COLOR_UPDATE_SPEED={16}
        RAINBOW_MODE={false}
        COLOR="#02A4FF"
      />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HomePage />
              </>
            }
          />
          <Route
            path="/crack-the-code"
            element={
              <EventLayout>
                <CrackTheCodePage />
              </EventLayout>
            }
          />
          <Route
            path="/hackathon"
            element={
              <EventLayout>
                <HackathonPage />
              </EventLayout>
            }
          />
          <Route
            path="/techforge"
            element={
              <EventLayout>
                <TechForgePage />
              </EventLayout>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Navbar />
                <PlaceholderPage title="Registration" />
              </>
            }
          />
          <Route
            path="/events/:id"
            element={
              <>
                <Navbar />
                <PlaceholderPage title="Event Details" />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
