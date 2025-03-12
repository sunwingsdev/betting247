import React, { useState } from 'react';
import BLogo from "../../../assets/download (2).svg";
import FLogo from "../../../assets/download (3).svg";
import { RiPushpin2Line } from "react-icons/ri";
import PLogo from "../../../assets/download.svg";

const TabsInplay = () => {
    const [isCricketOpen, setIsCricketOpen] = useState(true);
    const [isSoccerOpen, setIsSoccerOpen] = useState(true);
    const [isTennisOpen, setIsTennisOpen] = useState(true);
    const [isBasketballOpen, setIsBasketballOpen] = useState(true);
     const [isGreyhoundRacingOpen, setIsGreyhoundRacingOpen] = useState(true);
      const [isHorseRacingOpen, setIsHorseRacingOpen] = useState(true);
    const greyRoundRacingData = [
        [
          {
            id: 1,
            teams: "Virtual Dogs",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
        ],
      ];
      const horseRacing = [
        [
          {
            id: 1,
            teams: "Virtual Horses",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
        ],
      ];
    const TennisData = [
        [
          {
            id: 12,
            teams: "  Virtual Tennis ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 13,
            teams: "    M Kostyuk v Mag Linette (1)3 - 1(0)  ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
    
          {
            id: 14,
            teams: "   L Noskova v Iga Swiatek (1)2 - 3(0)  ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 15,
            teams: "    Alexandrova v Mertens (1)3 - 0(0)   ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 16,
            teams: "   Dzumhur v Martinez (1)6 - 6(1)  ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 17,
            teams: "   Barranco Cosano v Emil Ruusuvuori (0)3 - 2(0)    ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 18,
            teams: "  O Jabeur v Sof Kenin    ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 19,
            teams: "    Altmaier v Ot Virtanen (1)2 - 3(0)   ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
        ],
      ];
    const soccerData = [
        [
          {
            id: 1,
            teams: "Virtual Football Bungesliga",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 2,
            teams: "Virtual Football English League",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 3,
            teams: "Virtual Football League Mode",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 4,
            teams: "Virtual Football World Cup",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 5,
            teams: "Virtual Football Euro Cup",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 6,
            teams: "Virtual Football Asian Cup",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 7,
            teams: "Virtual Football Nationals Cup",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 8,
            teams: "Virtual Football Champions Cup",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 9,
            teams: " Al Wehdat v Al Shabab Al Ahli (0) - (2)",
            status: "In-Play",
            minute: "127'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 1.27,
            team2: 1.28,
            team3: 5.2,
            team4: 5.3,
            team5: 32,
            team6: 36,
          },
          {
            id: 11,
            teams: "El Gounah v Ismaily (1) - (0)",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 12,
            teams: " ZED FC v Ceramica ... (1) - (0)",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 13,
            teams: "   Erokspor A.S v 76 Igdir Belediyespor (1) - (1)  ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
    
          {
            id: 14,
            teams: "  Mumbai City FC v FC Goa ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 15,
            teams: "   Puskas Akademia FC U19 v Aston .. (0) - (0)   ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 16,
            teams: "  Olympiacos U19 v Girona FC U19 (0) - (0)  ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 17,
            teams: "  Real Madrid U19 v Dortmund U19 (0) - (0)   ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 18,
            teams: "   Trabzonspor U19 v Juventus U19 (0) - (0)    ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
          {
            id: 19,
            teams: "   JS Saoura v MC Oran    ",
            status: "In-Play",
            minute: "97'",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 4,
            team2: 4.1,
            team3: 2.58,
            team4: 2.6,
            team5: 2.68,
            team6: 2.74,
          },
        ],
      ];
    const cricketData = [
        [
          {
            id: 1,
            teams: "Virtual Cricket",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 2,
            teams: "Mid West Rhinos v Mashonaland Eagles",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 3,
            teams: "Sri Lanka v Australia",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            odds: {
              team1: 1.82,
              team2: 1.83,
            },
          },
          {
            id: 4,
            teams: "Oman v USA",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
    
            team1: 1.5,
            team2: 1.52,
            team3: 5.32,
            team4: 6.83,
          },
          {
            id: 5,
            teams: "India v England",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
    
            team1: 1.26,
            team2: 1.27,
          },
          {
            id: 6,
            teams: "Lahore Qalandars SRL T20 v Peshawar Zalmi..",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
            team1: 1.26,
            team2: 1.27,
            team3: 200,
            team4: 3.23,
          },
          {
            id: 7,
            teams: "Mater Dei v Edex Knights",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
          {
            id: 8,
            teams: " Rajasthan Kings v Big Boys",
            status: "In-Play",
            categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
          },
        ],
      ];
      
  const basketBallData = [
    [
      {
        id: 1,
        teams: "Virtual Basketball",
        status: "In-Play",
        categories: ["LiveFancy", "BookMaker", "Premium Cricket"],
      },
    ],
  ];
    return (
        <div className="">
                {/* Cricket */}
                <div className="   ">
                  <div
                    className="lg:flex hidden overflow-hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() => setIsCricketOpen(!isCricketOpen)}
                  >
                    <h2 className="w-full  ">Cricket</h2>
                    {/* SVG Icons for + and - */}
                    {isCricketOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden  bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                    Cricket
                  </h3>
                  {isCricketOpen && (
                    <div className="shadow-2xl bg-customWhite border-b-2 border-textYellowColor overflow-y-auto   ">
                      <div className="px-2 lg:px-0  lg:border-none mb-4 lg:mb-0 ">
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
                                  <div className="flex  flex-col-reverse  border-sliderButtonMediumGray whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {cricket.teams}
                                      </span>
                                    </div>
                                    <div className="flex flex-row items-center gap-2">
                                      <span className="bg-tableLogoColor px-[2px] py-[1px] rounded-sm ">
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
                  )}
                </div>

                {/* Soccer */}
                <div className="mt-2">
                  <div
                    className="lg:flex overflow-hidden hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() => setIsSoccerOpen(!isSoccerOpen)}
                  >
                    <h2>Soccer</h2>
                    {/* SVG Icons for + and - */}
                    {isSoccerOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                      Soccer
                    </h3>
                  {isSoccerOpen && (
                    <div className="shadow-2xl bg-customWhite border-b-2 border-textYellowColor overflow-x-auto">
                      <div className="px-2 lg:px-0  lg:border-none mb-4 lg:mb-0">
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
                            {soccerData[0].map((soccer, i) => (
                              <tr key={i} className="md:justify-items-center">
                                <td className="lg:pr-16 w-full  h-auto border-b py-2 ">
                                  <div className="flex  flex-col-reverse  border-sliderButtonMediumGray whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                    <div className="flex flex-row items-center ">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {soccer.teams}
                                      </span>
                                    </div>
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
                                        {soccer.status}
                                      </span>
                                    </div>
                                    <span className="text-tableGreenText hidden lg:table-cell px-4 lg:px-0 ">
                                      {soccer.minute}
                                    </span>
                                  </div>
                                </td>
                                <td className="hidden lg:table-cell px-2  py-2 h-auto border-b  ">
                                  <div className="flex flex-row pr-10  gap-x-2">
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
                                      {soccer.team1}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
                                      {soccer.team2}
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
                                      {soccer.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
                                      {soccer.team4}
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
                  )}
                </div>

                {/* Tennis */}
                <div className="mt-2">
                  <div
                    className="lg:flex overflow-hidden hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() => setIsTennisOpen(!isTennisOpen)}
                  >
                    <h2>Tennis</h2>
                    {/* SVG Icons for + and - */}
                    {isTennisOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                      Tennis
                    </h3>
                  {isTennisOpen && (
                    <div className="shadow-2xl bg-customWhite overflow-x-auto border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                      <div className="px-2 lg:px-0">
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
                            {TennisData[0].map((tennis, i) => (
                              <tr key={i} className="md:justify-items-center">
                                <td className="lg:pr-14 w-full  h-auto border-b py-2 ">
                                  <div className="flex  flex-col-reverse  border-customWhite whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                    <div className="flex flex-row items-center ">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {tennis.teams}
                                      </span>
                                    </div>
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
                                        {tennis.status}
                                      </span>
                                    </div>
                                    <span className="text-tableGreenText hidden lg:table-cell px-4 lg:px-0 ">
                                      {tennis.minute}
                                    </span>
                                  </div>
                                </td>
                                <td className="hidden lg:table-cell px-2  py-2 h-auto border-b  ">
                                  <div className="flex flex-row pr-10  gap-x-2">
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
                                      {tennis.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
                                      {tennis.team4}
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
                                      {tennis.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-customBlack text-center bg-tableBoxPink">
                                      {tennis.team4}
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
                  )}
                </div>
                {/* basketball */}
                <div className="mt-2">
                  <div
                    className="lg:flex overflow-hidden hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() => setIsBasketballOpen(!isBasketballOpen)}
                  >
                    <h2>BasketBall</h2>
                    {/* SVG Icons for + and - */}
                    {isBasketballOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                      Basketball
                    </h3>
                  {isBasketballOpen && (
                    <div className="shadow-2xl bg-customWhite overflow-x-auto border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                      <div className="px-2 lg:px-0">
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
                            {basketBallData[0].map((basket, i) => (
                              <tr key={i} className="md:justify-items-center">
                                <td className="lg:pr-64  w-full h-auto border-b py-2 ">
                                  <div className="flex  flex-col-reverse  border-customWhite whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                    <div className="flex flex-row items-center ">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {basket.teams}
                                      </span>
                                    </div>
                                    <div className="flex flex- items-center gap-2">
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
                                          <polygon
                                            points="10,8 16,12 10,16"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>
                                      <span className="text-tableGreenText  ">
                                        {basket.status}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="hidden lg:table-cell px-2  py-2 h-auto border-b  ">
                                  <div className="flex flex-row pr-10  gap-x-2">
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
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue">
                                      {basket.team1}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {basket.team2}
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
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue">
                                      {basket.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {basket.team4}
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
                  )}
                </div>

                {/* GrayhoundRacing */}
                <div className="lg:mt-2">
                  <div
                    className="lg:flex overflow-hidden hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() =>
                      setIsGreyhoundRacingOpen(!isGreyhoundRacingOpen)
                    }
                  >
                    <h2>Greyhound Racing</h2>
                    {/* SVG Icons for + and - */}
                    {isGreyhoundRacingOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                      GreyhoundRacing
                    </h3>
                  {isGreyhoundRacingOpen && (
                    <div className="shadow-2xl bg-customWhite overflow-x-auto border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                      <div className="px-2 lg:px-0">
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
                            {greyRoundRacingData[0].map((horse, i) => (
                              <tr key={i} className="md:justify-items-center">
                                <td className="lg:pr-[287px] w-full h-auto border-b py-2 ">
                                  <div className="flex  flex-col-reverse  border-customWhite whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                    <div className="flex flex-row items-center ">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {horse.teams}
                                      </span>
                                    </div>
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
                                        {horse.status}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="hidden lg:table-cell px-2  py-2 h-auto border-b  ">
                                  <div className="flex flex-row pr-10  gap-x-2">
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
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue">
                                      {horse.team1}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {horse.team2}
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
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue">
                                      {horse.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {horse.team4}
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
                  )}
                </div>
                {/* horseRacing */}
                <div className="lg:mt-2">
                  <div
                    className="lg:flex hidden overflow-hidden items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
                    onClick={() => setIsHorseRacingOpen(!isHorseRacingOpen)}
                  >
                    <h2 className="w-full " >Horse Racing</h2>
                    {/* SVG Icons for + and - */}
                    {isHorseRacingOpen ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="white"
                        className="w-3 h-auto border border-customWhite"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </div>
                  <h3 className=" lg:hidden bg-inPlayTabColor w-full  text-center  px-2 py-1 text-sm font-bold text-customWhite">
                      Horse Racing
                    </h3>
                  {isHorseRacingOpen && (
                    <div className="shadow-2xl bg-customWhite overflow-x-auto border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                      <div className="px-2 lg:px-0">
                     
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
                            {horseRacing[0].map((horses, i) => (
                              <tr key={i} className="md:justify-items-center">
                                <td className="lg:pr-[280px] w-full  h-auto border-b py-2 ">
                                  <div className="flex  flex-col-reverse  border-customWhite whitespace-nowrap border-opacity-50 text-sm lg:text-md lg:flex-row gap-x-5">
                                    <div className="flex flex-row items-center ">
                                      <span className="text-tableGreenText ">
                                        <svg
                                          className="w-3 h-3 "
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
                                      <span className="text-tableBlueText font-bold text-xs lg:text-md">
                                        {horses.teams}
                                      </span>
                                    </div>
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
                                        {horses.status}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="hidden lg:table-cell px-2  py-2 h-auto border-b  ">
                                  <div className="flex flex-row pr-10 gap-x-2">
                                    <img
                                      src={PLogo}
                                      alt=""
                                      className="w-4 h-auto bg-tablePLogoColor"
                                    />
                                    <div className="flex pr-4 flex-row">
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
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue">
                                      {horses.team1}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {horses.team2}
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
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxBlue">
                                      {horses.team3}
                                    </p>
                                    <p className="w-[50px] h-[22px] text-center bg-tableBoxPink">
                                      {horses.team4}
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
                  )}
                </div>
              </div>
    );
};

export default TabsInplay;