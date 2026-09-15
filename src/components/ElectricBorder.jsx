import { useCallback, useEffect, useRef } from 'react'
import './ElectricBorder.css'

export default function ElectricBorder({ children, color = '#5227FF', speed = 1, chaos = 0.12, borderRadius = 24, className, style }) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const animationRef = useRef(null)
  const timeRef = useRef(0)
  const lastFrameTimeRef = useRef(0)

  const random = useCallback((value) => (Math.sin(value * 12.9898) * 43758.5453) % 1, [])
  const noise2D = useCallback((x, y) => {
    const i = Math.floor(x)
    const j = Math.floor(y)
    const fx = x - i
    const fy = y - j
    const a = random(i + j * 57)
    const b = random(i + 1 + j * 57)
    const c = random(i + (j + 1) * 57)
    const d = random(i + 1 + (j + 1) * 57)
    const ux = fx * fx * (3 - 2 * fx)
    const uy = fy * fy * (3 - 2 * fy)
    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy
  }, [random])
  const octavedNoise = useCallback((x, time, seed) => {
    let value = 0
    let amplitude = chaos
    let frequency = 10
    for (let octave = 0; octave < 10; octave += 1) {
      value += amplitude * noise2D(frequency * x + seed * 100, time * frequency * 0.3)
      frequency *= 1.6
      amplitude *= 0.7
    }
    return value
  }, [chaos, noise2D])
  const getRoundedRectPoint = useCallback((t, left, top, width, height, radius) => {
    const straightWidth = width - 2 * radius
    const straightHeight = height - 2 * radius
    const cornerArc = (Math.PI * radius) / 2
    const distance = t * (2 * straightWidth + 2 * straightHeight + 4 * cornerArc)
    let accumulated = 0
    if (distance <= straightWidth) return { x: left + radius + distance, y: top }
    accumulated += straightWidth
    if (distance <= accumulated + cornerArc) {
      const angle = -Math.PI / 2 + ((distance - accumulated) / cornerArc) * (Math.PI / 2)
      return { x: left + width - radius + radius * Math.cos(angle), y: top + radius + radius * Math.sin(angle) }
    }
    accumulated += cornerArc
    if (distance <= accumulated + straightHeight) return { x: left + width, y: top + radius + distance - accumulated }
    accumulated += straightHeight
    if (distance <= accumulated + cornerArc) {
      const angle = ((distance - accumulated) / cornerArc) * (Math.PI / 2)
      return { x: left + width - radius + radius * Math.cos(angle), y: top + height - radius + radius * Math.sin(angle) }
    }
    accumulated += cornerArc
    if (distance <= accumulated + straightWidth) return { x: left + width - radius - (distance - accumulated), y: top + height }
    accumulated += straightWidth
    if (distance <= accumulated + cornerArc) {
      const angle = Math.PI / 2 + ((distance - accumulated) / cornerArc) * (Math.PI / 2)
      return { x: left + radius + radius * Math.cos(angle), y: top + height - radius + radius * Math.sin(angle) }
    }
    accumulated += cornerArc
    if (distance <= accumulated + straightHeight) return { x: left, y: top + height - radius - (distance - accumulated) }
    const angle = Math.PI + ((distance - accumulated - straightHeight) / cornerArc) * (Math.PI / 2)
    return { x: left + radius + radius * Math.cos(angle), y: top + radius + radius * Math.sin(angle) }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return undefined
    const context = canvas.getContext('2d')
    if (!context) return undefined
    const borderOffset = 60
    let width = 0
    let height = 0
    let lastDpr = 0
    const updateSize = () => {
      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width + borderOffset * 2
      height = rect.height + borderOffset * 2
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      lastDpr = dpr
    }
    const draw = (currentTime) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      if (dpr !== lastDpr) updateSize()
      timeRef.current += ((currentTime - lastFrameTimeRef.current) / 1000) * speed
      lastFrameTimeRef.current = currentTime
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      context.clearRect(0, 0, width, height)
      context.strokeStyle = color
      context.lineWidth = 1
      context.lineCap = 'round'
      context.lineJoin = 'round'
      const left = borderOffset
      const top = borderOffset
      const borderWidth = width - borderOffset * 2
      const borderHeight = height - borderOffset * 2
      const radius = Math.min(borderRadius, borderWidth / 2, borderHeight / 2)
      const sampleCount = Math.max(1, Math.floor((2 * (borderWidth + borderHeight) + 2 * Math.PI * radius) / 2))
      context.beginPath()
      for (let i = 0; i <= sampleCount; i += 1) {
        const progress = i / sampleCount
        const point = getRoundedRectPoint(progress, left, top, borderWidth, borderHeight, radius)
        const x = point.x + octavedNoise(progress * 8, timeRef.current, 0) * 60
        const y = point.y + octavedNoise(progress * 8, timeRef.current, 1) * 60
        if (i === 0) context.moveTo(x, y)
        else context.lineTo(x, y)
      }
      context.closePath()
      context.stroke()
      animationRef.current = requestAnimationFrame(draw)
    }
    const resizeObserver = new ResizeObserver(updateSize)
    resizeObserver.observe(container)
    updateSize()
    animationRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animationRef.current)
      resizeObserver.disconnect()
    }
  }, [borderRadius, color, getRoundedRectPoint, octavedNoise, speed])

  return (
    <div ref={containerRef} className={`electric-border ${className ?? ''}`} style={{ '--electric-border-color': color, borderRadius, ...style }}>
      <div className="eb-canvas-container"><canvas ref={canvasRef} className="eb-canvas" aria-hidden="true" /></div>
      <div className="eb-layers"><div className="eb-glow-1" /><div className="eb-glow-2" /><div className="eb-background-glow" /></div>
      <div className="eb-content">{children}</div>
    </div>
  )
}
