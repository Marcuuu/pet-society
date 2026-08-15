import { useEffect, useRef, useState } from "react"

const stats = [
    { value: 165, label: "Pets adopted" },
    { value: 300, label: "Pets in our care" },
]

interface AnimatedNumberProps {
    value: number
    start: boolean
    duration?: number
}

const AnimatedNumber = ({
    value,
    start,
    duration = 1500,
}: AnimatedNumberProps) => {
    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (!start) return

        let animationFrame: number
        const startTime = performance.now()

        const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplayValue(Math.round(eased * value))
            if (progress < 1) animationFrame = requestAnimationFrame(tick)
        }

        animationFrame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(animationFrame)
    }, [start, value, duration])

    return <>{displayValue}</>
}

export const StatsBar = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 },
        )

        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="w-full bg-secondary py-16 text-white"
        >
            <div className="container mx-auto flex flex-col items-center gap-10 px-4 text-center">
                <h2 className="text-white">We Care, A Lot.</h2>
                <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center gap-1"
                        >
                            <span className="text-4xl font-bold text-accent-gold sm:text-5xl">
                                <AnimatedNumber
                                    value={stat.value}
                                    start={isVisible}
                                />
                            </span>
                            <span className="text-sm tracking-wide text-white/80 uppercase">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
