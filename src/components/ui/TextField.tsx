import type { Ref } from "react"
import { formFieldClass } from "./formFieldStyles"

interface TextFieldProps {
    label: string
    type?: "text" | "email" | "tel" | "password"
    value: string
    onChange: (value: string) => void
    required?: boolean
    placeholder?: string
    inputRef?: Ref<HTMLInputElement>
}

export const TextField = ({
    label,
    type = "text",
    value,
    onChange,
    required,
    placeholder,
    inputRef,
}: TextFieldProps) => (
    <label className="flex flex-col gap-1.5 text-sm font-semibold">
        {label}
        <input
            ref={inputRef}
            type={type}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={formFieldClass}
        />
    </label>
)
