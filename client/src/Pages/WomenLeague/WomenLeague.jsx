import React from "react";
import { Link} from "react-router-dom";
import BetSlip from "../../Components/InPlay/BetSlip/BetSlip";
import WomenLeagueHeader from "../../Components/WomenLeague/WomenLeagueHeader/WomenLeagueHeader";
import Marquee from "../../Components/Marquee/Marquee";
import WomenLeagueTable from "../../Components/WomenLeague/WomenLeagueTable/WomenLeagueTable";

const WommenLeague = () => {
  
  

  
   
               
  return (
    <div className="bg-inPlayBgColor">
    <div className="flex  flex-row  gap-2 w-full mx-auto lg:max-w-[1300px]">
      <div className="w-[30%] hidden lg:block">
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
          <div className=" font-bold text-sm text-customWhite gap-2 px-2">
            <Link to="/multimarket">
              <h2 className="border-r px-4   cursor-pointer rounded-2xl">
                Sports:
              </h2>
            </Link>
            
          </div>
          
        </div>
      </div>

      <div className="w-full lg:w-[50%] ">
        {/* <Marquee/> */}
        <WomenLeagueHeader/>
<WomenLeagueTable/>
        
      </div>

      <BetSlip/>
    </div>
    </div>
  );
};

export default WommenLeague;
