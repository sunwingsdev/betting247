import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const ResultHeader = () => {
  const [dateTime, setDateTime] = useState("2025-02-23T00:01");
  const [dateTimeTwo, setDateTimeTwo] = useState("2025-02-23T00:01");
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    console.log("Search Input:", event.target.value);
  };
  return (
    <div>
      <h3 className="font-bold bg-inPlayTabColor text-customWhite lg:text-customBlack lg:bg-transparent text-center py-1 lg:text-left">
        Check Result
      </h3>

      <div className=" lg:flex lg:flex-row flex  flex-col   lg:px-2 mt-2 border-b border-sliderButtonMediumGray  gap-2 w-full bg-logoutBlueSoftColor whitespace-nowrap  py-3 lg:items-center text-sm">
        <div className="lg:space-x-2 gap-x-1 flex flex-row  items-center justify-center  ">
          <span className="hidden lg:block">Period</span>
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(e) => {
              setDateTime(e.target.value);
              console.log("Selected Date & Time:", e.target.value);
            }}
            className="border w-[44%] md:w-auto  lg:w-auto border-inPlayTabColor px-1 lg:px-1 text-[11px]  lg:text-xs py-1 border-t-4  rounded-t-md shadow-sm"
          />

          <span className="text-xs">to</span>
          <input
            type="datetime-local"
            value={dateTimeTwo}
            onChange={(e) => {
              setDateTimeTwo(e.target.value);
              console.log("Selected Date & Time Two:", e.target.value);
            }}
            className="border w-[44%] md:w-auto lg:w-auto border-inPlayTabColor px-1 lg:px-1 text-[11px] lg:text-xs py-1 border-t-4  rounded-t-md shadow-sm"
          />
        </div>
        <div className="flex space-x-2 justify-center lg:justify-normal  px-2 ">
          {[
            { label: "Cricket" },
            { label: "Soccer" },
            { label: "Tennis" },
            { label: "Virtual T10" },
          ].map((btn, index) => (
            <button
              key={index}
              className={`px-2 py-1 border border-inPlayTabColor font-medium ${
                index === 3
                  ? "bg-oneClickBetColor text-textYellowColor hover:bg-commonYellowColor hover:text-customBlack"
                  : "bg-commonYellowColor text-customBlack "
              } text-sm rounded shadow`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-end my-4  relative">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search..."
          className=" px-8 border border-t-2 border-sliderButtonMediumGray placeholder:text-sm rounded-md"
          value={searchText}
          onChange={handleSearch}
        />

        <span className="absolute top-2 right-56">
          <IoIosSearch />
        </span>
      </div>
    </div>
  );
};

export default ResultHeader;
