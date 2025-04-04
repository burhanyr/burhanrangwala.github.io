"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AnimatedGradientBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedGradientBackground({ children, className = "" }: AnimatedGradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const colors = [
      { r: 224, g: 239, b: 254 }, // Light blue
      { r: 186, g: 224, b: 253 }, // Soft blue
      { r: 124, g: 200, b: 251 }, // Medium blue
      { r: 54, g: 170, b: 245 }, // Bright blue
    ]

    const circles: any[] = []
    const circleCount = 15
    const maxRadius = Math.max(width, height) * 0.15
    const minRadius = Math.max(width, height) * 0.05

    for (let i = 0; i < circleCount; i++) {
      circles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: minRadius + Math.random() * (maxRadius - minRadius),
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: 0.1 + Math.random() * 0.2,
      })
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw background
      ctx.fillStyle = "rgba(240, 247, 255, 1)"
      ctx.fillRect(0, 0, width, height)

      // Draw circles
      circles.forEach((circle) => {
        // Update position
        circle.x += circle.vx
        circle.y += circle.vy

        // Bounce off edges
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > width) {
          circle.vx *= -1
        }
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > height) {
          circle.vy *= -1
        }

        // Draw gradient circle
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius)
        gradient.addColorStop(0, `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, ${circle.alpha})`)
        gradient.addColorStop(1, `rgba(${circle.color.r}, ${circle.color.g}, ${circle.color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
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

