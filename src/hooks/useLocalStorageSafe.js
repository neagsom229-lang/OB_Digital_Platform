// FILE: src/hooks/useLocalStorageSafe.js
import { useState, useEffect } from 'react'

export function useLocalStorageSafe(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state))
    } catch (error) {
      console.warn(`Error writing localStorage key "${key}":`, error)
    }
  }, [key, state])

  return [state, setState]
}