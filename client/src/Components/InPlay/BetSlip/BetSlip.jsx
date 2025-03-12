import React, { useState } from "react";
import { IoReload } from "react-icons/io5";

const BetSlip = () => {
  const [isBetSlipOpen, setIsBetSlipOpen] = useState(true);
  const [BetOpen, setBetOpen] = useState(true);
  const [checkboxes, setCheckboxes] = useState({
    betInfo: false,
    consolidate: false,
    avgOdds: false,
  });

  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("Selected Value:", event.target.value);
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
    console.log(`${name}: ${checked}`);
  };
  const checkboxOptions = [
    { name: "betInfo", label: "Bet Info" },
    { name: "consolidate", label: "Consolidate" },
    { name: "avgOdds", label: "Average Odds" },
  ];
  return (
    <div className="relative w-1/4 whitespace-nowrap text-sm hidden lg:block">
      <div className="mb-2">
        <div
          className="flex items-center justify-between w-full text-customWhite px-2 bg-inPlayTabColor cursor-pointer"
          onClick={() => setIsBetSlipOpen(!isBetSlipOpen)}
        >
          <h2>Bet Slip</h2>
          {/* SVG Icons for + and - */}
          {isBetSlipOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="white"
              className="w-3 h-auto border border-customWhite "
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="white"
              className="w-3 h-auto border border-customWhite "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          )}
        </div>

        {isBetSlipOpen && (
          <div className="w-full bg-customWhite  h-[300px]  shadow-2xl"></div>
        )}
      </div>
      {/* <div
        className="flex items-center justify-between w-full text-customWhite  bg-inPlayTabColor cursor-pointer"
        onClick={() => setBetOpen(!BetOpen)}
      >
        <div className="flex flex-row items-center gap-2">
          <span className="bg-customBlack py-[6px]  lg:py-1 px-1 text-customWhite lg:text-sliderButtonMediumGray border-customBlack lg:border-sliderButtonMediumGray">
            <IoReload className="w-4 h-auto stroke-2" />
          </span>
          <h2 className="">Open Bets</h2>
        </div>

        <span className="px-2">
          {BetOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="white"
              className="w-3 h-auto border  border-customWhite "
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="white"
              className="w-3 h-auto border  border-customWhite "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          )}
        </span>
      </div>
      {BetOpen && (
        <div className="w-full bg-customWhite  h-[300px] shadow-2xl">
          <select
            className="border border-inPlayTabColor my-2 w-full rounded"
            value={selectedValue}
            onChange={handleChange}
          >
            <option value="select">-- Select -- </option>
            <option value="cancel">-- Cancel -- </option>
          </select>
          <p className="bg-logoutBlueSoftColor font-medium px-2">Matched</p>
          <div className="flex text-xs px-2 gap-1">
            {checkboxOptions.map((checkbox) => (
              <label key={checkbox.name} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name={checkbox.name}
                  checked={checkboxes[checkbox.name]}
                  onChange={handleCheckboxChange}
                />
                {checkbox.label}
              </label>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default BetSlip;
