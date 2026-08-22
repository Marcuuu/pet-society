import { useEffect, useRef, useState } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { useAuth } from "@/lib/auth"

const routes = [
    {
        url: "/",
        name: "Home",
    },
    {
        url: "/adopt",
        name: "Adopt",
    },
    {
        url: "/pet-care",
        name: "Pet Care",
    },
    {
        url: "/release-a-pet",
        name: "Release",
    },
    {
        url: "/services",
        name: "Services",
    },
    {
        url: "/about",
        name: "About",
    },
]

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLogoHovered, setIsLogoHovered] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)
    const { username, isLoggedIn, logout } = useAuth()
    const location = useLocation()

    const condensed = isScrolled && !isLogoHovered

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location.pathname])

    useEffect(() => {
        const nav = navRef.current
        if (!nav) return

        const updateHeight = () => {
            document.documentElement.style.setProperty(
                "--nav-height",
                `${nav.offsetHeight}px`,
            )
        }

        updateHeight()
        const observer = new ResizeObserver(updateHeight)
        observer.observe(nav)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={navRef}
            className={`bg-white sticky top-0 transition-shadow duration-300 ease-in-out z-20 ${isScrolled ? "shadow-lg" : ""}`}
        >
            <nav
                className={`container mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 px-4 transition-padding duration-300 ease-in-out ${isScrolled ? "py-4" : "py-8"}`}
            >
                <Link to="/" className="text-black! no-underline!">
                    <h3
                        className="flex w-[15ch] shrink-0 items-baseline whitespace-nowrap"
                        onMouseEnter={() => setIsLogoHovered(true)}
                        onMouseLeave={() => setIsLogoHovered(false)}
                    >
                        <span>P</span>
                        <span
                            className={`inline-block overflow-hidden transition-all duration-500 ease-in-out ${
                                condensed
                                    ? "max-w-0 -translate-x-2 opacity-0"
                                    : "max-w-[3ch] translate-x-0 opacity-100"
                            }`}
                        >
                            et
                        </span>
                        <span
                            className={`transition-all duration-500 ease-in-out ${
                                condensed ? "ml-0" : "ml-[0.3em]"
                            }`}
                        >
                            S
                        </span>
                        <span
                            className={`inline-block overflow-hidden transition-all duration-500 ease-in-out ${
                                condensed
                                    ? "max-w-0 -translate-x-2 opacity-0"
                                    : "max-w-[7ch] translate-x-0 opacity-100"
                            }`}
                        >
                            ociety
                        </span>
                        <span
                            className={`inline-block overflow-hidden transition-all duration-500 ease-in-out ${
                                condensed
                                    ? "max-w-[13ch] translate-x-0 opacity-100 ml-[0.3em] delay-150"
                                    : "max-w-0 translate-x-2 opacity-0 ml-0"
                            }`}
                        >
                            I Love Pets
                        </span>
                    </h3>
                </Link>
                <ul className="hidden gap-6 md:flex md:justify-center">
                    {routes.map((route) => (
                        <li key={route.name}>
                            <NavLink
                                to={route.url}
                                end={route.url === "/"}
                                className={({ isActive }) =>
                                    !isActive ? "text-black!" : ""
                                }
                            >
                                {route.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-self-end gap-3">
                    <div className="hidden items-center gap-3 md:flex">
                        {isLoggedIn ? (
                            <>
                                <span className="text-sm text-text-muted whitespace-nowrap">
                                    Hi, {username}
                                </span>
                                <button
                                    type="button"
                                    onClick={logout}
                                    className="btn btn-outline btn-sm"
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <Link to="/login" className="btn btn-secondary">
                                Log In
                            </Link>
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() =>
                            setIsMobileMenuOpen((open) => !open)
                        }
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-black transition-colors hover:bg-bg md:hidden"
                    >
                        <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            className="h-5 w-5"
                            aria-hidden="true"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    d="m5 5 10 10M15 5 5 15"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />
                            ) : (
                                <path
                                    d="M3 6h14M3 10h14M3 14h14"
                                    stroke="currentColor"
                                    strokeWidth="1.6"
                                    strokeLinecap="round"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="border-t border-border px-4 py-4 md:hidden">
                    <ul className="flex flex-col gap-1">
                        {routes.map((route) => (
                            <li key={route.name}>
                                <NavLink
                                    to={route.url}
                                    end={route.url === "/"}
                                    className={({ isActive }) =>
                                        `block rounded-lg px-3 py-2.5 text-black! no-underline! ${
                                            isActive
                                                ? "bg-bg font-semibold"
                                                : ""
                                        }`
                                    }
                                >
                                    {route.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 border-t border-border pt-4">
                        {isLoggedIn ? (
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-sm text-text-muted">
                                    Hi, {username}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        logout()
                                        setIsMobileMenuOpen(false)
                                    }}
                                    className="btn btn-outline btn-sm"
                                >
                                    Log Out
                                </button>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="btn btn-secondary w-full"
                            >
                                Log In
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
