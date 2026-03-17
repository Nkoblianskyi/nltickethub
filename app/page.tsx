import {
  HeroBlock,
  StatsBento,
  CompareStrip,
  FeaturedEvents,
  HowItWorks,
  WhyUs,
  FAQBlock,
  CTABlock,
} from '@/components/home'
import { PartnersSection } from '@/components/partners-section'

export default function HomePage() {
  return (
    <>
      <HeroBlock />
      <StatsBento />
      <CompareStrip />
      <FeaturedEvents />
      <HowItWorks />
      <WhyUs />
      <PartnersSection />
      <FAQBlock />
      <CTABlock />
    </>
  )
}
