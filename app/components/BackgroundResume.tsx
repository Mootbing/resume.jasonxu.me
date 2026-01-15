'use client'

import { useEffect, useState } from 'react'

export default function BackgroundResume() {
  const [topPosition, setTopPosition] = useState('25vh')

  useEffect(() => {
    const handleScroll = () => {
      // Start at 25vh and increase to 50vh as you scroll
      const scrollProgress = Math.min(window.scrollY / 500, 1) // Full movement within 500px of scroll
      const newTop = 25 + scrollProgress * 25 // Goes from 25vh to 50vh
      setTopPosition(`${newTop}vh`)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div 
      style={{
        position: 'fixed',
        top: topPosition,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(150px, 15vw, 300px)',
        fontWeight: 900,
        color: '#000',
        zIndex: -1,
        whiteSpace: 'nowrap',
        opacity: 0.1,
        pointerEvents: 'none',
        transition: 'top 0.1s ease'
      }}
    >
      RESUME
    </div>
  )
}

