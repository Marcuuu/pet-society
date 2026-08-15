import { FilterBar } from "./FilterBar"
import { useState } from "react"
import { Listing } from "./Listing"

export const PetListing = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedType, setSelectedType] = useState("")

    return (
        <div>
            <h2 className="text-center">Find your next companion</h2>
            <div className="mt-8">
                <FilterBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                />
                <Listing
                    searchQuery={searchQuery}
                    selectedType={selectedType}
                />
            </div>
        </div>
    )
}
