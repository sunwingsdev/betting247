import React, { useState } from 'react';
import Marquee from '../../Marquee/Marquee';
import ImageSlider from '../../ImageSlider/ImageSlider';
import BetSlip from '../../InPlay/BetSlip/BetSlip';
import TabMultiCricket from '../TabMultiCricket/TabMultiCricket';
import TabMultiSoccer from '../TabMultiSoccer/TabMultiSoccer';
import TabMultiTennis from '../TabMultiTennis/TabMultiTennis';
import Cricket from '../../../Pages/Cricket/Cricket';
import Soccer from '../../../Pages/Soccer/Soccer';

const SportsSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Cricket");
      const [selectedData, setSelectedData] = useState(null);
    const tabData = {
        Cricket: [
          "Virtual IPL 2024",
          "Virtual SA 2024",
          "Virtual PSL 2024",
          "Rani Suryamukhi Devi T20",
          "CSA Provincial One-Day..",
          "ICC Champions Trophy",
          "CSA Provincial One-Day..",
          "Women_s Premier League",
          "ICC Cricket World ..",
          "One Day Internationals",
        ],
        Soccer: [
          "ARGENTINA Primera Division",
          "BELGIUM Jupiler Pro League",
          "ENGLAND Premier League",
          "TURKEY Super Lig",
          "NETHERLANDS Eredivisie",
          "ITALY Serie B",
          "KUWAIT Premier League",
          "SPAIN LaLiga",
          "ISRAEL Ligat haAl",
          "POLAND Ekstraklasa",
        ],
        Tennis: [
          "WTA - SINGLES: DOHA ...",
          "ATP - SINGLES MARSEILLE...",
          "ATP - SINGLES DELRAY...",
          "ATP - SINGLES BUENOS...",
          "CHALLENGER WOMEN...",
          "ATP - SINGLES Rio...",
        ],
      };
      console.log("Cricket tab data:", tabData["Cricket"]);
console.log("Soccer tab data:", tabData["Soccer"]);
console.log("Tennis tab data:", tabData["Tennis"]);
      

      const tabs = ["Cricket", "Soccer", "Tennis"];
    return (
        <div>
          <div className="lg:flex hidden flex-row  gap-2 w-full mx-auto  lg:max-w-[1300px]">
      <div className="w-[30%]">
          <div className="flex flex-row justify-between   bg-inPlayTabColor ">
            <span className="border-r rounded-2xl px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth="2"
                width="24"
                height="24"
              >
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </span>
            <div className="flex flex-row items-center font-bold text-sm text-white gap-2 px-2">
              <h2
                className="border-r px-4   cursor-pointer rounded-2xl"
                onClick={() => setIsOpen(!isOpen)}
              >
                Sports:
              </h2>
              <p>{isOpen ? activeTab : ""}</p>
            </div>
          </div>
          <div className="w-full h-[500px] bg-white  shadow-2xl">
            <div className="  rounded-lg">
              <ul className="mt-2 text-tableBlueText  text-xs   list-inside">
                {isOpen ? (
                  tabData[activeTab] ? (
                    tabData[activeTab].map((item, index) => (
                      <div className="flex flex-row items-center px-4 space-y-2 border-b border-textYellowColor  border-opacity-30 justify-between cursor-pointer">
                        <li
                          className="hover:text-customBlack cursor-pointer"
                          key={index}
                        >
                          {item}
                        </li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    ))
                  ) : (
                    <li>Please select a sport to see details.</li>
                  )
                ) : (
                  <>
                    <div>
                      {!selectedData && (
                        <ul className="mt-2 text-tableBlueText text-xs list-inside">
                          <div className="">
                            <div
                              className="flex flex-row justify-between px-4 py-1 border-b border-textYellowColor border-opacity-30 cursor-pointer  "
                              onClick={() => setSelectedData(tabData.Cricket)}
                            >
                              <li
                                className=" cursor-pointer hover:text-customBlack "
                                onClick={() => setSelectedData(tabData.Cricket)}
                              >
                                Cricket
                              </li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                            <div
                              className="flex flex-row justify-between px-4 py-1 border-b border-textYellowColor border-opacity-30 cursor-pointer  "
                              onClick={() => setSelectedData(tabData.Soccer)}
                            >
                              <li
                                className=" cursor-pointer hover:text-customBlack "
                                onClick={() => setSelectedData(tabData.Cricket)}
                              >
                                Soccer
                              </li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                            <div
                              className="flex flex-row justify-between px-4 py-1 border-b border-textYellowColor border-opacity-30 cursor-pointer "
                              onClick={() => setSelectedData(tabData.Tennis)}
                            >
                              <li className=" hover:text-customBlack cursor-pointer ">
                                Tennis
                              </li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </ul>
                      )}

                      {selectedData && (
                        <ul className="mt-4 text-xs">
                          {selectedData.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-row items-center px-4 py-1 border-b border-textYellowColor border-opacity-30 justify-between cursor-pointer"
                            >
                              <li className="hover:text-customBlack">{item}</li>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-4 h-4 text-gray-400"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          ))}

                          <button
                            className="mt-4 px-4 py-2 bg-tableBlueText text-white rounded hover:bg-tableLogoColor"
                            onClick={() => setSelectedData(null)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              className="w-5 h-auto"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          </button>
                        </ul>
                      )}
                    </div>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        {isOpen ? (
          <div className="w-full overflow-y-auto h-[500px] overflow-x-hidden">
            {/* <Marquee /> */}
            <ImageSlider/>
            <div className="relative bg-commonYellowColor">
              <h3 className="px-2 py-10  font-bold w-full text-customBlack bg-commonYellowColor">
                Highlights
              </h3>

              <div className="absolute bottom-0 left-4 flex text-sm w-full max-w-3xl gap-x-2 flex-row items-center justify-center  bg-footer-gradient lg:bg-none  p-1 lg:p-0 lg:justify-start whitespace-nowrap   ">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    className={`w-full lg:w-[20%] py-1 px-2 lg:px-0 text-customWhite        rounded-t-lg ${
                      activeTab === tab
                        ? " bg-customWhite lg:!text-customBlack font-bold  lg:bg-sliderButtonMediumGray  "
                        : " lg:bg-inPlayTabColor bg-smallDeviceTabColor"
                    } `}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto overflow-y-auto ">
              {activeTab === "Cricket" && (
               <TabMultiCricket/>
              )}
              {activeTab === "Soccer" && (
                <TabMultiSoccer/>
              )}
              {activeTab === "Tennis" && (
                <TabMultiTennis/>
              )}
            </div>
          </div>
        ) : (
          <div className="w-[50%]">
            <div className="w-full">
              <Marquee />
            </div>

            <p className="mt-2 text-customBlack font-medium text-center">
              There are currently no followed multi markets.
            </p>
          </div>
        )}
        <BetSlip />

      </div>
 
          <div className='hidden'>
          <Cricket tabData={tabData["Cricket"]} />

<Soccer soccerData={tabData["Soccer"]} />
            </div> 
        </div>
    );
};

export default SportsSection;