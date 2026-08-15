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
            <div className="mx-auto max-w-2xl text-center">
                <h2>How Adoption Works</h2>
                <p className="mt-4 text-lg text-text-muted">
                    From browsing to bringing them home, here's what to expect
                </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, index) => (
                    <div
                        key={step.number}
                        className="relative flex flex-col items-center gap-4 px-4 text-center"
                    >
                        {index < steps.length - 1 && (
                            <div className="absolute top-7 left-1/2 hidden h-px w-full bg-border lg:block" />
                        )}
                        <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                            {step.number}
                        </span>
                        <div>
                            <h4>{step.title}</h4>
                            <p className="text-sm text-text-muted mt-2">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
