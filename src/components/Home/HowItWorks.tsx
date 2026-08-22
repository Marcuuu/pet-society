import { SectionHeading } from "@/components/ui/SectionHeading"
import { StepList } from "@/components/ui/StepList"

const steps = [
    {
        number: 1,
        title: "Browse & Favorite",
        description:
            "Search by species, breed, age, and size to find pets that match your home and lifestyle",
    },
    {
        number: 2,
        title: "Meet & Greet",
        description:
            "Schedule a visit to spend time with your favorite pets and see if it's the right match",
    },
    {
        number: 3,
        title: "Apply & Get Approved",
        description:
            "Submit an adoption application so our team can make sure it's a great fit for everyone",
    },
    {
        number: 4,
        title: "Bring Them Home",
        description:
            "Finalize the adoption and welcome your new best friend into their forever home",
    },
]

export const HowItWorks = () => {
    return (
        <section>
            <SectionHeading
                title="How Adoption Works"
                subtitle="From browsing to bringing them home, here's what to expect"
            />
            <StepList steps={steps} />
        </section>
    )
}
