// FILE: src/App.jsx
import { Routes, Route } from 'react-router'
import Layout from './components/layout/Layout'
import HomePage from './components/home/HomePage'
import CharterPage from './components/charter/CharterPage'
import AuditPage from './components/audit/AuditPage'
import LexiconPage from './components/lexicon/LexiconPage'
import SourcesPage from './components/sources/SourcesPage'
import CurriculumPage from './components/curriculum/CurriculumPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="charter" element={<CharterPage />} />
        <Route path="audit" element={<AuditPage />} />
        <Route path="lexicon" element={<LexiconPage />} />
        <Route path="sources" element={<SourcesPage />} />
        <Route path="curriculum" element={<CurriculumPage />} />
      </Route>
    </Routes>
  )
}