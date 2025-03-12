import React from "react";
import banner from '../../assets/KV01.jpg'
import TabMultiSoccer from "../../Components/MultiMarkets/TabMultiSoccer/TabMultiSoccer";
import Marquee from "../../Components/Marquee/Marquee";
import BetSlip from "../../Components/InPlay/BetSlip/BetSlip";
import Sports from '../../Pages/Sports/Sports';

const Soccer = () => {
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
    return (
        <div className="bg-inPlayBgColor">
      <div className="lg:flex hidden flex-row  gap-2 w-full mx-auto lg:max-w-[1300px]">
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
            <div className="flex flex-row items-center font-bold text-sm text-customWhite gap-2 px-2">
              <h2
                className="border-r px-4   cursor-pointer rounded-2xl"
               
              >
                Sports:
              </h2>
              <p>Cricket</p>
            </div>
          </div>
          <div className="w-full h-[500px] bg-customWhite shadow-2xl">
            <div className="  rounded-lg">
              <ul className="mt-2 text-tableBlueText  text-xs   list-inside">
                { 
                   
                    tabData['Soccer'].map((soccer, index) => (
                      <div className="flex flex-row items-center px-4 space-y-2 border-b border-textYellowColor  border-opacity-30 justify-between cursor-pointer">
                        <li
                          className="hover:text-customBlack cursor-pointer"
                          key={index}
                        >
                          {soccer}
                        </li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4 text-customWhite"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                   
                 
                ))}
              </ul>
            </div>
          </div>
        </div>
        
          <div className="w-full overflow-y-auto h-[500px] overflow-x-hidden">
          {/* <Marquee /> */}
            <div className=" w-full ">
              <img
                src={banner}
                alt=""
                className="w-full h-24  lg:h-auto md:h-auto "
              />
             
            </div>
            <div className=" ">
              <h3 className="px-2 py-1 text-sm bg-inPlayTabColor text-customWhite font-bold w-full  ">
                Highlights
              </h3>

             
            </div>
            <div className="overflow-x-auto overflow-y-auto ">
              
               <TabMultiSoccer/>
              
              
            </div>
          </div>
         
          
       
        <BetSlip/>
        
      </div>
     <div>
     
      <Sports/>
     </div>
     
    </div>
    );
};

export default Soccer;