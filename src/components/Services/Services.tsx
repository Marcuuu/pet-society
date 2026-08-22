import { Link } from "react-router-dom"
import { IconBadge } from "@/components/ui/IconBadge"

const facilities = [
    {
        title: "Adoption Center",
        description:
            "A welcoming space where you can meet available pets, spend time with them in our meet-and-greet rooms, and talk through your adoption with our team",
        icon: (
            <path
                d="M4 10.5 10 5l6 5.5M5.5 9v6.5h9V9M8 15.5v-3.8h4v3.8"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
    },
    {
        title: "Veterinary Clinic",
        description:
            "An on-site clinic where every pet receives health checks, vaccinations, and treatment from our vet partners before and after adoption",
        icon: (
            <path
                d="M10 4v12M4 10h12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        ),
    },
    {
        title: "Grooming Suite",
        description:
            "Regular baths, brushing, and coat care to keep every animal in our care comfortable and looking their best",
        icon: (
            <>
                <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="7" cy="14" r="2" stroke="currentColor" strokeWidth="1.4" />
                <path
                    d="m8.4 7.4 7.6 7.6M8.4 12.6l7.6-7.6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                />
            </>
        ),
    },
    {
        title: "Foster & Boarding",
        description:
            "Comfortable kennels and cattery rooms for pets waiting on a home, plus a network of foster families for those who need extra care",
        icon: (
            <>
                <rect
                    x="3.5"
                    y="9"
                    width="13"
                    height="6"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                />
                <path
                    d="M4.5 9V7a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 15.5 7v2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                />
            </>
        ),
    },
    {
        title: "Behavior & Training",
        description:
            "One-on-one sessions with our behaviorists to help nervous or under-socialized pets build confidence before they meet adopters",
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
        title: "Community Outreach",
        description:
            "Our outreach van runs sterilization drives, stray feeding routes, and adoption pop-ups across the island",
        icon: (
            <>
                <rect
                    x="2.5"
                    y="7"
                    width="9"
                    height="6.5"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.4"
                />
                <path
                    d="M11.5 9h3l2 2.5v2h-5V9Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                />
                <circle cx="6" cy="14.5" r="1.4" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="13.5" cy="14.5" r="1.4" stroke="currentColor" strokeWidth="1.2" />
            </>
        ),
    },
]

export const Services = () => {
    return (
        <>
            <div className="container mx-auto mt-16 mb-32 px-4 text-center">
                <h1 className="text-secondary-dark">Our Facilities</h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-text-muted">
                    Everything under our roof exists to keep pets healthy,
                    comfortable, and ready for the home that's waiting for
                    them
                </p>
            </div>

            <div className="container mx-auto mb-32 px-4">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {facilities.map((facility) => (
                        <div
                            key={facility.title}
                            className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                        >
                            <IconBadge icon={facility.icon} />
                            <h4>{facility.title}</h4>
                            <p className="text-sm text-text-muted">
                                {facility.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <section className="w-full bg-secondary py-16 text-white">
                <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:px-16">
                    <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left">
                        <h2 className="text-white">Visit Us</h2>
                        <p className="max-w-xl text-white/80">
                            Our doors are open to anyone hoping to meet a
                            future companion, drop off a donation, or simply
                            learn more about what we do
                        </p>
                        <div className="mt-2 flex flex-col gap-1 text-white/90">
                            <span>201 Joo Chiat Rd, Singapore 427472</span>
                            <span>Tue &ndash; Sun, 10am &ndash; 6pm</span>
                            <span>(65) 8123 4567</span>
                        </div>
                        <Link to="/adopt" className="btn btn-primary mt-4">
                            Plan Your Visit
                        </Link>
                    </div>
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
                        <iframe
                            title="Pet Society location on Google Maps"
                            src="https://www.google.com/maps?q=201+Joo+Chiat+Rd,+Singapore+427472&output=embed"
                            className="h-full w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
