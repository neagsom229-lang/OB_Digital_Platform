// FILE: src/components/home/PillarTabs.jsx
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pillars } from '../../data/pillars'
import PillarDetailCard from './PillarDetailCard'

export default function PillarTabs() {
  const [activeTab, setActiveTab] = useState(pillars[0].id)
  const tabRefs = useRef({})

  const activePillar = pillars.find((p) => p.id === activeTab) || pillars[0]

  const handleKeyDown = (e, currentIndex) => {
    let nextIndex = null
    if (e.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % pillars.length
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + pillars.length) % pillars.length
    } else if (e.key === 'Home') {
      nextIndex = 0
    } else if (e.key === 'End') {
      nextIndex = pillars.length - 1
    }

    if (nextIndex !== null) {
      e.preventDefault()
      const nextId = pillars[nextIndex].id
      setActiveTab(nextId)
      tabRefs.current[nextId]?.focus()
    }
  }

  return (
    <div className="space-y-8">
      {/* Accessible ARIA Tablist */}
      <div
        role="tablist"
        aria-label="The Five Pillars of Digital Organizational Behavior"
        className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-subtle scrollbar-none"
      >
        {pillars.map((pillar, idx) => {
          const isActive = pillar.id === activeTab
          return (
            <button
              key={pillar.id}
              ref={(el) => (tabRefs.current[pillar.id] = el)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${pillar.id}`}
              id={`tab-${pillar.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(pillar.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`relative px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer ${
                isActive ? 'text-main' : 'text-muted hover:text-main hover:bg-slate-800/30'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs opacity-60">{pillar.number}</span>
                <span>{pillar.title.split('&')[0]}</span>
              </div>
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Tab Panel */}
      <div
        role="tabpanel"
        id={`panel-${activePillar.id}`}
        aria-labelledby={`tab-${activePillar.id}`}
      >
        <AnimatePresence mode="wait">
          <PillarDetailCard pillar={activePillar} />
        </AnimatePresence>
      </div>
    </div>
  )
}