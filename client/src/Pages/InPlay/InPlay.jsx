import React from "react";
import InplayTabs from "../../Components/InPlay/InplayTabs/InplayTabs";
import BetSlip from "../../Components/InPlay/BetSlip/BetSlip";
import Marquee from "../../Components/Marquee/Marquee";

const InPlay = () => {
  return (
    <div className="lg:p-4 bg-inPlayBgColor lg:flex flex-row justify-between gap-2 mx-auto lg:max-w-[1420px]  ">
      <div className="lg:w-3/4 w-full max-w-3xl  ">
        {/* <Marquee /> */}

        <InplayTabs />
      </div>
      <BetSlip />
    </div>
  );
};

export default InPlay;
