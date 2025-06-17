import { useCallback, useEffect, useState } from "react";
import { useGetHomeControlsQuery } from "../../../redux/features/allApis/homeControlApi/homeControlApi";

const SportsSlider = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showArrows, setShowArrows] = useState(false);

  const sliderHomeControls = homeControls?.filter(
    (control) => control.category === "slider"
  );

  const handleNext = useCallback(() => {
    if (currentIndex === sliderHomeControls?.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 1000);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, sliderHomeControls?.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderHomeControls?.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    setShowArrows(true);
    const timer = setTimeout(() => setShowArrows(false), 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="w-full flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
      >
        {sliderHomeControls?.map((control, index) => (
          <img
            key={index}
            src={`${import.meta.env.VITE_BASE_API_URL}${control?.image}`}
            alt=""
            className="w-full h-32 lg:h-auto md:h-auto flex-shrink-0"
          />
        ))}
      </div>

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
            onClick={handleNext}
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
  );
};

export default SportsSlider;
