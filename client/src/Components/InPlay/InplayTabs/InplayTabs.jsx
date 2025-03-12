import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TabsInplay from '../TabsInplay/TabsInplay';
import TabsToday from '../TabsToday/TabsToday';
import TabsTomorrow from '../TabsTomorrow/TabsTomorrow';

const InplayTabs = () => {
    const [activeTab, setActiveTab] = useState("In-Play");
    const tabs = ["In-Play", "Today", "Tomorrow", "Result"];
    return (
        <div>
           <div className="bg-footer-gradient lg:bg-none p-2  lg:px-0">
                  <div className="flex w-auto flex-row  border border-customWhite rounded-md lg:border-none lg:rounded-none  items-center justify-center   lg:bg-none   lg:p-0 lg:justify-start whitespace-nowrap   ">
                     {tabs.map((tab, index) =>
                      (
                       index === tabs.length-1 ?
                        (
                         <Link
                         key={tab}
                         to="/login"
                        // to='/result'
                         className="w-full lg:w-[20%] py-1 px-2 lg:px-0 text-customWhite border-r rounded-r-md border-customWhite lg:border lg:border-customBlack lg:text-customBlack lg:rounded-sm lg:bg-customWhite bg-smallDeviceTabColor lg:hidden text-center"
                       >
                         {tab}
                       </Link>
                     )
                      : 
                      (
                       <button
                       key={tab}
                       className={`w-full lg:w-[20%] py-1 px-2 lg:px-0  text-customWhite border-r   border-customWhite ${index===0 ? 'rounded-l-md':''}   lg:border lg:border-customBlack lg:text-customBlack      lg:rounded-sm  ${
                         activeTab === tab
                           ? " bg-customWhite lg:bg-inPlayTabColor !text-customBlack font-bold  lg:!text-customWhite   "
                           : "lg:bg-customWhite bg-smallDeviceTabColor"
                       } `}
                       onClick={() => setActiveTab(tab)}
                     >
                       {tab}
                     </button>
                     )
                      
                      
                     ))}
                   </div>
                  </div>
                  <div className="lg:h-[900px] overflow-y-auto   ">
          <div className="  lg:pt-4 ">
            {activeTab === "In-Play" && (
              <TabsInplay/>
            )}
          </div>
          <div className="">
            {activeTab === "Today" && (
              <TabsToday/>
              
            )}
          </div>
          <div className="">
            {activeTab === "Tomorrow" && (
              <TabsTomorrow/>
            )}
          </div>
        </div> 
        </div>
    );
};

export default InplayTabs;