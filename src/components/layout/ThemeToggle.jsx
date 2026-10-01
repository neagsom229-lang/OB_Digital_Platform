// FILE: src/components/layout/ThemeToggle.jsx
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme()
  const targetTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="p-2 rounded-xl text-muted hover:text-main bg-card-subtle hover:bg-border-subtle border border-subtle transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
      aria-label={`Switch to ${targetTheme} mode`}
      title={`Switch to ${targetTheme} mode`}
    >
      {resolvedTheme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-500" />
      )}
    </button>
  )
}
