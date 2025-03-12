import React from "react";
import image1 from "../../../assets/MainImage1.avif";
import image2 from "../../../assets/MainImage2.avif";
import image3 from "../../../assets/MainImage3.avif";
import image4 from "../../../assets/MainImage4.avif";
import image5 from "../../../assets/ClassImage5.avif";
import image6 from "../../../assets/ClassImage6.avif";
import image7 from "../../../assets/ClassImage7.avif";
import image8 from "../../../assets/ClassImage8.avif";
import image9 from "../../../assets/ClassImage9.avif";
import image10 from "../../../assets/ClassImage10.avif";
import image11 from "../../../assets/MainImageNew.avif";
import image12 from "../../../assets/ClassImage12.avif";
import image13 from "../../../assets/ClassImage13.avif";
import image14 from "../../../assets/ClassImage14.avif";
import image15 from "../../../assets/ClassImage15.avif";
import image16 from "../../../assets/ClassImage16.avif";
import image17 from "../../../assets/ClassImage17.avif";
import image18 from "../../../assets/ClassImage18.avif";
import image19 from "../../../assets/ClassImage19.avif";
import image20 from "../../../assets/ClassImage20.avif";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const CarouselLargeDevice = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handlePlay = (demoLink) => {
    if (demoLink) {
      navigate(demoLink);
    } else if (user) {
      toast.error("Please connect the api to play the game");
    } else {
      toast.error("Please login to play the game");
    }
  };
  const data = [
    {
      title: "first row",
      gridClass: "sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-2 ",
      items: [
        {
          imgSrc: image1,
          tittle: "Sports",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image2,
          tittle: "Sport Book",
          imgClass: "w-full h-full",
        },
      ],
    },

    {
      title: "second row",
      gridClass: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ",
      items: [
        {
          imgSrc: image3,
          tittle: "Virtual Sports",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image4,
          tittle: "Jili",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "third row",
      titleClass: "text-customBlack",
      gridClass: "sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ",
      items: [
        {
          imgSrc: image5,
          tittle: "Sexy Casino",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image6,
          tittle: "Aviator Demo",
          imgClass: "w-full h-full",
          demoLink: "/games/demo/aviator",
        },
        {
          imgSrc: image7,
          tittle: "Aviatrix",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image8,
          tittle: "Evolution",
          imgClass: "w-full h-full",
        },
      ],
    },
    {
      title: "fourth row",
      titleClass: "text-black",
      gridClass: "sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ",
      items: [
        {
          imgSrc: image9,
          tittle: "Sexy Casino",
          gridSpan: "col-span-1",
          imgClass: "w-full h-full ",
        },
        {
          imgSrc: image10,
          tittle: "Aviator",
          gridSpan: "col-span-1",
          imgClass: "w-full h-full ",
        },
        {
          imgSrc: image11,
          tittle: "Aviatrix",
          gridSpan: "col-span-2",
          imgClass: "w-full h-full  ",
        },
      ],
    },
    {
      title: "fifth row",
      titleClass: "text-customBlack",
      gridClass: " sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ",
      items: [
        {
          imgSrc: image12,
          tittle: "Super Spade",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image13,
          tittle: "Bombay Live",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image14,
          tittle: "Bet Games",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image15,
          tittle: "Royal Gaming",
          imgClass: "w-full h-full",
        },
      ],
    },

    {
      title: "sixth row",
      titleClass: "text-customBlack",
      gridClass: "sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ",
      items: [
        {
          imgSrc: image16,
          tittle: "Fc Gaming",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image17,
          tittle: "Red Tiger",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image18,
          tittle: "YL Gaming",
          imgClass: "w-full h-full",
        },
        {
          imgSrc: image19,
          tittle: "JDB Gaming",
          imgClass: "w-full h-full",
        },
      ],
    },
  ];
  return (
    <div className="hidden md:block lg:block relative">
      {data.map((section, index) => (
        <div
          key={index}
          className={`grid grid-${section.gridClass}  px-2 lg:px-0 gap-2  pt-3`}
        >
          {section.items.map((item, i) => (
            <div key={i} className={`relative ${item.gridSpan || ""}`}>
              <img
                src={item.imgSrc}
                alt=""
                className={`${item.imgClass} border-b-8 border-loginColor`}
              />
              {section.title === "first row" && i === 0 && (
                <div className="absolute pt-3 p-2 bg-customBlack70 text-sm top-0 right-0">
                  <Link className=" text-customWhite" to="/inplay">
                    <div className="flex items-center pb-2 animate-pulse">
                      <span className="bg-liveRedColor rounded-sm  border-l-8 border-customWhite font-bold text-md px-2">
                        LIVE
                      </span>
                    </div>
                    <ul className="text-customWhite  flex flex-col gap-x-5 gap-y-1">
                      <div className="flex  flex-row justify-between gap-x-2">
                        <li>Cricket</li>
                        <span className="w-auto text-center px-1 rounded-sm bg-customWhite text-customBlack">
                          7
                        </span>
                      </div>
                      <div className="flex flex-row justify-between  gap-x-5">
                        <li>Soccer</li>
                        <span className="w-auto text-center px-1 rounded-sm bg-customWhite text-customBlack">
                          14
                        </span>
                      </div>
                      <div className="flex flex-row justify-between gap-x-12">
                        <li>Tennis</li>
                        <span className="w-auto inline-block rounded-sm px-1 text-center bg-customWhite text-customBlack ">
                          11
                        </span>
                      </div>
                    </ul>
                  </Link>
                </div>
              )}
              <h3 className="absolute bottom-2 w-full  text-customWhite text-left  md:px-2 lg:px-2 font-bold bg-customBlack70 lg:text-sm  text-xs">
                {item.tittle}
              </h3>
              <div className="">
                <button
                  className="absolute bottom-2 right-0 border border-loginColor bg-loginColor px-1 md:px-5 lg:px-5 transform text-xs lg:text-sm text-customBlack font-medium"
                  style={{
                    clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                  onClick={() => handlePlay(item.demoLink)}
                >
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarouselLargeDevice;
