import { useMemo, useState } from "react"
import listingData from "./listing.json"
import dog1Image from "../../assets/dog1.jpg"

const assetImages = import.meta.glob("../../assets/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
}) as Record<string, string>

const imagesByFilename: Record<string, string> = {}
for (const path in assetImages) {
    const filename = path.split("/").pop()
    if (filename) imagesByFilename[filename] = assetImages[path]
}

const resolvePetImage = (filename: string) =>
    imagesByFilename[filename] ?? dog1Image

interface Pet {
    id: number
    name: string
    type: string
    breed: string
    age: string
    gender: string
    size: string
    location: string
    image: string
    description: string
}

interface ListingProps {
    limit?: number
    searchQuery: string
    selectedType: string
}

export const Listing = ({
    limit = 6,
    searchQuery,
    selectedType,
}: ListingProps) => {
    const [listings] = useState<Pet[]>(listingData as Pet[])

    const filteredListings = useMemo(() => {
        const query = searchQuery.toLowerCase()

        return listings
            .filter((pet) => {
                const matchesSearchQuery =
                    pet.name.toLowerCase().includes(query) ||
                    pet.breed.toLowerCase().includes(query)
                const matchesSelectedType =
                    selectedType === "" || pet.type === selectedType

                return matchesSearchQuery && matchesSelectedType
            })
            .slice(0, limit)
    }, [listings, searchQuery, selectedType, limit])

    if (filteredListings.length === 0) {
        return (
            <p className="text-center text-text-muted">
                No pets found matching your criteria.
            </p>
        )
    }

    return (
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredListings.map((pet) => (
                <li
                    key={pet.id}
                    className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                    <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                            src={resolvePetImage(pet.image)}
                            alt={pet.name}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-secondary-dark capitalize">
                            {pet.type}
                        </span>
                    </div>
                    <div className="flex flex-col gap-2 p-5">
                        <div className="flex items-baseline justify-between">
                            <h4 className="text-secondary-dark">{pet.name}</h4>
                            <span className="text-sm text-text-muted">
                                {pet.age}
                            </span>
                        </div>
                        <p className="text-sm font-semibold text-primary">
                            {pet.breed}
                        </p>
                        <p className="text-sm text-text-muted">
                            {pet.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs text-text-muted">
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
                        <a
                            href={`/adopt/${pet.id}`}
                            className="btn btn-secondary btn-sm mt-3 w-full"
                        >
                            Meet {pet.name}
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    )
}
