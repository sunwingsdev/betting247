import React  from "react";
import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Marquee from "../../Components/Marquee/Marquee";
import CarouselLargeDevice from "../../Components/Home/CarouselLargeDevice/CarouselLargeDevice";
import CarouselSmallDevice from "../../Components/Home/CarouselSmallDevice/CarouselSmallDevice";

const Home = () => {
  return (
    <div className="bg-inPlayBgColor">
      <div className="mx-auto lg:max-w-4xl">
        {/* <Marquee /> */}

        <ImageSlider />

        <CarouselLargeDevice />
        <CarouselSmallDevice />
      </div>
    </div>
  );
};

export default Home;
