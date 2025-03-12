import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiPushpin2Line } from "react-icons/ri";

const TabSportsCricket = ({allTabs}) => {
    
      const [cricketActiveTab, setCricketActiveTab] = useState("by Time");
      const [activeTab, setActiveTab] = useState("Cricket");

      const cricketDataByTime = [
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
      

      const cricketWomenLeage = [
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
          {
            id: 3,
            teams: " UP Warriorz W v Delhi Capitals W 20..",
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
      const cricketOneDay = [
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
        ],
      ];
      const cricketVertualPSL = [
        [
          {
            id: 1,
            teams: "Karachi kings SRL T20 vs Peshawar Zalmi SR..",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 3.39,
              team2: 2.3,
              team3: 5.16,
              team4: 3.59,
            },
          },
        ],
      ];
      const cricketVertualSA = [
        [
          {
            id: 1,
            teams: "Mi Cape Town SRL T20 v Chennai Sup..",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 3.39,
              team2: 2.3,
              team3: 5.16,
              team4: 3.59,
            },
          },
        ],
      ];
      const cricketAustralia = [
        [
          {
            id: 1,
            teams: "New South Wales Breakers v ACT Meteros",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 3.39,
              team2: 2.3,
              team3: 5.16,
              team4: 3.59,
            },
          },
        ],
        [
          {
            id: 2,
            teams: "Tasmania Women v Victoria Women",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 3.39,
              team2: 2.3,
              team3: 5.16,
              team4: 3.59,
            },
          },
        ],
        [
          {
            id: 3,
            teams: "Western Australia W v South Australian Scor..",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 3.39,
              team2: 2.3,
              team3: 5.16,
              team4: 3.59,
            },
          },
        ],
      ];
    return (
        <div>
                  <div className="flex bg-customWhite text-sm w-full py-1  max-w-3xl rounded-md border px-4 border-customWhite flex-row items-center justify-center lg:bg-none whitespace-nowrap">
                    {allTabs.map((tab, index) => (
                      <button
                        key={index}
                        className={`w-full lg:w-[20%] border-r border-customWhite rounded-md py-1 px-2 lg:px-0 text-customWhite font-bold shadow-2xl ${
                          cricketActiveTab === tab
                            ? " bg-textYellowColor !text-customWhite font-bold  lg:text-customWhite"
                            : " bg-signUpColor"
                        }`}
                        onClick={() => {
                          setActiveTab("Cricket");
                          setCricketActiveTab(tab);
                        }}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  {cricketActiveTab === "by Time" &&
                    cricketDataByTime[0].map((cricket, index) => (
                      <div
                        key={index}
                        className="flex bg-customWhite flex-row justify-between border-b items-center px-2 text-sm"
                      >
                        <ul className="flex flex-col py-2">
                          <div className="flex flex-row items-center gap-2">
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
                                  strokeWidth="2"
                                />
                                <polygon points="10,8 16,12 10,16" fill="white" />
                              </svg>
                            </span>
                            <li className="text-tableGreenText">{cricket.status}</li>
                          </div>
                          <div className="flex flex-row items-center gap-2">
                            <span className="text-tableGreenText">
                              <svg
                                className="w-3 h-3"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                              >
                                <circle cx="50" cy="50" r="40" fill="green" />
                              </svg>
                            </span>
                            <li className="text-tableBlueText ">
                              {index === 0 ? (
                                <Link to="/womenleague" className="underline">
                                  {cricket.teams}
                                </Link>
                              ) : (
                                cricket.teams
                              )}
                            </li>
                          </div>
                        </ul>
                        <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                          <RiPushpin2Line size={16} color="#7e97a7" />
                        </span>
                      </div>
                    ))}
                  {cricketActiveTab === "by Competition" && (
                    <>
                      <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                        Women's Premier League
                      </h3>
                      {cricketWomenLeage[0].map((cricket, index) => (
                        <div
                          key={index}
                          className="flex flex-row bg-customWhite justify-between border-b items-center px-2 text-sm"
                        >
                          <ul className="flex flex-col py-2">
                            <div className="flex flex-row items-center gap-2">
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
                                    strokeWidth="2"
                                  />
                                  <polygon points="10,8 16,12 10,16" fill="white" />
                                </svg>
                              </span>
                              <li className="text-tableGreenText">{cricket.status}</li>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <span className="text-tableGreenText">
                                <svg
                                  className="w-3 h-3"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                >
                                  <circle cx="50" cy="50" r="40" fill="green" />
                                </svg>
                              </span>
                              <li className="text-tableBlueText ">
                                {index === 0 ? (
                                  <Link
                                    to="/womenleague"
                                    className="underline"
                                  >
                                    {cricket.teams}
                                  </Link>
                                ) : (
                                  cricket.teams
                                )}
                              </li>
                            </div>
                          </ul>
                          <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                            <RiPushpin2Line size={16} color="#7e97a7" />
                          </span>
                        </div>
                      ))}
        
                      <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                        One Day International
                      </h3>
                      {cricketOneDay[0].map((cricket, index) => (
                        <div
                          key={index}
                          className="flex flex-row bg-customWhite justify-between border-b items-center px-2 text-sm"
                        >
                          <ul className="flex flex-col py-2">
                            <div className="flex flex-row items-center gap-2">
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
                                    strokeWidth="2"
                                  />
                                  <polygon points="10,8 16,12 10,16" fill="white" />
                                </svg>
                              </span>
                              <li className="text-tableGreenText">{cricket.status}</li>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <span className="text-tableGreenText">
                                <svg
                                  className="w-3 h-3"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                >
                                  <circle cx="50" cy="50" r="40" fill="green" />
                                </svg>
                              </span>
                              <li className="text-tableBlueText">{cricket.teams}</li>
                            </div>
                          </ul>
                          <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                            <RiPushpin2Line size={16} color="#7e97a7" />
                          </span>
                        </div>
                      ))}
        
                      <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                        Virtual PSL 2024
                      </h3>
                      {cricketVertualPSL[0].map((cricket, index) => (
                        <div
                          key={index}
                          className="flex flex-row bg-customWhite justify-between border-b items-center px-2 text-sm"
                        >
                          <ul className="flex flex-col py-2">
                            <div className="flex flex-row items-center gap-2">
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
                                    strokeWidth="2"
                                  />
                                  <polygon points="10,8 16,12 10,16" fill="white" />
                                </svg>
                              </span>
                              <li className="text-tableGreenText">{cricket.status}</li>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <span className="text-tableGreenText">
                                <svg
                                  className="w-3 h-3"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                >
                                  <circle cx="50" cy="50" r="40" fill="green" />
                                </svg>
                              </span>
                              <li className="text-tableBlueText">{cricket.teams}</li>
                            </div>
                          </ul>
                          <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                            <RiPushpin2Line size={16} color="#7e97a7" />
                          </span>
                        </div>
                      ))}
        
                      <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                        Virtual SA 2024
                      </h3>
                      {cricketVertualSA[0].map((cricket, index) => (
                        <div
                          key={index}
                          className="flex flex-row bg-customWhite justify-between border-b items-center px-2 text-sm"
                        >
                          <ul className="flex flex-col py-2">
                            <div className="flex flex-row items-center gap-2">
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
                                    strokeWidth="2"
                                  />
                                  <polygon points="10,8 16,12 10,16" fill="white" />
                                </svg>
                              </span>
                              <li className="text-tableGreenText">{cricket.status}</li>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <span className="text-tableGreenText">
                                <svg
                                  className="w-3 h-3"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                >
                                  <circle cx="50" cy="50" r="40" fill="green" />
                                </svg>
                              </span>
                              <li className="text-tableBlueText">{cricket.teams}</li>
                            </div>
                          </ul>
                          <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                            <RiPushpin2Line size={16} color="#7e97a7" />
                          </span>
                        </div>
                      ))}
        
                      <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                        Australia NCL Women
                      </h3>
                      {cricketAustralia[0].map((cricket, index) => (
                        <div
                          key={index}
                          className="flex flex-row bg-customWhite justify-between border-b items-center px-2 text-sm"
                        >
                          <ul className="flex flex-col py-2">
                            <div className="flex flex-row items-center gap-2">
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
                                    strokeWidth="2"
                                  />
                                  <polygon points="10,8 16,12 10,16" fill="white" />
                                </svg>
                              </span>
                              <li className="text-tableGreenText">{cricket.status}</li>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                              <span className="text-tableGreenText">
                                <svg
                                  className="w-3 h-3"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 100 100"
                                >
                                  <circle cx="50" cy="50" r="40" fill="green" />
                                </svg>
                              </span>
                              <li className="text-tableBlueText">{cricket.teams}</li>
                            </div>
                          </ul>
                          <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                            <RiPushpin2Line size={16} color="#7e97a7" />
                          </span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
    );
};

export default TabSportsCricket;