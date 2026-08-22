interface Step {
    number: number
    title: string
    description: string
}

interface StepListProps {
    steps: Step[]
}

export const StepList = ({ steps }: StepListProps) => (
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
                    <p className="mt-2 text-sm text-text-muted">
                        {step.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
)
