import { useState, type SubmitEvent } from "react"
import { Link } from "react-router-dom"
import { SelectField } from "@/components/ui/SelectField"
import { TextField } from "@/components/ui/TextField"
import { TextAreaField } from "@/components/ui/TextAreaField"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { StepList } from "@/components/ui/StepList"

const speciesOptions = [
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "other", label: "Other" },
]

const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "unsure", label: "Unsure" },
]

const spayedNeuteredOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "unsure", label: "Unsure" },
]

const steps = [
    {
        number: 1,
        title: "Submit This Form",
        description:
            "Tell us about your pet, their health, and your situation so we know how best to help",
    },
    {
        number: 2,
        title: "We Review & Reach Out",
        description:
            "Our team reviews your submission and contacts you within 2 business days to talk through next steps",
    },
    {
        number: 3,
        title: "Schedule an Intake",
        description:
            "We'll arrange a time for you to bring your pet in, or in some cases arrange a pickup",
    },
    {
        number: 4,
        title: "Your Pet Is Cared For",
        description:
            "Your pet receives a health check and settles into our care while we look for their next home",
    },
]

interface ReleaseFormState {
    ownerName: string
    email: string
    phone: string
    petName: string
    species: string
    breed: string
    age: string
    gender: string
    spayedNeutered: string
    medicalConditions: string
    behaviorNotes: string
    reason: string
}

const initialForm: ReleaseFormState = {
    ownerName: "",
    email: "",
    phone: "",
    petName: "",
    species: "dog",
    breed: "",
    age: "",
    gender: "unsure",
    spayedNeutered: "unsure",
    medicalConditions: "",
    behaviorNotes: "",
    reason: "",
}

export const Release = () => {
    const [form, setForm] = useState<ReleaseFormState>(initialForm)
    const [submitted, setSubmitted] = useState(false)

    const updateField = (field: keyof ReleaseFormState, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="container mx-auto mt-16 mb-32 px-4 text-center">
                <h2 className="text-secondary-dark">Request Received</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
                    Thank you for telling us about {form.petName || "your pet"}.
                    Our team will review your submission and reach out to you at{" "}
                    {form.email} within 2 business days to talk through next
                    steps.
                </p>
                <Link to="/pet-care" className="btn btn-primary btn-lg mt-6">
                    Learn More About Our Process
                </Link>
            </div>
        )
    }

    return (
        <>
            <div className="container mx-auto mt-16 mb-16 px-4 text-center">
                <h1 className="text-secondary-dark">Release a Pet</h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
                    We know this isn't an easy decision. If you can no longer
                    care for your pet, this form helps us understand your
                    situation so we can give them the best possible start with
                    us
                </p>
            </div>

            <div className="container mx-auto mb-16 px-4">
                <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-primary-tint px-6 py-5 text-center">
                    <p className="text-sm text-text-muted">
                        If your pet is a stray, injured, or in immediate danger,
                        please call us directly at{" "}
                        <a href="tel:+6581234567" className="link-inline">
                            (65) 8123 4567
                        </a>{" "}
                        instead of filling out this form
                    </p>
                </div>
            </div>

            <div className="container mx-auto mb-32 px-4">
                <SectionHeading
                    title="How It Works"
                    subtitle="What happens after you submit this form"
                />
                <StepList steps={steps} />
            </div>

            <section className="w-full bg-bg py-16">
                <div className="container mx-auto px-4">
                    <SectionHeading
                        title="Tell Us About Your Pet"
                        subtitle="The more we know, the better we can care for them"
                    />

                    <form
                        onSubmit={handleSubmit}
                        className="mx-auto mt-12 flex max-w-2xl flex-col gap-10 rounded-2xl border border-border bg-white p-8"
                    >
                        <div className="flex flex-col gap-4">
                            <h5>Your Information</h5>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <TextField
                                    label="Full Name"
                                    required
                                    value={form.ownerName}
                                    onChange={(value) =>
                                        updateField("ownerName", value)
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
                            <TextField
                                label="Email"
                                type="email"
                                required
                                value={form.email}
                                onChange={(value) =>
                                    updateField("email", value)
                                }
                            />
                        </div>

                        <div className="flex flex-col gap-4">
                            <h5>Your Pet's Information</h5>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <TextField
                                    label="Pet Name"
                                    required
                                    value={form.petName}
                                    onChange={(value) =>
                                        updateField("petName", value)
                                    }
                                />
                                <SelectField
                                    label="Species"
                                    value={form.species}
                                    options={speciesOptions}
                                    onChange={(value) =>
                                        updateField("species", value)
                                    }
                                />
                                <TextField
                                    label="Breed"
                                    value={form.breed}
                                    onChange={(value) =>
                                        updateField("breed", value)
                                    }
                                />
                                <TextField
                                    label="Age"
                                    placeholder="e.g. 3 years"
                                    value={form.age}
                                    onChange={(value) =>
                                        updateField("age", value)
                                    }
                                />
                                <SelectField
                                    label="Gender"
                                    value={form.gender}
                                    options={genderOptions}
                                    onChange={(value) =>
                                        updateField("gender", value)
                                    }
                                />
                                <SelectField
                                    label="Spayed / Neutered"
                                    value={form.spayedNeutered}
                                    options={spayedNeuteredOptions}
                                    onChange={(value) =>
                                        updateField("spayedNeutered", value)
                                    }
                                />
                            </div>
                            <TextAreaField
                                label="Medical Conditions"
                                placeholder="Any allergies, conditions, or medications we should know about"
                                value={form.medicalConditions}
                                onChange={(value) =>
                                    updateField("medicalConditions", value)
                                }
                            />
                            <TextAreaField
                                label="Behavior & Temperament"
                                placeholder="How do they act around people, other animals, and children?"
                                value={form.behaviorNotes}
                                onChange={(value) =>
                                    updateField("behaviorNotes", value)
                                }
                            />
                            <TextAreaField
                                label="Reason for Release"
                                required
                                value={form.reason}
                                onChange={(value) =>
                                    updateField("reason", value)
                                }
                            />
                        </div>

                        <p className="text-xs text-text-muted">
                            There is no fee to release your pet to us. We ask
                            that you bring any vaccination records and your
                            pet's favorite toy or blanket to the intake
                            appointment
                        </p>

                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            Submit Release Request
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
