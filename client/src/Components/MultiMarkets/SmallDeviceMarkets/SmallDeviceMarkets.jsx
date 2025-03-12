import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiPushpin2Line } from "react-icons/ri";

const SmallDeviceMarkets = ({cricketData,soccerData,tennisData}) => {
const [activeTab, setActiveTab] = useState("Cricket");

    const tabs = ["Cricket", "Soccer", "Tennis"];

    return (
        <div className="lg:hidden ">
        <div className="bg-footer-gradient p-2 ">
          <div className=" flex text-sm w-full max-w-3xl rounded-md border border-customWhite   flex-row items-center justify-center   lg:bg-none     whitespace-nowrap   ">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`w-full lg:w-[20%] border-r ${
                  index === 0
                    ? "rounded-l-md"
                    : index === 2
                    ? "rounded-r-md"
                    : ""
                }  border-customWhite  py-1 px-2 lg:px-0 text-customWhite   lg:text-customBlack       ${
                  activeTab === tab
                    ? " bg-customWhite !text-customBlack font-bold  lg:bg-inPlayTabColor lg:text-customWhite  "
                    : "lg:bg-customWhite bg-smallDeviceTabColor"
                } `}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        {/* cricket */}
        {activeTab === "Cricket" && (
          <div className="border-b shadow-2xl bg-customWhite border-textYellowColor mb-2">
            <h3 className=" bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite ">
              Cricket
            </h3>
            {cricketData.map((cricket, index) => (
              <div
                key={index}
                className="flex flex-row justify-between border-b items-center px-2 text-sm"
              >
                <ul className="flex flex-col py-2  ">
                  <div className="flex flex-row items-center gap-2">
                    <span className="bg-tableLogoColor  px-[2px] py-[1px] rounded-sm  ">
                      <svg
                        width="14"
                        height="auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          stroke-width="2"
                          fill=""
                        />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </span>
                    <span className="text-tableGreenText  ">
                      {cricket.status}
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-tableGreenText ">
                      <svg
                        className="w-3 h-3 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="40" fill="green" />
                      </svg>
                    </span>

                    <li className="text-tableBlueText">
                      {index === 0 ? (
                        <Link to="/womenleague" className=" ">
                          {cricket.teams}
                        </Link>
                      ) : (
                        cricket.teams
                      )}
                    </li>
                  </div>
                </ul>
                <span className=" w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Soccer */}
        {activeTab === "Soccer" && (
          <div className="border-b shadow-2xl bg-customWhite  border-textYellowColor mb-2">
            <h3 className=" bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite ">
              Soccer
            </h3>
            {soccerData.map((soccer, index) => (
              <div
                key={index}
                className="flex flex-row justify-between border-b items-center px-2 text-sm"
              >
                <ul className="flex flex-col py-2  ">
                  <div className="flex flex-row items-center gap-2 ">
                    <span className="bg-tableLogoColor px-[2px] py-[1px] rounded-sm">
                      <svg
                        width="14"
                        height="auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          stroke-width="2"
                          fill=""
                        />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </span>
                    <li className="text-tableGreenText">{soccer.status}</li>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-tableGreenText ">
                      <svg
                        className="w-3 h-3 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="40" fill="green" />
                      </svg>
                    </span>

                    <li className="text-tableBlueText">{soccer.teams}</li>
                  </div>
                </ul>
                <span className=" w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tennis */}
        {activeTab === "Tennis" && (
          <div className="border-b shadow-2xl bg-customWhite  border-textYellowColor mb-2">
            <h3 className=" bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite ">
              Tennis
            </h3>
            {tennisData.map((tennis, index) => (
              <div
                key={index}
                className="flex flex-row justify-between border-b items-center px-2 text-sm"
              >
                <ul className="flex flex-col py-2  ">
                  <div className="flex flex-row items-center gap-2 ">
                    <span className="bg-tableLogoColor px-[2px] py-[1px] rounded-sm">
                      <svg
                        width="14"
                        height="auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          stroke-width="2"
                          fill=""
                        />
                        <polygon points="10,8 16,12 10,16" fill="white" />
                      </svg>
                    </span>
                    <li className="text-tableGreenText">{tennis.status}</li>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <span className="text-tableGreenText ">
                      <svg
                        className="w-3 h-3 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                      >
                        <circle cx="50" cy="50" r="40" fill="green" />
                      </svg>
                    </span>

                    <li className="text-tableBlueText">{tennis.teams}</li>
                  </div>
                </ul>
                <span className=" w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default SmallDeviceMarkets;