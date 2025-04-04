"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon?: LucideIcon
  className?: string
}

export function ProjectCard({ title, description, tags, icon: Icon, className = "" }: ProjectCardProps) {
  return (
    <motion.div
      className={cn("bg-white p-6 rounded-lg shadow-sm border border-blue-100 overflow-hidden", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-row items-center gap-4 mb-4">
        {Icon && (
          <div className="bg-blue-100 p-3 rounded-full">
            <Icon className="h-6 w-6 text-blue-700" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
        </div>
      </div>

      <p className="text-blue-600 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
            {tag}
          </Badge>
        ))}
      </div>
    </motion.div>
  )
}

