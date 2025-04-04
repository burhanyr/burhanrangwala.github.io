"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProfileImageProps {
  src: string
  alt: string
  size?: number
  className?: string
}

export function ProfileImage({ src, alt, size = 120, className = "" }: ProfileImageProps) {
  return (
    <motion.div
      className={cn("relative rounded-full overflow-hidden", className)}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: `0 0 20px rgba(100, 150, 255, 0.8), 0 0 40px rgba(100, 150, 255, 0.4)`,
          zIndex: 1,
        }}
      />

      {/* Rotating border effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(from 0deg, transparent, rgba(100, 150, 255, 0.8), rgba(150, 200, 255, 0.8), transparent)`,
            borderRadius: "50%",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Image container with border */}
      <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-blue-300/30 z-10">
        <img src={src || "/placeholder.svg"} alt={alt} className="object-cover w-full h-full" />
      </div>
    </motion.div>
  )
}

