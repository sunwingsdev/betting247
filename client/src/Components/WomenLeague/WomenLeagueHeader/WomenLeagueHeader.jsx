import React from 'react';
import { RiPushpin2Line } from "react-icons/ri";
import { IoReload } from "react-icons/io5";
import {useNavigate } from "react-router-dom";

const WomenLeagueHeader = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="bg-inPlayTabColor text-sm lg:text-lg whitespace-nowrap py-1  flex flex-row justify-between items-center px-4 ">
          <div className="flex flex-row items-center justify-start gap-2 ">
            <span className=" w-6 h-6 flex items-center text-tablePinLogoColor  border border-tablePinLogoColor rounded-full">
              <RiPushpin2Line size={16} />
            </span>
            <h3 className="   text-customWhite  font-bold w-full  ">
              Women's Premier League
            </h3>
            <button className="bg-customWhite font-bold rounded-md px-2">
              winner
            </button>
          </div>
          <span className="hidden lg:block">
          <IoReload className="text-customWhite  " />
          </span>
          <span className="lg:hidden"  onClick={() => navigate(-1)} >
          <IoReload className="text-customWhite  " />
          </span>
        </div>
        <div className="flex flex-row items-center bg-sliderButtonMediumGray py-1  shadow-2xl gap-2 px-4">
          <span className="p-[1px] bg-tableGreenText rounded-sm text-customWhite"
         
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-4 h-auto "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m5-10a9 9 0 11-6.627-2.628M5.25 5.25l1.5 1.5M18.75 5.25l-1.5 1.5"
              />
            </svg>
          </span>
          <h3 className="text-customWhite text-sm lg:text-md">In Play</h3>
        </div>
        </div>
    );
};

export default WomenLeagueHeader;