import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({ title, subtitle, centered = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-8", centered && "text-center", className)}>
      <h2 className="text-3xl font-bold text-blue-900 relative inline-block">
        {title}
        <span className="absolute -bottom-1 left-0 w-2/3 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></span>
      </h2>
      {subtitle && <p className="mt-3 text-blue-600 max-w-2xl">{subtitle}</p>}
    </div>
  )
}

