// FILE: src/components/layout/ScrollProgressBar.jsx
import { useEffect, useRef } from 'react'

export default function ScrollProgressBar() {
  const progressRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight === 0) return
      const progress = Math.min(totalScroll / windowHeight, 1)
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-50 pointer-events-none"
    >
      <div
        ref={progressRef}
        className="h-full bg-linear-to-r from-indigo-500 via-sky-400 to-emerald-400 transition-[transform] duration-75 ease-out"
        style={{ width: '100%', transform: 'scaleX(0)', transformOrigin: 'left' }}
      />
    </div>
  )
}
