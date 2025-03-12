import React, { useState } from 'react';
import { RiPushpin2Line } from "react-icons/ri";

const TabSportsTennis = ({allTabs}) => {

  const [tennisActiveTab, setTennisActiveTab] = useState("by Time");
  const [activeTab, setActiveTab] = useState("Cricket");

    
      const tennisWtaDubai = [
        [
          {
            id: 1,
            teams: "Sof Kenin v M Kostyuk",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.78,
              team2: 2.81,
              team3: 1.56,
              team4: 1.57,
            },
          },
          {
            id: 2,
            teams: "L Sansonova v J Pegula",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.14,
              team2: 1.15,
              team3: 7.8,
              team4: 8.2,
            },
          },
          {
            id: 3,
            teams: "Azarenka v lga Swiatek",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 50,
              team2: 100,
              team3: 1.01,
              team4: 1.02,
            },
          },
          {
            id: 4,
            teams: "A Potapova v D Yastremska",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.21,
              team2: 1.24,
              team3: 5.1,
              team4: 5.6,
            },
          },
          {
            id: 5,
            teams: "A Sabalenka v V Kudermetova",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.14,
              team2: 2.18,
              team3: 1.86,
              team4: 1.88,
            },
          },
          {
            id: 6,
            teams: "Bot Van de Zandschulp v Er Kirkin",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.1,
              team2: 1.12,
              team3: 9.4,
              team4: 11,
            },
          },
          {
            id: 7,
            teams: "C Tauson v Svitolina",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.22,
              team2: 2.26,
              team3: 1.8,
              team4: 1.82,
            },
          },
          {
            id: 8,
            teams: "C Gauf v McCartn Kessler",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.21,
              team2: 1.22,
              team3: 5.6,
              team4: 5.8,
            },
          },
          {
            id: 9,
            teams: "E Raducanu v Mir Andreeva",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.34,
              team2: 2.38,
              team3: 1.73,
              team4: 1.74,
            },
          },
          {
            id: 10,
            teams: "Q Zheng v Pe Stearns",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 3.3,
              team2: 3.35,
              team3: 1.42,
              team4: 1.43,
            },
          },
        ],
      ];
      
      const tennisDataByTime = [
        [
          {
            id: 1,
            teams: "Kovalik v P Kotov",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.78,
              team2: 2.81,
              team3: 1.56,
              team4: 1.57,
            },
          },
          {
            id: 2,
            teams: "Fucsovics v Vavassori",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.14,
              team2: 1.15,
              team3: 7.8,
              team4: 8.2,
            },
          },
          {
            id: 3,
            teams: "Da Merida v Kukushkin",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 50,
              team2: 100,
              team3: 1.01,
              team4: 1.02,
            },
          },
          {
            id: 4,
            teams: "Lu Nardi v Uchiyama",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.21,
              team2: 1.24,
              team3: 5.1,
              team4: 5.6,
            },
          },
          {
            id: 5,
            teams: "Atmane v Ot Virtanen",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.14,
              team2: 2.18,
              team3: 1.86,
              team4: 1.88,
            },
          },
          {
            id: 6,
            teams: "Bot Van de Zandschulp v Er Kirkin",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.1,
              team2: 1.12,
              team3: 9.4,
              team4: 11,
            },
          },
          {
            id: 7,
            teams: "Misolic v Da Rincon",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.22,
              team2: 2.26,
              team3: 1.8,
              team4: 1.82,
            },
          },
          {
            id: 8,
            teams: "Carreno Busta v Ben Hassan",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 1.21,
              team2: 1.22,
              team3: 5.6,
              team4: 5.8,
            },
          },
          {
            id: 9,
            teams: "A Anisimova v Ostapenko",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 2.34,
              team2: 2.38,
              team3: 1.73,
              team4: 1.74,
            },
          },
          {
            id: 10,
            teams: "Ziz Bergs v Humbert",
            status: "In-Play",
            categories: ["Fancy", "BookMaker", "Live"],
            odds: {
              team1: 3.3,
              team2: 3.35,
              team3: 1.42,
              team4: 1.43,
            },
          },
        ],
      ];
    return (
        <div>
          <div className="flex  bg-customWhite text-sm w-full py-1  max-w-3xl rounded-md border px-4 border-customWhite flex-row items-center justify-center lg:bg-none whitespace-nowrap">
            {allTabs.map((tab, index) => (
              <button
                key={index}
                className={`w-full lg:w-[20%] border-r border-customWhite rounded-md py-1 px-2 lg:px-0 text-customWhite font-bold shadow-2xl ${
                  tennisActiveTab === tab
                    ? " bg-textYellowColor !text-customWhite font-bold  lg:text-customWhite"
                    : " bg-signUpColor"
                }`}
                onClick={() => {
                  setActiveTab("Tennis");
                  setTennisActiveTab(tab);
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          {tennisActiveTab === "by Time" &&
            tennisDataByTime[0].map((tennis, index) => (
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
                    <li className="text-tableGreenText">{tennis.status}</li>
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
                    <li className="text-tableBlueText">{tennis.teams}</li>
                  </div>
                </ul>
                <span className="w-6 h-6 flex items-center justify-center border border-tablePinLogoColor rounded-full">
                  <RiPushpin2Line size={16} color="#7e97a7" />
                </span>
              </div>
            ))}

          {tennisActiveTab === "by Competition" && (
            <>
              <h3 className=" font-bold bg-inPlayTabColor text-customWhite text-sm py-1  px-2">
                WTA - SINGLES DUBAI(UNITED ARAB EMIRATES)
              </h3>
              {tennisWtaDubai[0].map((soccer, index) => (
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
    );
};

export default TabSportsTennis;