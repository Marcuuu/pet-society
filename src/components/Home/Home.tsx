import { HeroBanner } from "./HeroBanner"
import { PetListing } from "./PetListing"
import { StatsBar } from "./StatsBar"
import { HowItWorks } from "./HowItWorks"
import { SideSection } from "./SideSection"
import { Reviews } from "./Reviews"

export const Home = () => {
    return (
        <>
            <HeroBanner />
            <div className="container mx-auto my-32 px-4">
                <PetListing />
            </div>
            <StatsBar />
            <div className="container mx-auto my-32 px-4">
                <HowItWorks />
            </div>
            <SideSection />
            <div className="container mx-auto mb-32 px-4">
                <Reviews />
            </div>
        </>
    )
}
