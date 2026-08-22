import { useEffect, useRef, useState } from "react"
import { formFieldClass } from "./formFieldStyles"

interface Option {
    value: string
    label: string
}

interface SelectFieldProps {
    label: string
    value: string
    options: Option[]
    onChange: (value: string) => void
}

export const SelectField = ({
    label,
    value,
    options,
    onChange,
}: SelectFieldProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const selectedLabel = options.find((o) => o.value === value)?.label ?? ""

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () =>
            document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <label className="flex flex-col gap-1.5 text-sm font-semibold">
            {label}
            <div ref={ref} className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                    className={`${formFieldClass} flex w-full cursor-pointer items-center justify-between gap-2 text-left transition-colors hover:bg-bg`}
                >
                    {selectedLabel}
                    <svg
                        viewBox="0 0 12 8"
                        fill="none"
                        className={`h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                    >
                        <path
                            d="m1 1.5 5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                {isOpen && (
                    <ul
                        role="listbox"
                        className="absolute top-[calc(100%+0.5rem)] left-0 z-10 w-full overflow-hidden rounded-2xl border border-border bg-white py-2 shadow-lg"
                    >
                        {options.map((option) => (
                            <li
                                key={option.value}
                                role="option"
                                aria-selected={option.value === value}
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        onChange(option.value)
                                        setIsOpen(false)
                                    }}
                                    className={`block w-full cursor-pointer px-4 py-2 text-left text-sm transition-colors hover:bg-bg ${
                                        option.value === value
                                            ? "font-semibold text-primary"
                                            : "text-text-muted"
                                    }`}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </label>
    )
}
