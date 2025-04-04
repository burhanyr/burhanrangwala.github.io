"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface HobbyCardProps {
  name: string
  image: string
  className?: string
}

export function HobbyCard({ name, image, className = "" }: HobbyCardProps) {
  return (
    <motion.div
      className={cn("relative overflow-hidden rounded-lg h-48 group cursor-pointer", className)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={image || "/placeholder.svg"}
        alt={name}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent flex items-end p-4 opacity-100">
        <h3 className="text-white font-medium text-lg">{name}</h3>
      </div>
    </motion.div>
  )
}

