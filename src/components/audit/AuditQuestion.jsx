// FILE: src/components/audit/AuditQuestion.jsx
export default function AuditQuestion({ question, value, onChange }) {
  return (
    <fieldset className="p-5 rounded-2xl bg-card border border-subtle space-y-4">
      <legend className="text-xs font-bold text-indigo-400 uppercase tracking-wider px-1">
        {question.dimension}
      </legend>
      <p className="text-sm font-medium text-main leading-relaxed">
        {question.question}
      </p>

      <div className="space-y-2">
        <div className="grid grid-cols-5 gap-1 sm:gap-2">
          {[1, 2, 3, 4, 5].map((num) => {
            const isSelected = Number(value) === num
            return (
              <label
                key={num}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-sm font-bold cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                    : 'bg-card-subtle text-muted border-subtle hover:border-hover hover:text-main'
                }`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={num}
                  checked={isSelected}
                  onChange={() => onChange(question.id, num)}
                  className="sr-only"
                />
                <span>{num}</span>
              </label>
            )
          })}
        </div>

        <div className="flex items-center justify-between text-[11px] text-muted font-medium pt-1 px-1">
          <span>{question.lowAnchor}</span>
          <span>{question.highAnchor}</span>
        </div>
      </div>
    </fieldset>
  )
}