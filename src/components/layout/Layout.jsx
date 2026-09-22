// FILE: src/components/layout/Layout.jsx
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import ScrollProgressBar from './ScrollProgressBar'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-app text-main">
      <ScrollProgressBar />
      <Header />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}