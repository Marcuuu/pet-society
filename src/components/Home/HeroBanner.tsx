import heroImage from "../../assets/hero.jpg"

export const HeroBanner = () => {
    return (
        <div className="relative">
            <img
                src={heroImage}
                alt="Dog in sheets"
                className="w-full object-cover"
                style={{ height: "calc(100vh - var(--nav-height, 0px))" }}
            />
            <div className="absolute top-1/7 md:top-1/9 left-1/2 w-full max-w-2xl -translate-x-1/2 px-4 text-center text-white">
                <h1 className="text-secondary-dark">
                    Every pet deserves a second first day
                </h1>
                <p className="text-lg text-secondary mt-4">
                    Find your perfect companion, meet them in person, and give
                    them the love they have always dream of
                </p>
                <a href="/adopt" className="btn btn-primary btn-lg mt-6">
                    Find your pet
                </a>
            </div>
        </div>
    )
}
