import { formFieldClass } from "./formFieldStyles"

interface TextAreaFieldProps {
    label: string
    value: string
    onChange: (value: string) => void
    required?: boolean
    placeholder?: string
    rows?: number
}

export const TextAreaField = ({
    label,
    value,
    onChange,
    required,
    placeholder,
    rows = 3,
}: TextAreaFieldProps) => (
    <label className="flex flex-col gap-1.5 text-sm font-semibold">
        {label}
        <textarea
            rows={rows}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${formFieldClass} resize-none`}
        />
    </label>
)
