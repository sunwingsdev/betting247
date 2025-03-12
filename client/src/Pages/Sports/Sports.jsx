import React from "react";


import SportsSlider from "../../Components/Sports/SportsSlider/SportsSlider";
import SportsHeader from "../../Components/Sports/SportsHeader/SportsHeader";
import Marquee from "../../Components/Marquee/Marquee";

const Sports = () => {
  const allTabs = ["by Time", "by Competition"];
  return (
    <div className="lg:hidden">
      {/* <Marquee/> */}
      <SportsSlider/>

     <SportsHeader allTabs={allTabs} />

      
    </div>
  );
};

export default Sports;
