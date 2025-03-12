import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBaseball } from "react-icons/fa6";
import { IoMdFootball } from "react-icons/io";
import { BiSolidCricketBall } from "react-icons/bi";
import { GiCardAceDiamonds } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaTimes, FaChevronLeft } from "react-icons/fa";
import TabSportsCricket from "../TabSportsCricket/TabSportsCricket";
import TabSportsSoccer from "../TabSportsSoccer/TabSportsSoccer";
import TabSportsTennis from "../TabSportsTennis/TabSportsTennis";

const SportsHeader = ({allTabs}) => {
  const [activeTab, setActiveTab] = useState("Cricket");
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const tabs = [
    {
      label: "Casino",
      icon: "M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 4l-4 4m4 0l-4-4m6 6l-2 2m-4 0l2-2", // Playing Cards icon
      bgColor: "",
      link: "/login",
    },
    {
      label: "Cricket",
      icon: "M8 21l10-10m-6-6l6 6M21 3l-3 3", // Cricket Ball icon
      bgColor: "",
      link: "",
    },
    {
      label: "Soccer",
      icon: "M12 2l3 3-3 3-3-3z M9 9l3 3 3-3z M6 12l3 3 3-3z M3 15l3 3 3-3z M12 12l3 3 3-3z M15 9l3 3 3-3z", // Football icon
      bgColor: "",
      link: "",
    },
    {
      label: "Tennis",
      icon: "", // Tennis Ball icon
      bgColor: "",
      link: "",
    },
    {
      label: "Result",
      icon: "M8 21l10-10m-6-6l6 6M21 3l-3 3", // Cricket Ball icon (same as "Cricket")
      bgColor: "",
      link: "/login",
      // link: "/result",
    },
    {
      label: "Women's",
      icon: "M12 2l3 3-3 3-3-3z M9 9l3 3 3-3z M6 12l3 3 3-3z M3 15l3 3 3-3z M12 12l3 3 3-3z M15 9l3 3 3-3z", // Football icon (same as "Soccer")
      bgColor: "",
      link: "/womenleague",
    },
  ];
  
 
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    console.log("Search Value:", e.target.value); 
  };
  return (
    <div>
      <div className="bg-textYellowColor   pt-2  relative">
        <div className="flex w-full flex-row overflow-x-auto pl-4 pr-20 rounded-md gap-x-1 items-center whitespace-nowrap">
          {tabs.map((tab, index) => (
            <Link
              key={index}
              to={tab.link || "#"}
              className={`w-full ${index === 0 ? "null" : "relative"} `}
            >
              <button
                className={`px-2 py-2 font-bold text-sm text-customBlack rounded-t-lg lg:text-customBlack 
                        ${index === 0 ? "bg-[#873535] !text-customWhite" : ""}
                        ${
                          activeTab === tab.label
                            ? "bg-smallDeviceTabColor !text-textYellowColor font-bold"
                            : "lg:bg-customWhite"
                        }`}
                onClick={() => setActiveTab(tab.label)}
              >
                <div className="flex flex-row gap-x-1 items-center">
                  {index === 0 && (
                    <GiCardAceDiamonds className="w-7 h-auto  " />
                  )}
                  {index === 3 && <FaBaseball className="w-6 h-7 " />}
                  {index === 2 && <IoMdFootball className="w-7 h-auto " />}
                  {index === 1 && (
                    <BiSolidCricketBall className="w-7 h-auto " />
                  )}
                  {index === 4 && (
                    <BiSolidCricketBall className="w-7 h-auto " />
                  )}
                  {index === 5 && <IoMdFootball className="w-7 h-auto " />}
                  {tab.label}
                </div>
              </button>
              <div className="absolute top-0 right-0 flex items-center ">
                {/* Live Icon with Animation */}
                <span className="bg-customWhite font-bold text-[10px] leading-[10px] px-1 text-liveRedColor animate-pulse rounded-sm">
                  Live
                </span>

                {/* Live Score (Attached) */}
                <span className="bg-loginRedColor font-bold text-[10px] leading-[10px] px-1 text-customWhite rounded-sm">
                  6
                </span>
              </div>
            </Link>
          ))}
        </div>
        <button
          className="w-14 h-14  flex items-center justify-center bg-signUpColor absolute top-1/2 right-0 transform -translate-y-1/2 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <FaSearch className="w-6 h-6 text-customWhite" />
        </button>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-customBlack bg-opacity-50 flex items-baseline justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-customWhite flex flex-row items-center p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className=" font-bold " onClick={() => setIsOpen(false)}>
              <FaChevronLeft />
            </h2>
            <div className="relative w-full">
              <input
                type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search Events"
                className="w-full py-2 pl-4 pr-10 outline-none "
              />
              <FaTimes className="absolute top-1/2 right-8 transform -translate-y-1/2  w-5 h-5 cursor-pointer" />
              <FaSearch className="absolute top-1/2 right-1 transform -translate-y-1/2  w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      )}
      <h3 className="   bg-footer-gradient w-full   text-center  px-2 py-1 text-sm font-bold text-customWhite">
        Highlights
      </h3>
      {activeTab === "Cricket" && (
        <TabSportsCricket allTabs={allTabs}/>
      )}
      {activeTab === "Soccer" && (
        <TabSportsSoccer allTabs={allTabs}/>
      )}
      
      {activeTab === "Tennis" && (
       <TabSportsTennis allTabs={allTabs}/>
      )}
    </div>
  );
};

export default SportsHeader;
