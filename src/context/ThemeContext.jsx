// FILE: src/context/ThemeContext.jsx
import { createContext, useContext, useEffect } from 'react'
import { useLocalStorageSafe } from '../hooks/useLocalStorageSafe'

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useLocalStorageSafe('digitalob_theme', 'dark')

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}