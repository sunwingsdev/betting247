import React, { useState } from 'react';
import { RiPushpin2Line } from "react-icons/ri";

const TabSportsSoccer = ({allTabs}) => {
    const [soccerActiveTab, setSoccerActiveTab] = useState("by Time");
    const [activeTab, setActiveTab] = useState("Cricket");

    const soccerAlgeria = [
        [
          {
            id: 1,
            teams: " USM Khenchela v JS Saoura",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.86,
              team2: 2.88,
              team3: 2.28,
              team4: 2.3,
              team5: 4.7,
              team6: 4.8,
            },
          },
          {
            id: 2,
            teams: " CS Constantine v ASO Chlef ",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.07,
              team2: 1.08,
              team3: 16.5,
              team4: 20,
              team5: 60,
              team6: 90,
            },
          },
          {
            id: 3,
            teams: " USM Alger v NC Magra",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.69,
              team2: 1.76,
              team3: 3.4,
              team4: 3.6,
              team5: 7.4,
              team6: 7.8,
            },
          },
        ],
      ];
      const soccerMexico = [
        [
          {
            id: 1,
            teams: " Atlas U23 v Club Necaxa U23",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.86,
              team2: 2.88,
              team3: 2.28,
              team4: 2.3,
              team5: 4.7,
              team6: 4.8,
            },
          },
        ],
      ];
      const soccerAsia = [
        [
          {
            id: 1,
            teams: " AI Rayyan v Estheglal FC",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.86,
              team2: 2.88,
              team3: 2.28,
              team4: 2.3,
              team5: 4.7,
              team6: 4.8,
            },
          },
          {
            id: 2,
            teams: " AI Wasi v AI-Hilal ",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.07,
              team2: 1.08,
              team3: 16.5,
              team4: 20,
              team5: 60,
              team6: 90,
            },
          },
        ],
      ];
     
      const soccerDataByTime = [
        [
          {
            id: 1,
            teams: " Hearts v Rangers I",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.86,
              team2: 2.88,
              team3: 2.28,
              team4: 2.3,
              team5: 4.7,
              team6: 4.8,
            },
          },
          {
            id: 2,
            teams: " PSIS Semarang v PSM Makassar ",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.07,
              team2: 1.08,
              team3: 16.5,
              team4: 20,
              team5: 60,
              team6: 90,
            },
          },
          {
            id: 3,
            teams: " FK Radnicki 1923 v Mladost Lucani",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.69,
              team2: 1.76,
              team3: 3.4,
              team4: 3.6,
              team5: 7.4,
              team6: 7.8,
            },
          },
          {
            id: 4,
            teams: " Hradec Kralove v Bohemians 1905 ",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.61,
              team2: 1.65,
              team3: 4.2,
              team4: 4.4,
              team5: 6.4,
              team6: 6.8,
            },
          },
          {
            id: 5,
            teams: " Nurnberg v SSV Ulm ",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.94,
              team2: 2.96,
              team3: 3.65,
              team4: 3.7,
              team5: 2.56,
              team6: 2.58,
            },
          },
          {
            id: 6,
            teams: " Unterhaching v Saarbrucken ",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.75,
              team2: 1.76,
              team3: 4.1,
              team4: 4.2,
              team5: 5.2,
              team6: 5.3,
            },
          },
          {
            id: 7,
            teams: " Schalke 04 v Karlsruhe ",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.22,
              team2: 2.3,
              team3: 4.1,
              team4: 4.3,
              team5: 3.1,
              team6: 3.2,
            },
          },
          {
            id: 8,
            teams: " Gent v KFCO Beerschot Wilrijk ",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.82,
              team2: 1.83,
              team3: 3.95,
              team4: 4,
              team5: 4.9,
              team6: 5,
            },
          },
          {
            id: 9,
            teams: " Jahn Regensburg v Hamburger SV ",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.72,
              team2: 1.75,
              team3: 3.8,
              team4: 3.95,
              team5: 5.9,
              team6: 6,
            },
          },
          {
            id: 10,
            teams: " Radnicki Nis v FK Jedinstvo Ub ",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.8,
              team2: 2.82,
              team3: 3.65,
              team4: 3.7,
              team5: 2.66,
              team6: 2.7,
            },
          },
        ],
      ];
    return (
        <div>
            <div>
          <div className="flex bg-customWhite text-sm w-full py-1  max-w-3xl rounded-md border px-4 border-customWhite flex-row items-center justify-center lg:bg-none whitespace-nowrap">
            {allTabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full lg:w-[20%] border-r border-customWhite rounded-md py-1 px-2 lg:px-0 text-customWhite font-bold shadow-2xl ${
                  soccerActiveTab === tab
                    ? " bg-textYellowColor !text-customWhite font-bold  lg:text-customWhite"
                    : " bg-signUpColor"
                }`}
                onClick={() => {
                  setActiveTab("Soccer");
                  setSoccerActiveTab(tab);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          {soccerActiveTab === "by Time" &&
            soccerDataByTime[0].map((soccer, index) => (
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
                    <li className="text-tableGreenText">{soccer.status}</li>
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
                    <li className="text-tableBlueText">{soccer.teams}</li>
                  </div>
                </ul>
                <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}

          {soccerActiveTab === "by Competition" && (
            <>
              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                Algeria Ligue 1
              </h3>
              {soccerAlgeria[0].map((soccer, index) => (
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
                      <li className="text-tableGreenText">{soccer.status}</li>
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
                      <li className="text-tableBlueText">{soccer.teams}</li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}

              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                Maxico Liga MXU23
              </h3>
              {soccerMexico[0].map((soccer, index) => (
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
                      <li className="text-tableGreenText">{soccer.status}</li>
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
                      <li className="text-tableBlueText">{soccer.teams}</li>
                    </div>
                  </ul>
                  <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                    <RiPushpin2Line size={16} color="#7e97a7" />
                  </span>
                </div>
              ))}

              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                ASIA AFC Champion League
              </h3>
              {soccerAsia[0].map((soccer, index) => (
                <div
                  key={index}
                  className="flex  bg-customWhite flex-row justify-between border-b items-center px-2 text-sm"
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
                      <li className="text-tableGreenText">{soccer.status}</li>
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
                      <li className="text-tableBlueText">{soccer.teams}</li>
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
        </div>
    );
};

export default TabSportsSoccer;