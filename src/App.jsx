import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Objectives from './components/Objectives'
import EventsGrid from './components/EventsGrid'
import AwardsSection from './components/AwardsSection'
import Footer from './components/Footer'
import CrackTheCodePage from './pages/CrackTheCodePage'
import HackathonPage from './pages/HackathonPage'
import TechForgePage from './pages/TechForgePage'
import './index.css'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Objectives />
      <EventsGrid />
      <AwardsSection />
      <Footer />
    </>
  )
}

function PlaceholderPage({ title }) {
  return (
    <main className="min-h-screen bg-black px-4 py-20 text-center">
      <h1 className="text-3xl font-bold text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 text-gray-400">Page under construction.</p>
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
      <div className="dark">
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