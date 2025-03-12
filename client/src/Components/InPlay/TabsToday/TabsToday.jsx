import React, { useEffect, useRef, useState } from 'react';
import { RiPushpin2Line } from "react-icons/ri";

const TabsToday = () => {
    const buttonRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
          ) {
            setIsOpen(false);
          }
        };
      
        if (isOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        }
      
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isOpen]);
    const todayData = [
        [
          {
            time: "5:00:00 PM",
            sport: "Soccer",
            match: "Iran U20 v Indonesia U20",
          },
          {
            time: "5:00:00 PM",
            sport: "Soccer",
            match: "Jordan U20 v Saudi Arabia U20",
          },
          {
            time: "5:00:00 PM",
            sport: "Tennis",
            match: "Diez v Ni Alvarez Varona",
          },
          {
            time: "5:30:00 PM",
            sport: "Cricket",
            match: "Joburg Super Kings SRL T20 v Paarl ...",
          },
          {
            time: "5:30:00 PM",
            sport: "Soccer",
            match: "Tatran Lip Mikulas v Podbeskidzie B-B",
          },
          {
            time: "5:30:00 PM",
            sport: "Soccer",
            match: "Port FC v Jeonbuk Motors FC",
          },
          { time: "6:00:00 PM", sport: "Tennis", match: "Fucsovics v Durasovic" },
          { time: "6:00:00 PM", sport: "Tennis", match: "Borges v Ziz Bergs" },
          { time: "6:00:00 PM", sport: "Tennis", match: "Alexandrova v J Pegula" },
          { time: "6:10:00 PM", sport: "Tennis", match: "Koepfer v Ch Rodesch" },
          { time: "6:30:00 PM", sport: "Soccer", match: "AS Gabes v US Tataouine" },
          {
            time: "6:30:00 PM",
            sport: "Soccer",
            match: "JS Omrane v Olympique De Beja",
          },
          {
            time: "6:30:00 PM",
            sport: "Soccer",
            match: "Etoile Sportive Sahel v AS Solimane",
          },
          { time: "7:10:00 PM", sport: "Tennis", match: "Atmane v Bra Holt" },
          { time: "7:10:00 PM", sport: "Tennis", match: "Galarneau v Vavassori" },
          { time: "7:10:00 PM", sport: "Tennis", match: "Zh Zhang v Hurkacz" },
          {
            time: "7:30:00 PM",
            sport: "Cricket",
            match: "Peshawar Zalmi SRL T20 v Multan...",
          },
          {
            time: "7:30:00 PM",
            sport: "Soccer",
            match: "Sanliurfaspor v Sakaryaspor",
          },
          {
            time: "7:30:00 PM",
            sport: "Soccer",
            match: "Jamshedpur FC v Northeast United",
          },
          { time: "7:30:00 PM", sport: "Soccer", match: "Future FC v El Geish" },
          {
            time: "7:30:00 PM",
            sport: "Tennis",
            match: "E Rybakina v Iga Swiatek",
          },
          {
            time: "7:30:00 PM",
            sport: "Soccer",
            match: "Muangthong Utd v Lion City Sailors FC",
          },
          { time: "7:40:00 PM", sport: "Soccer", match: "Al-Akhdoud v Dhamk" },
          {
            time: "8:30:00 PM",
            sport: "Soccer",
            match: "ES Mostaganem v CS Constantine",
          },
          {
            time: "8:30:00 PM",
            sport: "Soccer",
            match: "Al Yarmouk v Al Nasar (KUW)",
          },
          {
            time: "8:55:00 PM",
            sport: "Soccer",
            match: "Al-Shabab (KSA) v Al-Quadisiya (KSA)",
          },
          { time: "9:00:00 PM", sport: "Tennis", match: "O Jabeur v Ostapenko" },
          {
            time: "9:30:00 PM",
            sport: "Cricket",
            match: "MI Cape Town SRL T20 v Durban...",
          },
          { time: "10:00:00 PM", sport: "Tennis", match: "Navone v Hol Rune" },
          { time: "10:00:00 PM", sport: "Tennis", match: "Jo Fonseca v Coria" },
          {
            time: "10:30:00 PM",
            sport: "Tennis",
            match: "M Kostyuk v A Anisimova",
          },
          { time: "10:30:00 PM", sport: "Tennis", match: "Medvedev v Herbert" },
          {
            time: "10:30:00 PM",
            sport: "Soccer",
            match: "Umraniyespor v Istanbulspor",
          },
          {
            time: "10:30:00 PM",
            sport: "Soccer",
            match: "Ankaragucu v Fatih ..",
          },
          {
            time: "10:30:00 PM",
            sport: "Soccer",
            match: "ENPPI v Al Ittihad (EGY)",
          },
          {
            time: "10:30:00 PM",
            sport: "Soccer",
            match: "Stellenbosch FC v Polokwane..",
          },
          { time: "11:00:00 PM", sport: "Soccer", match: "Al Ahli v Al Nassr" },
          {
            time: "11:10:00 PM",
            sport: "Tennis",
            match: "Martinez v D Schwartzman",
          },
          {
            time: "11:15:00 PM",
            sport: "Soccer",
            match: "Midtjylland v Real Sociedad",
          },
          {
            time: "11:15:00 PM",
            sport: "Soccer",
            match: "Vikingur Reykjavik v Panathinaikos",
          },
          { time: "11:15:00 PM", sport: "Soccer", match: "Ferencvaros v Plzen" },
          {
            time: "11:15:00 PM",
            sport: "Soccer",
            match: "Union St Gilloise v Ajax",
          },
          { time: "11:15:00 PM", sport: "Soccer", match: "NK Celje v APOEL" },
          {
            time: "11:15:00 PM",
            sport: "Soccer",
            match: "FK Backa Topola v Jagiellonia..",
          },
          {
            time: "11:15:00 PM",
            sport: "Soccer",
            match: "Molde v Shamrock Rovers",
          },
          {
            time: "11:15:00 PM",
            sport: "Soccer",
            match: "Fenerbahce v Anderlecht",
          },
          {
            time: "11:30:00 PM",
            sport: "Cricket",
            match: "Chennai Super Kings SRL T20 v Delhi...",
          },
          {
            time: "11:30:00 PM",
            sport: "Soccer",
            match: "Levante UD (W) v Granada (W)",
          },
          { time: "11:30:00 PM", sport: "Tennis", match: "Opelka v Nakashima" },
          { time: "11:40:00 PM", sport: "Tennis", match: "Struff v Grenier" },
        ],
      ];
    return (
        <div className="">
                <div className="lg:flex hidden bg-sliderButtonMediumGray flex-row text-sm border-b border-customBlack py-5 px-3 justify-between ">
                  <div className="lg:flex  flex-row  items-center gap-6">
                    <h3 className="font-bold">Sports-Filter:</h3>
                    <div className="flex flex-row items-center gap-1">
                      <p>Cricket</p>
                      <div className="flex flex-row items-center">
                        <span className="text-customWhite ">
                          <svg
                            className="w-3 h-3 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                          >
                            <circle cx="50" cy="50" r="40" fill="gray" />
                          </svg>
                        </span>
                        <p>Soccer</p>
                      </div>
                      <div className="flex flex-row items-center">
                        <span className="text-customWhite ">
                          <svg
                            className="w-3 h-3 "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                          >
                            <circle cx="50" cy="50" r="40" fill="gray" />
                          </svg>
                        </span>
                        <p>Tennis</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative ">
                    <button
                      ref={buttonRef}
                      className="px-8 py-1 bg-customWhite rounded-md shadow-2xl"
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      {isOpen ? "Close" : "Filter"}
                    </button>
                    {isOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute top-7  right-5 flex items-center justify-center  bg-opacity-50"
                      >
                        <div className="bg-customWhite p-6 rounded-lg shadow-lg w-80">
                          <ul className=" grid grid-cols-2  border-b border-customBlack">
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>All </li>
                            </div>
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>Soccer </li>
                            </div>
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>Tennis </li>
                            </div>
                            <div className="flex flex-row gap-2">
                              <input type="checkbox" name="" id="" />
                              <li>Cricket </li>
                            </div>
                          </ul>
                          <div className="grid grid-cols-2 pt-3 justify-items-start">
                            <button className="px-8 py-1 rounded-sm bg-customBlack text-textYellowColor">
                              Save
                            </button>
                            <button className="px-8 py-1 rounded-sm bg-customWhite shadow-2xl">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full lg:mt-4 bg-customWhite shadow-2xl">
                  <div className="lg:pt-4   overflow-y-auto hidden lg:table-cell">
                    <table>
                      <thead></thead>
                      <tbody>
                        {todayData[0].map((today, index) => (
                          <tr key={index} className="text-sm">
                            <td className="pr-16 font-bold border-b">
                              {today.time}
                            </td>
                            <td className="pr-4 border-b font-light">
                              {today.sport}
                            </td>
                            <td className="pr-4 border-b">--</td>
                            <td className="border-b  text-tableBlueText font-bold">
                              {today.match}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="lg:hidden border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0 ">
                    <h3 className="  bg-inPlayTabColor w-full  text-center lg:text-left px-2 py-1 text-sm font-bold text-customWhite">
                      Cricket
                    </h3>
                    <div className="px-2">
                      <table className="">
                        <thead></thead>
                        <tbody>
                          {todayData[0]
                            .filter((match) => match.sport === "Cricket")
                            .map((match, index) => (
                              <tr key={index} className="text-sm">
                                <td className="py-2 w-full">
                                  <div className="flex flex-col ">
                                    <div className="flex gap-1 flex-row items-center">
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

                                      <h3 className=" text-tableGreenText ">
                                        {match.time}
                                      </h3>
                                    </div>
                                    <div className="flex flex-row items-center">
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
                                      <p className="text-tableBlueText font-bold">
                                        {match.match}
                                      </p>
                                    </div>
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
                  <div className="lg:hidden border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                    <h3 className="  bg-inPlayTabColor w-full  text-center lg:text-left px-2 py-1 text-sm font-bold text-customWhite">
                      Soccer
                    </h3>
                    <div className="px-2">
                      <table className="">
                        <thead></thead>
                        <tbody>
                          {todayData[0]
                            .filter((match) => match.sport === "Soccer")
                            .map((match, index) => (
                              <tr key={index} className="text-sm">
                                <td className="py-2 w-full">
                                  <div className="flex flex-col ">
                                    <div className="flex gap-1 items-center flex-row">
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

                                      <h3 className=" text-tableGreenText ">
                                        {match.time}
                                      </h3>
                                    </div>
                                    <div className="flex flex-row items-center">
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
                                      <p className="text-tableBlueText font-bold">
                                        {match.match}
                                      </p>
                                    </div>
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
                  <div className="lg:hidden border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                    <h3 className="  bg-inPlayTabColor w-full  text-center lg:text-left px-2 py-1 text-sm font-bold text-customWhite">
                      Tennis
                    </h3>
                    <div className="px-2">
                      <table className="">
                        <thead></thead>
                        <tbody>
                          {todayData[0]
                            .filter((match) => match.sport === "Tennis")
                            .map((match, index) => (
                              <tr key={index} className="text-sm">
                                <td className="py-2 w-full">
                                  <div className="flex flex-col ">
                                    <div className="flex gap-1 flex-row items-center">
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

                                      <h3 className=" text-tableGreenText ">
                                        {match.time}
                                      </h3>
                                    </div>
                                    <div className="flex flex-row items-center">
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
                                      <p className="text-tableBlueText font-bold">
                                        {match.match}
                                      </p>
                                    </div>
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
              </div>
    );
};

export default TabsToday;