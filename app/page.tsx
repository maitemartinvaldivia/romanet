import Header from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <WhatWeDoSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  )
}
