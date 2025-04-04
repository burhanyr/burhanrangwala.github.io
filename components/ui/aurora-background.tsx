"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AuroraBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function AuroraBackground({ children, className = "" }: AuroraBackgroundProps) {
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
      "rgba(180, 180, 255, 0.8)",
      "rgba(200, 200, 255, 0.8)",
      "rgba(220, 220, 255, 0.8)",
      "rgba(240, 240, 255, 0.8)",
      "rgba(255, 255, 255, 0.8)",
    ]

    // Aurora properties
    const auroras: any[] = []
    const auroraCount = 3
    const auroraColors = [
      { r: 100, g: 100, b: 255 }, // Blue
      { r: 130, g: 80, b: 255 }, // Indigo
      { r: 180, g: 100, b: 255 }, // Violet
      { r: 80, g: 200, b: 170 }, // Teal
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

    // Initialize auroras
    for (let i = 0; i < auroraCount; i++) {
      auroras.push({
        baseY: height * (0.3 + Math.random() * 0.3), // Position in upper half of screen
        amplitude: 50 + Math.random() * 100,
        wavelength: 200 + Math.random() * 400,
        speed: 0.1 + Math.random() * 0.3,
        thickness: 100 + Math.random() * 150,
        color: auroraColors[Math.floor(Math.random() * auroraColors.length)],
        alpha: 0.15 + Math.random() * 0.2,
        offset: Math.random() * 1000,
      })
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight

      // Update aurora positions on resize
      auroras.forEach((aurora) => {
        aurora.baseY = height * (0.3 + Math.random() * 0.3)
      })
    }

    window.addEventListener("resize", handleResize)

    const animate = () => {
      // Create a dark blue to deep indigo gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, "rgba(10, 10, 40, 1)")
      gradient.addColorStop(0.5, "rgba(20, 10, 60, 1)")
      gradient.addColorStop(1, "rgba(5, 5, 20, 1)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw auroras
      auroras.forEach((aurora) => {
        aurora.offset += aurora.speed

        // Create gradient for aurora
        const gradient = ctx.createLinearGradient(
          0,
          aurora.baseY - aurora.thickness,
          0,
          aurora.baseY + aurora.thickness,
        )
        gradient.addColorStop(0, `rgba(${aurora.color.r}, ${aurora.color.g}, ${aurora.color.b}, 0)`)
        gradient.addColorStop(0.5, `rgba(${aurora.color.r}, ${aurora.color.g}, ${aurora.color.b}, ${aurora.alpha})`)
        gradient.addColorStop(1, `rgba(${aurora.color.r}, ${aurora.color.g}, ${aurora.color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()

        // Start at the left edge
        ctx.moveTo(0, aurora.baseY + Math.sin(aurora.offset) * aurora.amplitude)

        // Draw the wavy line
        for (let x = 0; x < width; x += 10) {
          const y = aurora.baseY + Math.sin(x / aurora.wavelength + aurora.offset) * aurora.amplitude
          ctx.lineTo(x, y)
        }

        // Complete the shape
        ctx.lineTo(width, aurora.baseY + Math.sin(width / aurora.wavelength + aurora.offset) * aurora.amplitude)
        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()
        ctx.fill()
      })

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

