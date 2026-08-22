import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { IconBadge } from "@/components/ui/IconBadge"
import familyWithDog1 from "../../assets/family_with_dog1.webp"

const values = [
    {
        title: "Rescue",
        description:
            "We take in animals from unsafe situations, overcrowded shelters, and owners who can no longer care for them",
        icon: (
            <>
                <circle cx="10" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="5.5" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="14.5" cy="6.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="9" cy="4" r="1.4" stroke="currentColor" strokeWidth="1.4" />
            </>
        ),
    },
    {
        title: "Rehabilitate",
        description:
            "Every pet receives veterinary care, proper nutrition, and the time they need to heal, physically and emotionally",
        icon: (
            <path
                d="M10 17s-6.5-3.9-6.5-8.5A3.5 3.5 0 0 1 10 6a3.5 3.5 0 0 1 6.5 2.5C16.5 13.1 10 17 10 17Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
            />
        ),
    },
    {
        title: "Rehome",
        description:
            "We match every animal with a family who fits their personality and can give them a stable, loving home",
        icon: (
            <path
                d="M4 10.5 10 5l6 5.5M5.5 9v6.5h9V9"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
    },
    {
        title: "Educate",
        description:
            "We work with schools and the community to teach responsible pet ownership and prevent animals from ending up homeless",
        icon: (
            <path
                d="M4 5.5h5a2 2 0 0 1 2 2v7a2 2 0 0 0-2-2H4v-7ZM16 5.5h-5a2 2 0 0 0-2 2v7a2 2 0 0 1 2-2h5v-7Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
            />
        ),
    },
]

export const About = () => {
    return (
        <>
            <div className="container mx-auto mt-16 mb-32 px-4 text-center">
                <h1 className="text-secondary-dark">Our Purpose</h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
                    Pet Society exists so that no cat or dog in our
                    community has to face hardship alone. We rescue, care
                    for, and rehome animals in need, and we work to build a
                    community where every pet is valued.
                </p>
            </div>

            <section className="w-full bg-primary-tint">
                <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 lg:px-16">
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                        <img
                            src={familyWithDog1}
                            alt="A family who adopted a dog from Pet Society"
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-secondary-dark">How We Began</h2>
                        <p className="text-text-muted">
                            Pet Society started with a handful of
                            volunteers taking in strays around Joo Chiat who
                            had nowhere else to go. What began as a few
                            fosters in spare bedrooms has grown into a
                            dedicated shelter with a full-time team, but our
                            reason for being hasn't changed: every animal
                            deserves a safe place to land and a real chance
                            at a loving home.
                        </p>
                        <p className="text-text-muted">
                            Today we work alongside vets, foster families,
                            and adopters across Singapore to make sure that
                            chance reaches as many pets as possible.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto my-32 px-4">
                <SectionHeading
                    title="What We Stand For"
                    subtitle="Four commitments guide everything we do"
                />

                <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((value) => (
                        <div
                            key={value.title}
                            className="flex flex-col items-center gap-4 px-4 text-center"
                        >
                            <IconBadge icon={value.icon} />
                            <div>
                                <h4>{value.title}</h4>
                                <p className="mt-2 text-sm text-text-muted">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto mb-32 px-4 text-center">
                <h2>Be Part of the Story</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
                    Whether you adopt, foster, or volunteer, you become part
                    of how our story keeps going
                </p>
                <Link to="/adopt" className="btn btn-primary btn-lg mt-6">
                    Meet Our Pets
                </Link>
            </div>
        </>
    )
}
