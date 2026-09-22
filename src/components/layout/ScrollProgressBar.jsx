// FILE: src/components/layout/ScrollProgressBar.jsx
import { useState, useEffect } from 'react'

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight === 0) return
      setScrollProgress((totalScroll / windowHeight) * 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-50 pointer-events-none">
      <div
        className="h-full bg-linear-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-[width] duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}