import { Link } from "react-router-dom"
import portraitCat from "../../assets/portrait_cat.webp"

export const SideSection = () => {
    return (
        <section className="w-full bg-primary-tint">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-128 md:h-auto">
                    <img
                        src={portraitCat}
                        alt="Close-up portrait of a cat waiting for a home"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-center gap-6 px-6 py-16 md:px-16 lg:px-24">
                    <h2 className="text-secondary-dark">
                        Every pet remembers who gave them a second chance
                    </h2>
                    <p className="text-lg text-text-muted">
                        Behind every wagging tail and quiet purr is a story of
                        waiting, hoping, and finally being chosen. When you
                        adopt, you're not just bringing home a pet, you're
                        giving them the family they always deserved
                    </p>
                    <Link to="/adopt" className="btn btn-primary w-fit">
                        Change a life today
                    </Link>
                </div>
            </div>
        </section>
    )
}
