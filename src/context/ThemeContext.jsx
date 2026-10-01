// FILE: src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from 'react'
import { useLocalStorageSafe } from '../hooks/useLocalStorageSafe'

const ThemeContext = createContext({
  theme: 'system',
  resolvedTheme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorageSafe('digitalob_theme', 'system')
  const [systemTheme, setSystemTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  )
  const resolvedTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    const preference = window.matchMedia('(prefers-color-scheme: dark)')
    const updateSystemTheme = (event) => setSystemTheme(event.matches ? 'dark' : 'light')
    preference.addEventListener('change', updateSystemTheme)
    return () => preference.removeEventListener('change', updateSystemTheme)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'system') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', theme)
    }
    if (resolvedTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', resolvedTheme === 'dark' ? '#030712' : '#f8fafc')
  }, [resolvedTheme, theme])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
