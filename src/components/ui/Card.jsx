// FILE: src/components/ui/Card.jsx
import { useRef } from 'react'

export default function Card({
  children,
  className = '',
  spotlight = true,
  as: Component = 'div',
  ...props
}) {
  const cardRef = useRef(null)

  const handlePointerMove = (e) => {
    if (!spotlight || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardRef.current.style.setProperty('--mouse-x', `${x}px`)
    cardRef.current.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <Component
      ref={cardRef}
      onPointerMove={handlePointerMove}
      className={`bg-card border border-subtle rounded-2xl p-6 transition-all duration-200 ${
        spotlight ? 'spotlight-card' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}