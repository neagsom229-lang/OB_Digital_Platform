// FILE: src/hooks/useCountUp.js
import { useState, useEffect } from 'react'

export function useCountUp(targetNumber, duration = 1200, startNow = true) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startNow) return

    let startTime = null
    let animationFrame = null

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const current = Math.floor(progress * targetNumber)
      setCount(current)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setCount(targetNumber)
      }
    }

    animationFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrame)
  }, [targetNumber, duration, startNow])

  return count
}