'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center pointer-events-none">
      {/* Main loading container */}
      <div className="relative w-20 h-20">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin" />

        {/* Middle rotating ring */}
        <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-secondary border-l-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />

        {/* Inner pulsing circle */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 animate-pulse" />

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>

      {/* Loading text */}
      <div className="absolute bottom-20 text-center">
        <p className="text-sm text-muted-foreground font-medium">Loading...</p>
      </div>
    </div>
  )
}
