import { SectionHeading } from "@/components/ui/SectionHeading"
import familyWithDog1 from "../../assets/family_with_dog1.webp"
import familyWithDog2 from "../../assets/family_with_dog2.webp"
import familyWithCat1 from "../../assets/family_with_cat1.webp"
import familyWithCat2 from "../../assets/family_with_cat2.webp"

const reviews = [
    {
        image: familyWithDog1,
        quote: "Adopting Max was the best decision our family ever made. The process was smooth and the team truly cared about finding the right match for us.",
        name: "The Tan Family",
        pet: "Adopted Max, Golden Retriever",
    },
    {
        image: familyWithCat1,
        quote: "Luna fit right into our home from day one. We felt supported every step of the way, from the first meet-and-greet to bringing her home.",
        name: "The Lim Family",
        pet: "Adopted Luna, Domestic Shorthair",
    },
    {
        image: familyWithDog2,
        quote: "The staff took the time to understand what we were looking for, and Buddy has been the perfect addition to our family.",
        name: "The Ong Family",
        pet: "Adopted Buddy, Labrador Retriever",
    },
    {
        image: familyWithCat2,
        quote: "We couldn't be happier with Milo. Pet Society made the whole adoption journey stress-free and full of joy.",
        name: "The Wong Family",
        pet: "Adopted Milo, British Shorthair",
    },
]

const StarRating = () => (
    <div className="flex gap-1 text-accent-gold">
        {Array.from({ length: 5 }).map((_, i) => (
            <svg
                key={i}
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
            >
                <path d="m10 1.5 2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85L10 1.5Z" />
            </svg>
        ))}
    </div>
)

export const Reviews = () => {
    return (
        <section className="pt-32">
            <SectionHeading
                title="Happy Tails"
                subtitle="Stories from families who found their new best friend with us."
            />

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {reviews.map((review) => (
                    <div
                        key={review.name}
                        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
                    >
                        <div className="h-[250px] w-full shrink-0 overflow-hidden">
                            <img
                                src={review.image}
                                alt={`${review.name} with their adopted pet`}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="flex flex-1 flex-col gap-3 px-4 py-6">
                            <StarRating />
                            <p className="text-sm text-text-muted italic">
                                "{review.quote}"
                            </p>
                            <div className="mt-auto">
                                <p className="text-sm font-semibold text-secondary-dark">
                                    {review.name}
                                </p>
                                <p className="text-xs text-text-muted">
                                    {review.pet}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
