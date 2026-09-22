// FILE: src/components/home/HomePage.jsx
import Hero from './Hero'
import TiersSection from './TiersSection'
import ComparisonTable from './ComparisonTable'
import PillarsSection from './PillarsSection'
import PlaybookSection from './PlaybookSection'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TiersSection />
      <ComparisonTable />
      <PillarsSection />
      <PlaybookSection />
    </div>
  )
}