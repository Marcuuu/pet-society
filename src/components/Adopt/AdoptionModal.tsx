import {
    useEffect,
    useRef,
    useState,
    type MouseEvent,
    type SubmitEvent,
} from "react"
import { SelectField } from "@/components/ui/SelectField"
import { TextField } from "@/components/ui/TextField"
import { TextAreaField } from "@/components/ui/TextAreaField"
import type { Pet } from "@/lib/pets"

interface AdoptionModalProps {
    pet: Pet
    onClose: () => void
}

interface AdoptionFormState {
    fullName: string
    email: string
    phone: string
    homeType: string
    otherPets: string
    reason: string
}

const initialForm: AdoptionFormState = {
    fullName: "",
    email: "",
    phone: "",
    homeType: "hdb",
    otherPets: "no",
    reason: "",
}

const homeTypeOptions = [
    { value: "hdb", label: "HDB" },
    { value: "condominium", label: "Condominium" },
    { value: "landed", label: "Landed Property" },
    { value: "other", label: "Other" },
]

const otherPetsOptions = [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
]

export const AdoptionModal = ({ pet, onClose }: AdoptionModalProps) => {
    const [form, setForm] = useState<AdoptionFormState>(initialForm)
    const [submitted, setSubmitted] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)
    const firstFieldRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return

        dialog.showModal()
        firstFieldRef.current?.focus()

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [])

    const updateField = (field: keyof AdoptionFormState, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const closeDialog = () => dialogRef.current?.close()

    const handleBackdropClick = (e: MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) closeDialog()
    }

    return (
        <dialog
            ref={dialogRef}
            onClick={handleBackdropClick}
            onClose={onClose}
            aria-labelledby="adoption-modal-title"
            className="m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-4 py-8 open:flex open:items-center open:justify-center backdrop:bg-black/50"
        >
            <div className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-y-auto rounded-2xl bg-white p-8">
                <div className="flex items-start justify-between gap-4">
                    <h3
                        id="adoption-modal-title"
                        className="text-secondary-dark"
                    >
                        {submitted ? "Application Sent" : `Adopt ${pet.name}`}
                    </h3>
                    <button
                        type="button"
                        onClick={closeDialog}
                        aria-label="Close"
                        className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full text-text-muted transition-colors hover:bg-bg"
                    >
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                d="m5 5 10 10M15 5 5 15"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>

                {submitted ? (
                    <>
                        <p className="mt-4 text-text-muted">
                            Thank you for applying to adopt {pet.name}. Our team
                            will review your application and reach out to you at{" "}
                            {form.email} within 2 business days to arrange a
                            meet and greet.
                        </p>
                        <button
                            type="button"
                            onClick={closeDialog}
                            className="btn btn-primary mt-6 w-full"
                        >
                            Close
                        </button>
                    </>
                ) : (
                    <>
                        <p className="mt-2 text-sm text-text-muted">
                            Tell us a bit about yourself and your home so we can
                            see if you and {pet.name} are a great match
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 flex flex-col gap-4"
                        >
                            <TextField
                                label="Full Name"
                                required
                                value={form.fullName}
                                onChange={(value) =>
                                    updateField("fullName", value)
                                }
                                inputRef={firstFieldRef}
                            />
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <TextField
                                    label="Email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(value) =>
                                        updateField("email", value)
                                    }
                                />
                                <TextField
                                    label="Phone Number"
                                    type="tel"
                                    required
                                    value={form.phone}
                                    onChange={(value) =>
                                        updateField("phone", value)
                                    }
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <SelectField
                                    label="Home Type"
                                    value={form.homeType}
                                    options={homeTypeOptions}
                                    onChange={(value) =>
                                        updateField("homeType", value)
                                    }
                                />
                                <SelectField
                                    label="Other Pets at Home?"
                                    value={form.otherPets}
                                    options={otherPetsOptions}
                                    onChange={(value) =>
                                        updateField("otherPets", value)
                                    }
                                />
                            </div>
                            <TextAreaField
                                label={`Why do you want to adopt ${pet.name}?`}
                                required
                                value={form.reason}
                                onChange={(value) =>
                                    updateField("reason", value)
                                }
                            />
                            <button
                                type="submit"
                                className="btn btn-primary mt-2 w-full"
                            >
                                Submit Application
                            </button>
                        </form>
                    </>
                )}
            </div>
        </dialog>
    )
}
