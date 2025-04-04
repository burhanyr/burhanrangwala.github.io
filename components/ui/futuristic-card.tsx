"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FuturisticCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
  glowColor?: string
}

export function FuturisticCard({
  children,
  className = "",
  hoverEffect = true,
  glowColor = "rgba(100, 150, 255, 0.5)",
}: FuturisticCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={cn(
        "relative bg-gradient-to-br from-blue-900/80 to-blue-950/90 backdrop-blur-sm rounded-lg border border-blue-700/30 overflow-hidden",
        hoverEffect && "transition-all duration-300 hover:border-blue-500/50",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        boxShadow: isHovered
          ? `0 0 20px ${glowColor}, 0 0 30px ${glowColor.replace("0.5", "0.2")}`
          : `0 4px 20px rgba(0, 0, 30, 0.3)`,
      }}
    >
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

