import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { PainSolution } from "@/components/landing/pain-solution"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Examples } from "@/components/landing/examples"
import { WhyTrust } from "@/components/landing/why-trust"
import { Pricing } from "@/components/landing/pricing"
import { Referral } from "@/components/landing/referral"
import { FAQ } from "@/components/landing/faq"
import { SeoText } from "@/components/landing/seo-text"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainSolution />
        <HowItWorks />
        <Examples />
        <WhyTrust />
        <Pricing />
        <Referral />
        <FAQ />
        <SeoText />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
