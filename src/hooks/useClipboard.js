// FILE: src/hooks/useClipboard.js
import { useState, useCallback } from 'react'

export function useClipboard(timeout = 2500) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)

  const copy = useCallback(
    async (text) => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(text)
        } else {
          const textArea = document.createElement('textarea')
          textArea.value = text
          textArea.style.position = 'fixed'
          textArea.style.opacity = '0'
          document.body.appendChild(textArea)
          textArea.focus()
          textArea.select()
          const successful = document.execCommand('copy')
          document.body.removeChild(textArea)
          if (!successful) throw new Error('execCommand copy failed')
        }
        setCopied(true)
        setError(null)
        setTimeout(() => setCopied(false), timeout)
        return true
      } catch (err) {
        console.error('Clipboard copy failed:', err)
        setError(err)
        setCopied(false)
        return false
      }
    },
    [timeout]
  )

  return { copy, copied, error }
}