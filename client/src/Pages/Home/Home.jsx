import ImageSlider from "../../Components/ImageSlider/ImageSlider";
import Marquee from "../../Components/Marquee/Marquee";
import CarouselLargeDevice from "../../Components/Home/CarouselLargeDevice/CarouselLargeDevice";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import favIcon from "/logo.svg";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const websiteName = "9Tenbet";
  return (
    <div className="bg-inPlayBgColor">
      {/* <Helmet>
        <title>{websiteName} | Home</title>
        <link rel="icon" type="image/svg+xml" href={favIcon} />
      </Helmet> */}
      <div className="mx-auto lg:max-w-6xl">
        {user && <Marquee />}
        <ImageSlider />
        <CarouselLargeDevice />
      </div>
    </div>
  );
};

export default Home;
