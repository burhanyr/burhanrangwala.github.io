import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface SkillBadgeProps {
  name: string
  icon?: LucideIcon
  className?: string
}

export function SkillBadge({ name, icon: Icon, className = "" }: SkillBadgeProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg text-center border border-blue-100 transition-all duration-300 hover:shadow-md hover:border-blue-200 hover:from-blue-100 hover:to-blue-200",
        className,
      )}
    >
      {Icon && <Icon className="h-5 w-5 mx-auto mb-2 text-blue-700" />}
      <p className="text-blue-800 font-medium">{name}</p>
    </div>
  )
}

