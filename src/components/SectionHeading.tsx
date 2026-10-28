import { cn } from "@/lib/utils"

interface Props {
  eyebrow: string
  title: React.ReactNode
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: Props) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="text-4xl leading-[1.05] sm:text-5xl md:text-6xl">{title}</h2>
      {description && <p className="mt-5 text-base text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  )
}