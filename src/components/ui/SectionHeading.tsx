interface SectionHeadingProps {
    title: string
    subtitle: string
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
    <div className="mx-auto max-w-2xl text-center">
        <h2>{title}</h2>
        <p className="mt-4 text-lg text-text-muted">{subtitle}</p>
    </div>
)
