// FILE: src/components/layout/ThemeToggle.jsx
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded-xl text-muted hover:text-main bg-card-subtle hover:bg-slate-800/60 border border-subtle transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
    </button>
  )
}