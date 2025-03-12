import React, { useEffect, useRef, useState } from 'react';
import { RiPushpin2Line } from "react-icons/ri";

const TabsTomorrow = () => {
const [isTomorrowModalOpen,setIsTomorrowModalOpen]=useState(false);

    const tomorrowDropdownRef =useRef(null);
      
      const tomorrowButtonRef = useRef(null);

      const tomorrowData = [
        [
          { time: "12:30:00 AM", sport: "Soccer", match: "MC Alger v Kabylie" },
          {
            time: "1:00:00 AM",
            sport: "Tennis",
            match: "Mac McDonald v Davidovich Fokina",
          },
          { time: "1:30:00 AM", sport: "Tennis", match: "Car Branstine v Kawa" },
          { time: "1:30:00 AM", sport: "Soccer", match: "FC Twente v Bodo Glimt" },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "Borac Banja Luka v Olimpija",
          },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "Az Alkmaar v Galatasaray",
          },
          { time: "1:30:00 AM", sport: "Soccer", match: "PAOK v FCSB" },
          { time: "1:30:00 AM", sport: "Soccer", match: "Port Vale v Notts Co" },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "Real Madrid FC (W) v Real Sociedad (W)",
          },
          { time: "1:30:00 AM", sport: "Soccer", match: "Omonia v Paphos FC" },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "Molynes United FC v Mount Pleasant FC",
          },
          { time: "1:30:00 AM", sport: "Soccer", match: "Porto v Roma" },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "Paraguay U20 v Uruguay U20",
          },
          { time: "1:30:00 AM", sport: "Soccer", match: "Gent v Betis" },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "FC Copenhagen v FC Heidenheim",
          },
          {
            time: "2:15:00 AM",
            sport: "Soccer",
            match: "Lanus v Gimnasia La Plata",
          },
          { time: "3:00:00 AM", sport: "Tennis", match: "Navone v Hol Rune" },
          {
            time: "3:00:00 AM",
            sport: "Cricket",
            match: "Auckland Aces v Northern Brave",
          },
          {
            time: "3:00:00 AM",
            sport: "Cricket",
            match: "Central Stags v Canterbury Kings",
          },
          {
            time: "3:00:00 AM",
            sport: "Cricket",
            match: "Wellington Firebirds v Otago Volts",
          },
          {
            time: "3:00:00 AM",
            sport: "Tennis",
            match: "Iryn Shymanovich v F Jones",
          },
          { time: "3:00:00 AM", sport: "Soccer", match: "La Equidad v Envigado" },
          {
            time: "3:00:00 AM",
            sport: "Soccer",
            match: "Cavalier v Montego Bay United",
          },
    
          { time: "12:30:00 AM", sport: "Soccer", match: "MC Alger v Kabylie" },
          {
            time: "1:00:00 AM",
            sport: "Tennis",
            match: "Mac McDonald v Davidovich Fokina",
          },
          { time: "1:30:00 AM", sport: "Tennis", match: "Car Branstine v Kawa" },
          { time: "1:30:00 AM", sport: "Soccer", match: "FC Twente v Bodo Glimt" },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "Borac Banja Luka v Olimpija",
          },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "Az Alkmaar v Galatasaray",
          },
          { time: "1:30:00 AM", sport: "Soccer", match: "PAOK v FCSB" },
          { time: "1:30:00 AM", sport: "Soccer", match: "Port Vale v Notts Co" },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "Real Madrid FC (W) v Real Sociedad (W)",
          },
          { time: "1:30:00 AM", sport: "Soccer", match: "Omonia v Paphos FC" },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "Molynes United FC v Mount Pleasant FC",
          },
          { time: "1:30:00 AM", sport: "Soccer", match: "Porto v Roma" },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "Paraguay U20 v Uruguay U20",
          },
          { time: "1:30:00 AM", sport: "Soccer", match: "Gent v Betis" },
          {
            time: "1:30:00 AM",
            sport: "Soccer",
            match: "FC Copenhagen v FC Heidenheim",
          },
          {
            time: "2:15:00 AM",
            sport: "Soccer",
            match: "Lanus v Gimnasia La Plata",
          },
          { time: "3:00:00 AM", sport: "Tennis", match: "Navone v Hol Rune" },
          {
            time: "3:00:00 AM",
            sport: "Cricket",
            match: "Auckland Aces v Northern Brave",
          },
          {
            time: "3:00:00 AM",
            sport: "Cricket",
            match: "Central Stags v Canterbury Kings",
          },
          {
            time: "3:00:00 AM",
            sport: "Cricket",
            match: "Wellington Firebirds v Otago Volts",
          },
          {
            time: "3:00:00 AM",
            sport: "Tennis",
            match: "Iryn Shymanovich v F Jones",
          },
          { time: "3:00:00 AM", sport: "Soccer", match: "La Equidad v Envigado" },
          {
            time: "3:00:00 AM",
            sport: "Soccer",
            match: "Cavalier v Montego Bay United",
          },
        ],
      ];
       useEffect(() => {
          const handleTomorrowClickOutside = (event) => {
            if (
              tomorrowDropdownRef.current &&
              !tomorrowDropdownRef.current.contains(event.target) &&
              tomorrowButtonRef.current &&
              !tomorrowButtonRef.current.contains(event.target)
            ) {
              setIsTomorrowModalOpen(false);
            }
          };
        
          if (isTomorrowModalOpen) {
            document.addEventListener("mousedown", handleTomorrowClickOutside);
          }
        
          return () => {
            document.removeEventListener("mousedown", handleTomorrowClickOutside);
          };
        }, [isTomorrowModalOpen]);
        
    return (
        <div className="">
                <div className="lg:flex hidden bg-sliderButtonMediumGray flex-row text-sm border-b border-customBlack py-5 px-3 justify-between ">
                  <div className="flex  flex-row  items-center gap-6">
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
                  <div className="relative">
                    <button
                      ref={tomorrowButtonRef}
                      className="px-8 py-1 bg-customWhite rounded-md shadow-2xl"
                      onClick={() => setIsTomorrowModalOpen((prev) => !prev)}
                    >
                      {isTomorrowModalOpen ? "Close" : "Filter"}
                    </button>
                    {isTomorrowModalOpen && (
                      <div
                        ref={tomorrowDropdownRef}
                        className="absolute top-7 right-5 flex items-center justify-center  bg-opacity-50"
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
                    <table className="border-b-2 border-textYellowColor lg:border-none mb-4 lg:mb-0">
                      <thead></thead>
                      <tbody>
                        {tomorrowData[0].map((tomorrow, index) => (
                          <tr key={index} className="text-sm">
                            <td className="pr-16 whitespace-nowrap font-bold border-b">
                              {tomorrow.time}
                            </td>
                            <td className="pr-4 border-b font-light">
                              {tomorrow.sport}
                            </td>
                            <td className="pr-4 whitespace-nowrap border-b">
                              --
                            </td>
                            <td className="border-b  text-tableBlueText font-bold">
                              {tomorrow.match}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="lg:hidden border-b-2   border-textYellowColor lg:border-none mb-4 lg:mb-0 ">
                    <h3 className="  bg-inPlayTabColor w-full  text-center lg:text-left px-2 py-1 text-sm font-bold text-customWhite">
                      Cricket
                    </h3>
                    <div className="px-2 ">
                      <table className="">
                        <thead></thead>
                        <tbody className="">
                          {tomorrowData[0]
                            .filter((match) => match.sport === "Cricket")
                            .map((match, index) => (
                              <tr key={index} className="text-sm    ">
                                <td className="py-2 w-full  ">
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
                                      <p className="text-tableBlueText whitespace-nowrap font-bold">
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
                          {tomorrowData[0]
                            .filter((match) => match.sport === "Soccer")
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
                      Tennis
                    </h3>
                    <div className="px-2">
                      <table className="">
                        <thead></thead>
                        <tbody>
                          {tomorrowData[0]
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

export default TabsTomorrow;