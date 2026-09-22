// FILE: src/components/ui/Select.jsx
export default function Select({
  label,
  id,
  options = [],
  value,
  onChange,
  className = '',
  helperText,
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-xs font-semibold text-muted uppercase tracking-wider">
          {label}
        </label>
      )}
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full bg-card-subtle border border-subtle hover:border-hover text-main rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-100">
            {opt.label}
          </option>
        ))}
      </select>
      {helperText && <p className="text-xs text-muted">{helperText}</p>}
    </div>
  )
}