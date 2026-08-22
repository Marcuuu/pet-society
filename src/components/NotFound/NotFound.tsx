import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <div className="container mx-auto mt-16 mb-32 flex flex-col items-center px-4 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-tint text-primary">
                <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-10 w-10"
                    aria-hidden="true"
                >
                    <circle
                        cx="10"
                        cy="12"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                    />
                    <circle
                        cx="5.5"
                        cy="6.5"
                        r="1.6"
                        stroke="currentColor"
                        strokeWidth="1.4"
                    />
                    <circle
                        cx="14.5"
                        cy="6.5"
                        r="1.6"
                        stroke="currentColor"
                        strokeWidth="1.4"
                    />
                    <circle
                        cx="9"
                        cy="4"
                        r="1.4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                    />
                </svg>
            </span>
            <p className="mt-6 text-6xl font-bold text-secondary-dark">404</p>
            <h2 className="mt-4">Looks like this pet wandered off</h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-text-muted">
                We couldn't find the page you were looking for. It may have
                been moved, renamed, or never existed in the first place.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/" className="btn btn-primary">
                    Back to Home
                </Link>
                <Link to="/adopt" className="btn btn-outline">
                    Browse Pets for Adoption
                </Link>
            </div>
        </div>
    )
}
