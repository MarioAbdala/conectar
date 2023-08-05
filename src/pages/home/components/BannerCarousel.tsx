import React, { useEffect, useState } from 'react';
import { BannerCarouselProps } from '../../../interfaces';
import './BannerCarousel.css';

export const BannerCarousel: React.FC<BannerCarouselProps> = ({ banners }) => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      nextBanner();
    }, 4500);

    return () => {
      clearInterval(autoplayTimer);
    };
  }, [currentBannerIndex, 4500]);

  return (
    <div className="banner-carousel">
      <div
        className="banner-image-container"
        style={{
          transform: `translateX(-${currentBannerIndex * 100}%)`,
        }}
      >
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={banner.imageUrl}
            alt={`Banner ${banner.id}`}
            className="banner-image"
          />
        ))}
      </div>
      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={index === currentBannerIndex ? 'dot active' : 'dot'}
            onClick={() => setCurrentBannerIndex(index)}
          ></span>
        ))}
      </div>
      <button className="arrow-button prev" onClick={prevBanner}>
        &lt;
      </button>
      <button className="arrow-button next" onClick={nextBanner}>
        &gt;
      </button>
    </div>
  );
};