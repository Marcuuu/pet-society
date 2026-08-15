const exploreLinks = [
    { href: "/", label: "Home" },
    { href: "/adopt", label: "Adopt" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
]

const socialLinks = [
    {
        label: "Facebook",
        icon: (
            <path
                d="M12.5 6.667h-1.667c-.92 0-1.666.746-1.666 1.666v1.667H7.5v2.083h1.667V17.5h2.083v-5.417h1.667l.416-2.083h-2.083V8.333c0-.46.373-.833.833-.833h1.25V6.667Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
            />
        ),
    },
    {
        label: "Instagram",
        icon: (
            <>
                <rect
                    x="3.5"
                    y="3.5"
                    width="13"
                    height="13"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                />
                <circle
                    cx="10"
                    cy="10"
                    r="3.2"
                    stroke="currentColor"
                    strokeWidth="1.3"
                />
                <circle cx="13.6" cy="6.4" r="0.7" fill="currentColor" />
            </>
        ),
    },
    {
        label: "X",
        icon: (
            <path
                d="m4 4 12 12M16 4 4 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
            />
        ),
    },
]

export const Footer = () => {
    return (
        <footer className="w-full bg-secondary-dark text-white">
            <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-4">
                    <h3 className="flex items-baseline whitespace-nowrap text-white">
                        <span>P</span>
                        <span>et</span>
                        <span className="ml-[0.3em]">S</span>
                        <span>ociety</span>
                    </h3>
                    <p className="max-w-xs text-sm text-white/70">
                        Connecting loving homes with pets who need them, one
                        adoption at a time.
                    </p>
                    <div className="flex gap-3">
                        {socialLinks.map((social) => (
                            <button
                                key={social.label}
                                type="button"
                                aria-label={social.label}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="h-4 w-4"
                                    aria-hidden="true"
                                >
                                    {social.icon}
                                </svg>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h6 className="text-white">Explore</h6>
                    <ul className="flex flex-col gap-2 text-sm">
                        {exploreLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h6 className="text-white">Contact Us</h6>
                    <ul className="flex flex-col gap-2 text-sm text-white/70">
                        <li>201 Joo Chiat Rd, Singapore 427472</li>
                        <li>(65) 8123 4567</li>
                        <li>hello@petsociety.org</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row">
                    <p>
                        &copy; {new Date().getFullYear()} Pet Society. All
                        rights reserved.
                    </p>
                    <p>Made with care for pets everywhere.</p>
                </div>
            </div>
        </footer>
    )
}
