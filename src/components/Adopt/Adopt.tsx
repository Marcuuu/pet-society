import { useState } from "react"
import { FilterBar } from "@/components/Home/FilterBar"
import { Listing } from "../Home/Listing"

export const Adopt = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedType, setSelectedType] = useState("")

    return (
        <div className="container mt-16 mb-32 mx-auto px-4">
            <h2 className="text-center">Your next companion</h2>
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
                    limit={18}
                />
            </div>
        </div>
    )
}
