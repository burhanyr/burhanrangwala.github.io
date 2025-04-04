"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface GalaxyBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function GalaxyBackground({ children, className = "" }: GalaxyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Star properties
    const stars: any[] = []
    const starCount = 200
    const starColors = [
      "rgba(64, 116, 224, 0.8)",
      "rgba(108, 142, 235, 0.8)",
      "rgba(150, 177, 255, 0.8)",
      "rgba(200, 216, 255, 0.8)",
      "rgba(255, 255, 255, 0.8)",
    ]

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        speed: Math.random() * 0.2,
        brightness: Math.random(),
        blinkSpeed: 0.01 + Math.random() * 0.02,
        blinkDirection: Math.random() > 0.5 ? 1 : -1,
      })
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    const animate = () => {
      // Create a dark blue to black gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, "rgba(10, 15, 50, 1)")
      gradient.addColorStop(1, "rgba(5, 5, 20, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw stars
      stars.forEach((star) => {
        // Update star position (parallax effect)
        star.y += star.speed
        if (star.y > height) {
          star.y = 0
          star.x = Math.random() * width
        }

        // Blinking effect
        star.brightness += star.blinkSpeed * star.blinkDirection
        if (star.brightness > 1 || star.brightness < 0.3) {
          star.blinkDirection *= -1
          // Ensure brightness stays within bounds
          star.brightness = Math.max(0.3, Math.min(1, star.brightness))
        }

        // Ensure radius is always positive
        const radius = Math.max(0.1, star.radius * star.brightness)

        // Draw star
        ctx.fillStyle = star.color.replace("0.8", star.brightness.toString())
        ctx.beginPath()
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

