import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getPetById, resolvePetImage } from "@/lib/pets"
import { AdoptionModal } from "./AdoptionModal"

export const PetDetail = () => {
    const { id } = useParams<{ id: string }>()
    const pet = getPetById(Number(id))
    const [isApplying, setIsApplying] = useState(false)

    if (!pet) {
        return (
            <div className="container mt-16 mb-32 mx-auto px-4 text-center">
                <h2>Pet not found</h2>
                <p className="mt-4 text-text-muted">
                    We couldn't find a pet with that ID.
                </p>
                <Link
                    to="/adopt"
                    className="btn btn-secondary mt-8 inline-block"
                >
                    Back to all pets
                </Link>
            </div>
        )
    }

    return (
        <div className="container mt-16 mb-32 mx-auto px-4">
            <Link
                to="/adopt"
                className="text-sm text-text-muted hover:text-primary"
            >
                &larr; Back to all pets
            </Link>
            <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                        src={resolvePetImage(pet.image)}
                        alt={pet.name}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-baseline justify-between">
                        <h2 className="text-secondary-dark">{pet.name}</h2>
                        <span className="text-text-muted">{pet.age}</span>
                    </div>
                    <p className="text-lg font-semibold text-primary">
                        {pet.breed}
                    </p>
                    <p className="text-text-muted">{pet.description}</p>
                    <div className="flex flex-wrap gap-2 text-sm text-text-muted">
                        <span className="rounded-full bg-bg px-3 py-1 capitalize">
                            {pet.type}
                        </span>
                        <span className="rounded-full bg-bg px-3 py-1">
                            {pet.gender}
                        </span>
                        <span className="rounded-full bg-bg px-3 py-1">
                            {pet.size}
                        </span>
                        <span className="rounded-full bg-bg px-3 py-1">
                            {pet.location}
                        </span>
                    </div>
                    <button
                        className="btn btn-secondary mt-4 w-full"
                        type="button"
                        onClick={() => setIsApplying(true)}
                    >
                        Adopt {pet.name}
                    </button>
                </div>
            </div>
            {isApplying && (
                <AdoptionModal
                    pet={pet}
                    onClose={() => setIsApplying(false)}
                />
            )}
        </div>
    )
}
