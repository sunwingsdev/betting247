import React, { useCallback, useEffect, useState } from 'react';
import banner1 from "../../assets/Banner1.avif";
import banner2 from "../../assets/Banner2.avif";
import banner3 from "../../assets/Banner3.avif";
import banner4 from "../../assets/Banner4.avif";
import banner5 from "../../assets/Banner5.avif";
import banner7 from "../../assets/Banner7.avif";
import banner8 from "../../assets/Banner8.avif";
import banner9 from "../../assets/Banner9.avif";
import banner10 from "../../assets/Banner10.avif";
import banner11 from "../../assets/Banner11.avif";
import banner12 from "../../assets/Banner12.avif";
import banner13 from "../../assets/Banner13.avif";
import banner14 from "../../assets/Banner14.avif";
import banner15 from "../../assets/Banner15.avif";
import banner16 from "../../assets/Banner16.avif";
import banner17 from "../../assets/Banner17.avif";
import banner18 from "../../assets/Banner18.avif";
import banner19 from "../../assets/Banner19.avif";
import banner20 from "../../assets/Banner20.avif";

const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner7,
    banner8,
    banner9,
    banner10,
    banner11,
    banner12,
    banner13,
    banner14,
    banner15,
    banner16,
    banner17,
    banner18,
    banner19,
    banner20,
  ];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
      const [isTransitioning, setIsTransitioning] = useState(true);
      const [showArrows, setShowArrows] = useState(false);

      const handleNextSlide = useCallback(() => {
          if (currentIndex === banners.length - 1) {
            setTimeout(() => {
              setIsTransitioning(false);
              setCurrentIndex(0);
              setTimeout(() => setIsTransitioning(true), 50);
            }, 1000);
          } else {
            setCurrentIndex((prev) => prev + 1);
          }
        }, [currentIndex, banners.length]);
      
        useEffect(() => {
          const interval = setInterval(() => {
            handleNextSlide();
          }, 5000);
      
          return () => clearInterval(interval);
        }, [handleNextSlide]);
      
        const handlePrev = () => {
          setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
        };
      
        useEffect(() => {
            setShowArrows(true);
            const timer = setTimeout(() => setShowArrows(false), 4000);
            return () => clearTimeout(timer);
          }, [currentIndex]);
    
    return (
        <div>
           <div className="relative w-full overflow-hidden">
        <div
          className="w-full flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 1s ease-in-out" : "none",
          }}
        >
          {[...banners, banners[0]].map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt=""
              className="w-full h-24 lg:h-auto md:h-auto flex-shrink-0"
            />
          ))}
        </div>

        <div className="absolute hidden  bottom-0 lg:bottom-4 left-1/2 transform -translate-x-1/2 lg:flex gap-2 bg-customBlack bg-opacity-50 px-4 py-1 md:py-2 lg:py-2 rounded-lg">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 w-1 md:w-6 lg:w-6 rounded-full md:rounded-md lg:rounded-md ${
                currentIndex === index
                  ? "bg-sliderButtonLightGray"
                  : "bg-sliderButtonMediumGray"
              }`}
            ></button>
          ))}
        </div>
        <div className="lg:hidden">
          {showArrows && (
            <>
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-customBlack bg-opacity-50 p-2 rounded-full"
                onClick={handlePrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-customBlack bg-opacity-50 p-2 rounded-full"
                onClick={handleNextSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div> 
        </div>
    );
};

export default ImageSlider;