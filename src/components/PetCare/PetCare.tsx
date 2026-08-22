import { Link } from "react-router-dom"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { StepList } from "@/components/ui/StepList"
import { IconBadge } from "@/components/ui/IconBadge"
import familyWithCat2 from "../../assets/family_with_cat2.webp"

const sources = [
    {
        title: "Owner Releases",
        description:
            "Sometimes a family can no longer care for a pet, whether due to moving, allergies, finances, or a change in circumstances. We take these animals in so they don't end up on the street",
        link: { to: "/release-a-pet", label: "Start a release request" },
        icon: (
            <path
                d="M6 12v-2a4 4 0 0 1 8 0v2M4 12h12v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
            />
        ),
    },
    {
        title: "Rescued Strays",
        description:
            "Our outreach team responds to reports of strays and abandoned animals found around the island, bringing them in for care and a chance at a home",
        icon: (
            <path
                d="M10 17.5s-6-4.7-6-9A6 3.5 0 1 1 10 17.5Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
            />
        ),
    },
    {
        title: "Shelter Transfers",
        description:
            "When partner shelters are overcrowded, we take in animals from them so no pet has to wait longer than necessary for a chance at adoption",
        icon: (
            <path
                d="M4 7h8l-2-2m2 2-2 2M16 13H8l2 2m-2-2 2-2"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
    },
    {
        title: "Born in Foster Care",
        description:
            "Some of our animals arrive pregnant or nursing. Their litters are raised by our foster families until they're old enough to be adopted",
        icon: (
            <>
                <circle cx="7" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="13" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.4" />
                <path
                    d="M4.5 15c.5-2.5 2.4-4 5.5-4s5 1.5 5.5 4"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                />
            </>
        ),
    },
]

const careSteps = [
    {
        number: 1,
        title: "Health Check & Vaccination",
        description:
            "Every new arrival is examined by our vet team, treated for any illness or injury, and brought up to date on vaccinations",
    },
    {
        number: 2,
        title: "Behavioral Assessment",
        description:
            "We spend time getting to know each pet's temperament so we can match them with the right kind of home",
    },
    {
        number: 3,
        title: "Foster or Shelter Placement",
        description:
            "Depending on their needs, pets recover in our shelter or with a foster family while they wait to be listed",
    },
    {
        number: 4,
        title: "Cleared for Adoption",
        description:
            "Once healthy and ready, each pet is added to our listings so they can start meeting future families",
    },
]

export const PetCare = () => {
    return (
        <>
            <div className="container mx-auto mt-16 mb-32 px-4 text-center">
                <h1 className="text-secondary-dark">
                    Where Our Pets Come From
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
                    Every animal in our care has a different story. Here's
                    how they find their way to us, and what happens before
                    they're ready to meet you
                </p>
            </div>

            <div className="container mx-auto mb-32 px-4">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {sources.map((source) => (
                        <div
                            key={source.title}
                            className="flex gap-5 rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                        >
                            <IconBadge icon={source.icon} size="sm" />
                            <div>
                                <h4>{source.title}</h4>
                                <p className="mt-2 text-sm text-text-muted">
                                    {source.description}
                                </p>
                                {source.link && (
                                    <Link
                                        to={source.link.to}
                                        className="link-inline mt-2 inline-block text-sm font-semibold"
                                    >
                                        {source.link.label} &rarr;
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="w-full bg-primary-tint">
                <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 lg:px-16">
                    <div className="flex flex-col gap-4 md:order-1">
                        <h2 className="text-secondary-dark">
                            Cared For Before They're Ready
                        </h2>
                        <p className="text-text-muted">
                            Between arriving and appearing on our adoption
                            page, most pets spend anywhere from a few days to
                            several weeks in our care. Nervous strays are
                            given time to settle, injured animals are given
                            time to heal, and kittens and puppies are given
                            time to grow.
                        </p>
                        <p className="text-text-muted">
                            None of this happens without our foster network,
                            volunteers who open their homes to pets who need
                            more one-on-one attention than a shelter setting
                            can offer.
                        </p>
                    </div>
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl md:order-2">
                        <img
                            src={familyWithCat2}
                            alt="A foster family caring for a cat"
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <div className="container mx-auto my-32 px-4">
                <SectionHeading
                    title="From Arrival to Ready"
                    subtitle="The steps every pet goes through before they're listed for adoption"
                />
                <StepList steps={careSteps} />
            </div>

            <div className="container mx-auto mb-32 px-4 text-center">
                <h2>Ready to Meet Them?</h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
                    Every pet on our adoption page has already been through
                    this journey and is ready for their next chapter
                </p>
                <Link to="/adopt" className="btn btn-primary btn-lg mt-6">
                    Browse Available Pets
                </Link>
            </div>
        </>
    )
}
