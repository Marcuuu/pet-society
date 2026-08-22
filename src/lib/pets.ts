import listingData from "@/components/Home/listing.json"
import dog1Image from "@/assets/dog1.webp"

const assetImages = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
}) as Record<string, string>

const imagesByFilename: Record<string, string> = {}
for (const path in assetImages) {
    const filename = path.split("/").pop()
    if (filename) imagesByFilename[filename] = assetImages[path]
}

export const resolvePetImage = (filename: string) =>
    imagesByFilename[filename] ?? dog1Image

export interface Pet {
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

export const pets = listingData as Pet[]

export const getPetById = (id: number) =>
    pets.find((pet) => pet.id === id)
