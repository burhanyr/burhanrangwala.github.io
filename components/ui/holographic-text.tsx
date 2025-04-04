"use client"

import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HolographicTextProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
  glowColor?: string
}

export function HolographicText({
  children,
  className = "",
  as: Component = "h1",
  glowColor = "rgba(100, 150, 255, 0.8)",
}: HolographicTextProps) {
  return (
    <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
      {/* Text shadow for glow effect */}
      <Component
        className={cn("relative text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100", className)}
        style={{
          textShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor.replace("0.8", "0.4")}`,
        }}
      >
        {children}
      </Component>
    </motion.div>
  )
}

