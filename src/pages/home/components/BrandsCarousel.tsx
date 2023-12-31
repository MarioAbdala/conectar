import React, { useState, useEffect, useRef } from 'react';
import { brands } from '../../../data';
import { Brand } from '../../../interfaces';
import './BrandsCarousel.css';

export const BrandsCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const isSmallScreen = window.innerWidth <= 768;
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && slideRef.current) {
        const nextSlide = (currentSlide + 1) % (brands.length + (isSmallScreen ? 2 : 4));
        setCurrentSlide(nextSlide);
        slideRef.current.style.transition = 'transform 0.5s ease-in-out';
        if (nextSlide < brands.length) {
          slideRef.current.style.transform = `translateX(-${nextSlide * (isSmallScreen ? 50 : 25)}%)`;
        } else {
          slideRef.current.style.transform = `translateX(-${brands.length * (isSmallScreen ? 50 : 25)}%)`;
        }
        if (nextSlide === brands.length) {
          setTimeout(() => {
            slideRef.current!.style.transition = 'none';
            slideRef.current!.style.transform = 'translateX(0)';
            setCurrentSlide(0);
            setTimeout(() => {
              slideRef.current!.style.transition = 'transform 0.5s ease-in-out';
            }, 2500);
          }, 500);
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentSlide, isPaused, isSmallScreen]);
  const dummyBrands: Brand[] = brands.slice(0, isSmallScreen ? 2 : 4);
  return (
    <div
      className="brands-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="brands-slider" ref={slideRef}>
        {brands.map((brand) => (
          <div key={brand.id} className="brand-slide">
            <img src={brand.imageUrl} alt={brand.altText} />
          </div>
        ))}
        {dummyBrands.map((brand) => (
          <div key={`dummy-${brand.id}`} className="brand-slide">
            <img src={brand.imageUrl} alt={brand.altText} />
          </div>
        ))}
      </div>
    </div>
  );
};