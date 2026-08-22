import type { ReactNode } from "react"

interface IconBadgeProps {
    icon: ReactNode
    size?: "sm" | "md"
}

const sizeClasses = {
    sm: { wrapper: "h-12 w-12", icon: "h-6 w-6" },
    md: { wrapper: "h-14 w-14", icon: "h-7 w-7" },
}

export const IconBadge = ({ icon, size = "md" }: IconBadgeProps) => {
    const { wrapper, icon: iconSize } = sizeClasses[size]

    return (
        <span
            className={`flex ${wrapper} shrink-0 items-center justify-center rounded-full bg-primary-tint text-primary`}
        >
            <svg
                viewBox="0 0 20 20"
                fill="none"
                className={iconSize}
                aria-hidden="true"
            >
                {icon}
            </svg>
        </span>
    )
}
