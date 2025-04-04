"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TimelineItemProps {
  children: React.ReactNode
  className?: string
  isLast?: boolean
}

export function TimelineItem({ children, className = "", isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      className={cn("relative pl-8 pb-10", !isLast && "border-l border-blue-200", className)}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -left-2.5 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-400 z-10"></div>
      {children}
    </motion.div>
  )
}

