// FILE: src/components/home/Hero.jsx
import { Link } from 'react-router'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, FileText, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import HeroStats from './HeroStats'

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Badge variant="brand" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1.5" />
              Applied Systems for Distributed Teams
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-main leading-[1.15]"
          >
            Organizational Behavior in the{' '}
            <span className="bg-linear-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
              Digital Workplace
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-muted leading-relaxed"
          >
            Translating classic behavioral science, asynchronous software engineering, and human-AI collaboration into high-trust operational realities.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-2 text-xs sm:text-sm text-faint italic"
          >
            Micro/meso/macro is a standard OB structure. The five pillars and the label &apos;Digital OB&apos; are this hub&apos;s own practitioner framing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3 sm:gap-4"
          >
            <Link to="/charter">
              <Button size="lg" className="w-full sm:w-auto">
                <FileText className="w-4 h-4" />
                Build Team Charter
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link to="/audit">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Take Health Audit
              </Button>
            </Link>
          </motion.div>

          <HeroStats />
        </div>
      </div>
    </section>
  )
}