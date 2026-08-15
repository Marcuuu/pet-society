import { useEffect, useRef, useState } from "react"

interface FilterBarProps {
    searchQuery: string
    setSearchQuery: (query: string) => void
    selectedType: string
    setSelectedType: (type: string) => void
}

const typeOptions = [
    { value: "", label: "All Types" },
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
]

export const FilterBar = ({
    searchQuery,
    setSearchQuery,
    selectedType,
    setSelectedType,
}: FilterBarProps) => {
    const [isTypeOpen, setIsTypeOpen] = useState(false)
    const [draftQuery, setDraftQuery] = useState(searchQuery)
    const [draftType, setDraftType] = useState(selectedType)
    const typeRef = useRef<HTMLDivElement>(null)

    const selectedLabel =
        typeOptions.find((option) => option.value === draftType)?.label ??
        "All Types"

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                typeRef.current &&
                !typeRef.current.contains(e.target as Node)
            ) {
                setIsTypeOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () =>
            document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const applyFilters = () => {
        setSearchQuery(draftQuery)
        setSelectedType(draftType)
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                applyFilters()
            }}
            className="mx-auto flex w-fit items-center rounded-full border border-border bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
        >
            <label
                htmlFor="searchQuery"
                className="flex cursor-pointer flex-col gap-0.5 rounded-full px-6 py-2.5 transition-colors hover:bg-bg"
            >
                <span className="text-xs font-semibold">Search</span>
                <input
                    id="searchQuery"
                    type="text"
                    placeholder="Search by name or breed"
                    className="w-48 cursor-pointer bg-transparent text-sm text-text-muted placeholder:text-text-muted focus:outline-none"
                    value={draftQuery}
                    onChange={(e) => setDraftQuery(e.target.value)}
                />
            </label>
            <div className="h-8 w-px bg-border" />
            <div ref={typeRef} className="relative">
                <button
                    type="button"
                    onClick={() => setIsTypeOpen((open) => !open)}
                    aria-haspopup="listbox"
                    aria-expanded={isTypeOpen}
                    className="flex w-36 cursor-pointer flex-col gap-0.5 rounded-full px-6 py-2.5 text-left transition-colors hover:bg-bg"
                >
                    <span className="text-xs font-semibold">Pet Type</span>
                    <span className="flex items-center justify-between gap-2 text-sm text-text-muted">
                        {selectedLabel}
                        <svg
                            viewBox="0 0 12 8"
                            fill="none"
                            className={`h-2.5 w-2.5 shrink-0 transition-transform duration-200 ${
                                isTypeOpen ? "rotate-180" : ""
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
                    </span>
                </button>
                {isTypeOpen && (
                    <ul
                        role="listbox"
                        className="absolute top-[calc(100%+0.5rem)] left-0 z-10 w-44 overflow-hidden rounded-2xl border border-border bg-white py-2 shadow-lg"
                    >
                        {typeOptions.map((option) => (
                            <li
                                key={option.value}
                                role="option"
                                aria-selected={option.value === draftType}
                            >
                                <button
                                    type="button"
                                    onClick={() => {
                                        setDraftType(option.value)
                                        setIsTypeOpen(false)
                                    }}
                                    className={`block w-full cursor-pointer px-4 py-2 text-left text-sm transition-colors hover:bg-bg ${
                                        option.value === draftType
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
            <button
                type="submit"
                aria-label="Search"
                className="mr-2 flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
            >
                <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-5 w-5"
                    aria-hidden="true"
                >
                    <circle
                        cx="9"
                        cy="9"
                        r="6"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <path
                        d="m17 17-3.5-3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
        </form>
    )
}
