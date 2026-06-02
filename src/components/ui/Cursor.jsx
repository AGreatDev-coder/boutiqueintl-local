import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'translate(-50%,-50%) scale(2.5)'
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.6)'
    }
    const onLeaveLink = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })
    const raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', width: 8, height: 8,
          background: '#00D9FF', borderRadius: '50%',
          pointerEvents: 'none', zIndex: 99999,
          transform: 'translate(-50%,-50%)',
          transition: 'transform 0.2s ease, background 0.2s',
          mixBlendMode: 'multiply',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', width: 36, height: 36,
          border: '1.5px solid rgba(0,217,255,0.6)',
          borderRadius: '50%',
          pointerEvents: 'none', zIndex: 99998,
          transform: 'translate(-50%,-50%)',
          transition: 'transform 0.3s ease',
        }}
      />
    </>
  )
}
