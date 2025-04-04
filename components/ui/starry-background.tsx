"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface StarryBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function StarryBackground({ children, className = "" }: StarryBackgroundProps) {
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
    const starCount = 300

    // Colored star palette with indigo and violet hues
    const starColors = [
      { r: 180, g: 180, b: 255 }, // Light blue
      { r: 150, g: 120, b: 255 }, // Indigo
      { r: 180, g: 130, b: 255 }, // Violet
      { r: 200, g: 150, b: 255 }, // Light violet
      { r: 255, g: 255, b: 255 }, // White
      { r: 220, g: 180, b: 255 }, // Pale violet
      { r: 130, g: 130, b: 255 }, // Blue-indigo
    ]

    // Initialize stars with different properties
    for (let i = 0; i < starCount; i++) {
      const color = starColors[Math.floor(Math.random() * starColors.length)]
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 0.5 + Math.random() * 2,
        color: color,
        brightness: 0.3 + Math.random() * 0.7,
        maxBrightness: 0.7 + Math.random() * 0.3,
        minBrightness: 0.1 + Math.random() * 0.3,
        blinkSpeed: 0.002 + Math.random() * 0.008,
        blinkDirection: Math.random() > 0.5 ? 1 : -1,
        // Some stars will have a subtle pulsing glow
        hasGlow: Math.random() > 0.7,
        glowSize: 2 + Math.random() * 4,
        glowOpacity: 0.1 + Math.random() * 0.2,
      })
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    const animate = () => {
      // Create a deep indigo to violet gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, "rgba(15, 10, 60, 1)") // Deep indigo
      gradient.addColorStop(0.5, "rgba(30, 15, 80, 1)") // Rich indigo-violet
      gradient.addColorStop(1, "rgba(20, 10, 40, 1)") // Dark indigo
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw stars
      stars.forEach((star) => {
        // Update star twinkling
        star.brightness += star.blinkSpeed * star.blinkDirection
        if (star.brightness > star.maxBrightness || star.brightness < star.minBrightness) {
          star.blinkDirection *= -1
          // Ensure brightness stays within bounds
          star.brightness = Math.max(star.minBrightness, Math.min(star.maxBrightness, star.brightness))
        }

        // Ensure radius is always positive
        const radius = Math.max(0.1, star.radius * star.brightness)

        // Draw glow for some stars
        if (star.hasGlow) {
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.glowSize * star.brightness)
          gradient.addColorStop(
            0,
            `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${star.glowOpacity * star.brightness})`,
          )
          gradient.addColorStop(1, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0)`)

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.glowSize * star.brightness, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw star
        ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${star.brightness})`
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

