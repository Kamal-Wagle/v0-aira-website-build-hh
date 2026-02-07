'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CarouselSliderProps {
  items: React.ReactNode[]
  autoPlay?: boolean
  autoPlayInterval?: number
  itemsPerView?: number
}

export function CarouselSlider({ 
  items, 
  autoPlay = true, 
  autoPlayInterval = 4000,
  itemsPerView = 4 
}: CarouselSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlay, items.length, autoPlayInterval])

  const goToPrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const getVisibleItems = () => {
    const visible = []
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(items[(currentIndex + i) % items.length])
    }
    return visible
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {getVisibleItems().map((item, index) => (
            <div
              key={index}
              className="animate-in fade-in duration-500"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlay(false)
                setCurrentIndex(index)
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted-foreground w-2 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </Button>
      </div>

      {/* Auto-play Indicator */}
      <div className="text-center mt-4 text-xs text-muted-foreground">
        {isAutoPlay && 'Auto-playing...'}
      </div>
    </div>
  )
}
