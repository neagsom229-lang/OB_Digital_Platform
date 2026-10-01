// FILE: src/components/ui/TextInput.jsx
export default function TextInput({
  label,
  id,
  value,
  onChange,
  placeholder,
  className = '',
  helperText,
  type = 'text',
  ...inputProps
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-semibold text-muted uppercase tracking-wider"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-describedby={helperText ? `${id}-help` : undefined}
        className="w-full bg-card-subtle border border-subtle hover:border-hover text-main rounded-[var(--radius-control)] px-3.5 py-2 text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
        {...inputProps}
      />
      {helperText && (
        <p id={`${id}-help`} className="text-xs text-muted">
          {helperText}
        </p>
      )}
    </div>
  )
}
