import { useEffect, useRef, useState } from "react"

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isLogoHovered, setIsLogoHovered] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)

    const condensed = isScrolled && !isLogoHovered

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0)
        handleScroll()
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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
                className={`container mx-auto grid grid-cols-3 items-center px-4 transition-padding duration-300 ease-in-out ${isScrolled ? "py-4" : "py-8"}`}
            >
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
                <ul className="flex justify-center gap-6">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/adopt">Adopt</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
                <a href="/login" className="btn btn-secondary justify-self-end">
                    Log In
                </a>
            </nav>
        </div>
    )
}
