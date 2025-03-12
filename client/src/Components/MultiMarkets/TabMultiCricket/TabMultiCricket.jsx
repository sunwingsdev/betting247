import React from 'react';
import { Link } from 'react-router-dom';
import PLogo from "../../../assets/download.svg";
import BLogo from "../../../assets/download (2).svg";
import FLogo from "../../../assets/download (3).svg";
import { RiPushpin2Line } from "react-icons/ri";

const TabMultiCricket = () => {
    const cricketData = [
        [
          {
            id: 1,
            teams: "Women's Premier League",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 3.39,
              team2: 2.3,
              team3: 5.16,
              team4: 3.59,
            },
          },
          {
            id: 2,
            teams: "ICC Champions Trophy",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 9.1,
              team2: 5.8,
            },
          },
          {
            id: 3,
            teams: "Titans Women v Garden Route...",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
          },
          {
            id: 4,
            teams: "Border v Northern Cape",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
          },
          {
            id: 5,
            teams: "Perth Scorchers SRL T20 v Brisbane...",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
          },
          {
            id: 6,
            teams: "Delhi Royals v Gujarat Samp..",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
          },
          {
            id: 7,
            teams: "North West Dragons v Knights",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.54,
              team2: 1.55,
              team3: 2.8,
              team4: 2.86,
            },
          },
          {
            id: 8,
            teams: "Western Province v Lions",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.04,
              team2: 2.16,
              team3: 1.87,
              team4: 1.95,
            },
          },
          {
            id: 9,
            teams: "Durban Super Giants SRL T20 v Pretoria..",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
          },
          {
            id: 10,
            teams: "Mumbai Indians Women v Delhi..",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.04,
              team2: 2.06,
              team3: 1.94,
              team4: 1.95,
            },
          },
          {
            id: 11,
            teams: "Quetta Gladiators SRL T20 v Multan..",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
          },
          {
            id: 12,
            teams: "Joburg Super Kings SRL T20 v Mi Cape..",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
          },
          {
            id: 13,
            teams: "Lucknow Super Giants SRL T20 v Chennai..",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
          },
          {
            id: 14,
            teams: "Oman v Namibia",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.2,
              team2: 2.34,
              team3: 1.75,
              team4: 1.83,
            },
          },
          {
            id: 15,
            teams: "Zimbabwe v Ireland",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.97,
              team2: 1.99,
              team3: 2.02,
              team4: 2.04,
            },
          },
          {
            id: 16,
            teams: "Gujarat Giants Women v UP Warriorz..",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.95,
              team2: 2.1,
              team3: 1.91,
              team4: 2.06,
            },
          },
        ],
      ];


    return (
        <div className="   ">
                  <div className="shadow-2xl   ">
                    <div className="px-2 lg:px-0 border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0 ">
                      <table className="">
                        <thead className="bg-sliderButtonMediumGray text-customBlack lg:table-header-group hidden   w-full">
                          <tr>
                            <th></th>
                            <th></th>
                            <th>1</th>
                            <th>x</th>
                            <th>2</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className=" ">
                          {cricketData[0].map((cricket, i) => (
                            <tr key={i} className="md:justify-items-center">
                              <td className=" lg:pr-[96px] w-full h-auto border-b py-2 ">
                                <div className="flex  flex-col-reverse  border-gray-400 whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                  <div className="flex flex-row items-center ">
                                    <span className="text-tableGreenText ">
                                      <svg
                                        className="w-3 h-3  "
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                      >
                                        <circle
                                          cx="50"
                                          cy="50"
                                          r="40"
                                          fill="green"
                                        />
                                      </svg>
                                    </span>
                                    <span className="text-tableBlueText cursor-pointer underline font-bold text-xs lg:text-md">
                                      {i === 0 ? (
                                        <Link to="/womenleague" className="">
                                          {cricket.teams}
                                        </Link>
                                      ) : (
                                        cricket.teams
                                      )}
                                    </span>
                                  </div>
                                  <div className="flex flex-row gap-2">
                                    <span className="bg-tableLogoColor rounded-sm  ">
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
                                        <polygon
                                          points="10,8 16,12 10,16"
                                          fill="white"
                                        />
                                      </svg>
                                    </span>
                                    <span className="text-tableGreenText  ">
                                      {cricket.status}
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td className="hidden  lg:table-cell px-2  py-2 h-auto border-b  ">
                                <div className="flex  flex-row lg:pr-10 gap-x-2">
                                  <img
                                    src={PLogo}
                                    alt=""
                                    className="w-4 h-auto bg-tablePLogoColor"
                                  />
                                  <div className="flex flex-row pr-4">
                                    <span className="bg-tableGreenText ">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="white"
                                        class="w-4 h-auto"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 8v4l3 3m5-10a9 9 0 11-6.627-2.628M5.25 5.25l1.5 1.5M18.75 5.25l-1.5 1.5"
                                        />
                                      </svg>
                                    </span>
                                    <img
                                      src={BLogo}
                                      alt=""
                                      className="w-4 h-auto bg-tableBlueText"
                                    />
                                  </div>
                                  <img
                                    src={FLogo}
                                    alt=""
                                    className="w-4 h-auto bg-tableFColor"
                                  />
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center font-bold text-sm gap-x-1">
                                  <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxBlue">
                                    {cricket.team1}
                                  </p>
                                  <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
                                    {cricket.team2}
                                  </p>
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center gap-x-1">
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue"></p>
                                  <p className="w-[50px] h-[22px] text-center bg-tableBoxPink"></p>
                                </div>
                              </td>
                              <td className="h-auto hidden lg:table-cell border-b  px-2 py-2 ">
                                <div className="flex flex-row items-center font-bold text-sm gap-x-1">
                                  <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxBlue">
                                    {cricket.team3}
                                  </p>
                                  <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
                                    {cricket.team4}
                                  </p>
                                </div>
                              </td>
                              <td>
                                <span className=" w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                                  <RiPushpin2Line size={16} color="#7e97a7" />
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
    );
};

export default TabMultiCricket;