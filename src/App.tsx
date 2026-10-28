import { DemoProvider } from "@/lib/demo-store"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/Marquee"
import { About } from "@/components/About"
import { Events } from "@/components/Events"
import { Gallery } from "@/components/Gallery"
import { Booking } from "@/components/Booking"
import { Footer } from "@/components/Footer"
import { AdminPanel } from "@/components/AdminPanel"

export default function App() {
  return (
    <DemoProvider>
      <div className="relative min-h-screen overflow-x-hidden bg-background">
        <div className="noise-overlay" aria-hidden />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Events />
          <About />
          <Gallery />
          <Booking />
        </main>
        <Footer />
        <AdminPanel />
      </div>
    </DemoProvider>
  )
}