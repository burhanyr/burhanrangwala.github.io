"use client"

import { useEffect, useRef } from "react"

interface FloatingParticlesProps {
  count?: number
  className?: string
}

export function FloatingParticles({ count = 30, className = "" }: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Particle properties with indigo and violet colors
    const particles: any[] = []
    const particleColors = [
      { r: 150, g: 120, b: 255, a: 0.3 }, // Indigo
      { r: 180, g: 130, b: 255, a: 0.3 }, // Violet
      { r: 130, g: 130, b: 255, a: 0.3 }, // Blue-indigo
      { r: 200, g: 150, b: 255, a: 0.3 }, // Light violet
    ]

    // Initialize particles
    for (let i = 0; i < count; i++) {
      const color = particleColors[Math.floor(Math.random() * particleColors.length)]
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.max(1, 1 + Math.random() * 3),
        color: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        // Some particles will have a subtle pulsing effect
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulseDirection: Math.random() > 0.5 ? 1 : -1,
        pulseFactor: 0.7 + Math.random() * 0.3,
      })
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw and update particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = width
        if (particle.x > width) particle.x = 0
        if (particle.y < 0) particle.y = height
        if (particle.y > height) particle.y = 0

        // Update pulse effect
        particle.pulseFactor += particle.pulseSpeed * particle.pulseDirection
        if (particle.pulseFactor > 1 || particle.pulseFactor < 0.7) {
          particle.pulseDirection *= -1
          particle.pulseFactor = Math.max(0.7, Math.min(1, particle.pulseFactor))
        }

        // Ensure size is always positive
        const size = Math.max(0.1, particle.size * particle.pulseFactor)

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [count])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />
}

