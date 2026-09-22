// FILE: src/context/ToastContext.jsx
import { createContext, useContext, useState, useCallback, useRef } from 'react'
import Toast from '../components/layout/Toast'

const ToastContext = createContext({
  showToast: () => {},
})

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const timerRef = useRef(null)

  const showToast = useCallback((message, type = 'info', duration = 3500) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setToast({ message, type })
    timerRef.current = setTimeout(() => {
      setToast(null)
      timerRef.current = null
    }, duration)
  }, [])

  const closeToast = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setToast(null)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast toast={toast} onClose={closeToast} />
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}