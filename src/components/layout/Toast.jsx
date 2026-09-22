// FILE: src/components/layout/Toast.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

export default function Toast({ toast, onClose }) {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="fixed bottom-5 right-5 z-50 pointer-events-none flex flex-col gap-2 max-w-sm w-full px-4"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="status"
            className="pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-xl shadow-xl bg-card border border-subtle text-main"
          >
            <div className="flex items-center gap-3">
              {toast.type === 'success' && (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              )}
              {toast.type === 'error' && (
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
              )}
              {toast.type === 'info' && (
                <Info className="w-5 h-5 text-indigo-400 shrink-0" />
              )}
              <span className="text-sm font-medium">{toast.message}</span>
            </div>
            <button
              onClick={onClose}
              className="text-muted hover:text-main p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}