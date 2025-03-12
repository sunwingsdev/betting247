import React from "react";
import ResultHeader from "../../Components/Result/ResultHeader/ResultHeader";
import ResultTable from "../../Components/Result/ResultTable/ResultTable";

const Result = () => {
 

  
  return (
    <div className="bg-inPlayBgColor flex flex-row gap-x-4 lg:px-4">
      <div className="w-[30%] hidden lg:block  h-min bg-customWhite shadow-lg ">
        <div className="flex flex-row justify-between   bg-logoutBlueColor ">
          <span className="  ">
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
            <h2 className=" px-4   cursor-pointer ">Check Result</h2>
          </div>
        </div>
        <div className="  text-sm bg-customWhite hover:bg-sliderButtonMediumGray hover:text-customWhite text-customBlack gap-2 px-2">
          <h2 className=" px-4   cursor-pointer "> Result</h2>
        </div>
      </div>
      <div className="w-full">
       <ResultHeader/>

        <ResultTable/>
      </div>
    </div>
  );
};

export default Result;
