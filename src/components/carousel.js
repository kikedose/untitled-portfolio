'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel({ images, autoPlay = true, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[480px] w-[480px]">
      {/* Current image */}
      {images.length > 0 && (
        <div className="relative h-full w-full">
          <Image
            src={images[currentIndex] || '/placeholder.svg'}
            alt={`Carousel image ${currentIndex + 1}`}
            width={480}
            height={480}
            priority={currentIndex === 0}
            className="object-cover"
            quality={85}
          />
        </div>
      )}

      {/* Navigation buttons */}
      {images.length > 1 && (
        <div className="absolute top-2 left-2 flex flex-row gap-1">
          <button
            className="h-8 w-8 rounded-md bg-zinc-950 text-white"
            onClick={goToPrevious}
          >
            <ChevronLeft className="mx-auto h-5 w-5" />
          </button>

          <button
            className="h-8 w-8 rounded-md bg-zinc-950 text-white"
            onClick={goToNext}
          >
            <ChevronRight className="mx-auto h-5 w-5" />
          </button>
        </div>
      )}

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute right-0 bottom-3 left-0 flex justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
