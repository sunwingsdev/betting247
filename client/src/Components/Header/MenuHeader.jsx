import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import betxLargeLogo from "../../assets/LoginImage.avif";
import { IoSettingsSharp } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import TopHeader from "./TopHeader";

const MenuHeader = () => {
  const [settingOpen, setSettingOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const modalRefTwo = useRef(null);
  const settingRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [amounts, setAmounts] = useState([
    50, 100, 200, 500, 1000, 2000, 5000, 3000,
  ]);
  const [selectedAmounts, setSelectedAmounts] = useState([
    50, 100, 200, 5000, 1000, 2000,
  ]);
  const [editedAmounts, setEditedAmounts] = useState([...amounts]);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "In-Play", link: "/inplay" },
    { label: "Multi Markets", link: "/multimarket" },
    { label: "Cricket", link: "/cricket" },
    { label: "Soccer", link: "/soccer" },
    { label: "Tennis", link: "/tennis" },
    {
      label: "Result",
      // link: "/result"
    },
    { label: "Casino", link: "/casino" },
    {
      label: "Women's Premier League",
      //  link: "/womenleague"
    },
    {
      label: "Aviator",
      //  link: "/womenleague"
    },
  ];
  const [showSecondButton, setShowSecondButton] = useState(false);
  const [showSecondButtonTwo, setShowSecondButtonTwo] = useState(false);
  const [showSecondButtonThree, setShowSecondButtonThree] = useState(false);
  const [showSecondButtonFour, setShowSecondButtonFour] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleClickOutsideTwo = (event) => {
      if (
        modalRefTwo.current &&
        !modalRefTwo.current.contains(event.target) &&
        settingRef.current &&
        !settingRef.current.contains(event.target) // My Setting button e click hole ignore korbe
      ) {
        setSettingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideTwo);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideTwo);
    };
  }, []);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    console.log("Input Value:", value);
  };
  const handleSelect = (amount) => {
    setSelectedAmounts((prev) => {
      if (prev.includes(amount)) {
        // If the amount is already selected, deselect it
        return prev.filter((item) => item !== amount);
      } else {
        if (prev.length >= 6) {
          // Remove the oldest selected amount and add the new one
          return [...prev.slice(1), amount];
        }
        return [...prev, amount];
      }
    });
  };
  const handleEdit = () => {
    setIsEditing(true);
    console.log("Editing Mode ON. Current Amounts:", editedAmounts);
  };
  const handleSave = () => {
    setAmounts([...editedAmounts]);
    setIsEditing(false);
    console.log("Final Saved Amounts:", editedAmounts);
  };
  return (
    <div>
      <TopHeader settingOpen={settingOpen} setSettingOpen={setSettingOpen} />
      <div className="bg-commonYellowColor whitespace-nowrap   flex-row  items-center  hidden lg:flex md:hidden justify-between px-6 ">
        <ul className="flex flex-row items-center  text-xs ">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                if (index === 6 || index === 8) {
                  setOpenModal(true);
                }
              }}
              className={`border-customBlack  border-r text-customBlack border-opacity-20 font-bold ${
                [3, 4, 5, 9].includes(index) ? "relative" : "null"
              }

            ${
              location.pathname === item.link
                ? "bg-headingHoverColor"
                : "hover:bg-headingHoverColor"
            }`}
            >
              <Link
                to={item.link}
                key={index}
                className="py-2 px-2 block"
                // login page design
                // onClick={(event) => {
                //   if (index === 6 || index === 7) {
                //     event.preventDefault();
                //     setOpenModal(true);
                //   }
                // }}
              >
                {item.label}
              </Link>
              {[3, 4, 5, 9].includes(index) && (
                <div className="absolute top-0 right-0 flex z-30 items-center ">
                  {/* Live Icon with Animation */}
                  <span className="bg-customWhite font-bold text-[8px] leading-[10px] px-1 text-liveRedColor animate-pulse  rounded-sm">
                    Live
                  </span>

                  {/* Live Score (Attached) */}
                  <span className="bg-loginRedColor font-bold text-[8px] leading-[10px] px-1 text-customWhite  rounded-sm">
                    6
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex flex-row text-customBlack items-center gap-2   ">
          <h3 className="text-xs font-medium">Time Zone:</h3>
          <p className="text-sm font-semibold">GMT+6:0</p>

          <div
            className="relative cursor-pointer text-left"
            // login page design
            onClick={() => setOpenModal(true)}
            // onClick={() => setIsChecked(!isChecked)}
          >
            <button
              className={`hover:underline px-8 border-t-2 border-topGreenBorder  py-1 text-textYellowColor font-medium text-sm ${
                isChecked
                  ? "bg-topGreenBorder !text-customBlack"
                  : "bg-oneClickBetColor"
              }`}
            >
              One Click Bet
            </button>
            {/* Checkbox */}
            <div
              className={`w-4 h-4 absolute top-2 left-2 cursor-pointer rounded-sm border border-sliderButtonLightGray border-opacity-50 flex items-center justify-center ${
                isChecked ? "bg-tableGreenText" : "bg-black"
              }`}
            >
              {isChecked && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="black"
                  className="w-4 h-4"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          </div>

          <div
            ref={settingRef}
            className="relative cursor-pointer"
            // onClick={() => setSettingOpen((prev) => !prev)}
          >
            <p className="hover:underline font-semibold text-sm">Setting</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute w-4 h-auto top-1 left-full"
            >
              <path d="M12 1c-.6 0-1 .4-1 1v1.1c-.7.2-1.3.5-1.9.8l-.8-.8c-.4-.4-1-.4-1.4 0l-2 2c-.4.4-.4 1 0 1.4l.8.8c-.3.6-.6 1.2-.8 1.9H3c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h1.1c.2.7.5 1.3.8 1.9l-.8.8c-.4.4-.4 1 0 1.4l2 2c.4.4 1 .4 1.4 0l.8-.8c.6.3 1.2.6 1.9.8V22c0 .6.4 1 1 1h3c.6 0 1-.4 1-1v-1.1c.7-.2 1.3-.5 1.9-.8l.8.8c.4.4 1 .4 1.4 0l2-2c.4-.4.4-1 0-1.4l-.8-.8c.3-.6.6-1.2.8-1.9H22c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1h-1.1c-.2-.7-.5-1.3-.8-1.9l.8-.8c.4-.4.4-1 0-1.4l-2-2c-.4-.4-1-.4-1.4 0l-.8.8c-.6-.3-1.2-.6-1.9-.8V2c0-.6-.4-1-1-1h-3zm1.5 6a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
            </svg>
          </div>
        </div>

        {openModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center lg:w-full   h-full bg-customBlack bg-opacity-50 "
            // onClick={(e) =>{
            //   if (e.target === e.currentTarget)
            //     {setOpenModal(false);

            //   }
            // }
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setOpenModal(false); // Modal বন্ধ হবে যদি বাহিরের জায়গায় ক্লিক করা হয়
              }
            }}
          >
            <div className="relative flex flex-row ">
              <button
                className="absolute top-2 right-2 bg-signUpColor p-1"
                onClick={() => setOpenModal(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-auto"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <img src={betxLargeLogo} alt="" />
              <div className="bg-customWhite py-28 px-10  flex flex-col space-y-2">
                <h3 className="text-customBlack text-xl font-semibold">
                  Please Login to continue
                </h3>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-sliderButtonMediumGray border w-full shadow-2xl px-2 rounded-md py-1 placeholder:font-medium placeholder:text-sm"
                  placeholder="User Id"
                />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  className="border-sliderButtonMediumGray w-full placeholder:text-sm placeholder:font-medium rounded-md border py-1 px-2 shadow-2xl"
                />
                <div className="relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border-sliderButtonMediumGray border shadow-2xl w-full px-2 rounded-md placeholder:text-sm py-1 placeholder:font-medium"
                    placeholder="Validation Code"
                  />
                  <p className="text-lg text-customBlack font-bold absolute top-0 right-2">
                    {" "}
                    5225
                  </p>
                </div>

                <div className="relative">
                  <button className="bg-loginColor py-1  rounded-md   w-full font-bold">
                    Login
                  </button>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 absolute right-16  top-1/2 transform -translate-y-1/2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {settingOpen && (
        <div
          className={` lg:absolute lg:top-[105px] fixed inset-0   lg:inset-auto  top-0 lg:bg-transparent bg-customBlack bg-opacity-50 lg:right-0  flex  lg:justify-end z-50 `}
          ref={modalRefTwo}
        >
          <div
            className="bg-settingModalColor lg:px-2 text-sm lg:h-auto w-full  h-[400px] lg:overflow-y-hidden overflow-y-scroll   shadow-lg lg:w-80 "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white sticky top-0  z-50 border-b border-customBlack lg:hidden bg-inPlayTabColor    flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-2 px-2">
                <IoSettingsSharp className="w-5 h-auto stroke-2" />
                <p>setting</p>
              </div>
              <div
                className="py-3 px-2 border-l border-textYellowColor"
                onClick={() => setSettingOpen(false)}
              >
                <RxCross2 />
              </div>
            </div>
            <h3 className="lg:hidden py-1 bg-inPlayTabColor px-2 text-customWhite w-full">
              Stake
            </h3>

            <div className="grid grid-cols-3 px-2 lg:px-0 items-center gap-2 py-2 border-b border-inPlayTabColor">
              <h2 className=" font-medium ">Default Stake</h2>
              <input
                type="number"
                name=""
                id=""
                value={inputValue}
                onChange={handleInputChange}
                className="border py-1 lg:py-0 px-2 border-inPlayTabColor border-t-4 rounded-md"
              />
            </div>
            <div className="py-2 lg:border-b px-2 lg:px-0 font-medium border-inPlayTabColor ">
              <h2 className=" font-medium ">
                {" "}
                <span className="lg:hidden">Quick</span> Stakes
              </h2>
              {/* Amount Show Section */}
              {!isEditing && (
                <div className="flex flex-col  lg:flex-row lg:items-center gap-2 ">
                  <div className="grid grid-cols-4 gap-2">
                    {amounts.map((amount, index) => (
                      <button
                        key={index}
                        className={`px-4 py-1 flex items-center justify-center  rounded-[4px] border  border-inPlayTabColor text-black text-xs font-bold ${
                          selectedAmounts.includes(amount)
                            ? "lg:bg-oneClickBetColor bg-commonYellowColor text-customBlack lg:text-textYellowColor"
                            : "bg-customWhite"
                        }`}
                        onClick={() => handleSelect(amount)}
                      >
                        {amount}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleEdit}
                    className=" w-full lg:w-auto lg:px-3 py-2  lg:py-6 flex gap-[2px] flex-row items-center justify-center lg:justify-normal border font-medium border-inPlayTabColor  text-black bg-customWhite rounded"
                  >
                    Edit <span className="lg:hidden">Stakes</span>
                    <MdEdit />
                  </button>
                </div>
                // {error && <p className="text-red-500 mt-2">{error}</p>}
              )}

              {/* Edit Amount Section */}
              {isEditing && (
                <div className="  flex flex-col lg:flex-row  lg:items-center gap-2 ">
                  <div className="grid grid-cols-4 gap-2">
                    {editedAmounts.map((amt, index) => (
                      <input
                        key={index}
                        type="number"
                        value={amt}
                        onChange={(e) => {
                          const newAmounts = [...editedAmounts];
                          newAmounts[index] = parseInt(e.target.value) || 0;
                          setEditedAmounts(newAmounts);
                        }}
                        className="px-[4px] py-1 border border-t-2 border-inPlayTabColor rounded-[4px] text-black text-xs font-bold"
                      />
                    ))}
                  </div>
                  <div className="flex gap-2 ">
                    <button
                      onClick={handleSave}
                      className=" w-full lg:w-auto lg:px-5 py-2 lg:py-6 flex gap-[2px] flex-row items-center justify-center lg:justify-normal border border-inPlayTabColor  lg:text-black text-textYellowColor font-bold bg-oneClickBetColor lg:bg-commonYellowColor rounded"
                    >
                      OK
                    </button>
                    {/* <button
                          onClick={handleCancel}
                          className="p-2 bg-red-500 text-white rounded"
                        >
                          Cancel
                        </button> */}
                  </div>
                </div>
              )}
            </div>
            <div className="py-2 lg:border-b border-inPlayTabColor ">
              <h3 className="font-medium py-1 px-2 lg:px-0 lg:text-customBlack text-customWhite  lg:bg-transparent  bg-inPlayTabColor">
                Odds
              </h3>
              <div className="flex flex-row items-center py-1 lg:py-0 px-2 lg:px-0 gap-2 relative">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="hidden lg:block"
                />
                <p className="font-medium">Highlight when odds change</p>

                {/* 1st Button (By default visible) */}
                {!showSecondButton && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-tableGreenText pr-1 pl-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButton(true)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}

                {/* 2nd Button (Visible after clicking 1st button) */}
                {showSecondButton && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-sliderButtonMediumGray pl-1 pr-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButton(false)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}
              </div>
            </div>
            <div className="py-2 lg:border-b border-inPlayTabColor">
              <h3 className="font-medium py-1 px-2 lg:px-0 lg:text-customBlack text-customWhite  lg:bg-transparent  bg-inPlayTabColor">
                Fancy Bet
              </h3>

              <div className="flex flex-row items-center py-1 lg:py-0 px-2 lg:px-0 gap-2 relative">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="hidden lg:block"
                />
                <p className="font-medium">Accept any odds</p>

                {/* 1st Button (By default visible) */}
                {!showSecondButtonTwo && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-tableGreenText pr-1 pl-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonTwo(true)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}

                {/* 2nd Button (Visible after clicking 1st button) */}
                {showSecondButtonTwo && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-sliderButtonMediumGray pl-1 pr-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonTwo(false)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}
              </div>
            </div>
            <div className="py-2 lg:border-b border-inPlayTabColor">
              <h3 className="font-medium py-1 px-2 lg:px-0 lg:text-customBlack text-customWhite  lg:bg-transparent  bg-inPlayTabColor">
                SportsBook
              </h3>
              <div className="flex flex-row items-center py-1 lg:py-0 px-2 lg:px-0 gap-2 relative">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="hidden lg:block"
                />
                <p className="font-medium">Accept any odds</p>

                {/* 1st Button (By default visible) */}
                {!showSecondButtonThree && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-tableGreenText pr-1 pl-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonThree(true)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}

                {/* 2nd Button (Visible after clicking 1st button) */}
                {showSecondButtonThree && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-sliderButtonMediumGray pl-1 pr-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonThree(false)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}
              </div>
            </div>
            <div className="py-2 lg:border-b border-inPlayTabColor">
              <h3 className="font-medium py-1 px-2 lg:px-0 lg:text-customBlack text-customWhite  lg:bg-transparent  bg-inPlayTabColor">
                Binary
              </h3>
              <div className="flex flex-row items-center py-1 lg:py-0 px-2 lg:px-0 gap-2 relative">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="hidden lg:block"
                />
                <p className="font-medium">Accept any odds</p>

                {/* 1st Button (By default visible) */}
                {!showSecondButtonFour && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-tableGreenText pr-1 pl-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonFour(true)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}

                {/* 2nd Button (Visible after clicking 1st button) */}
                {showSecondButtonFour && (
                  <div
                    className="absolute lg:hidden top-1 right-2 gap-2 bg-sliderButtonMediumGray pl-1 pr-4 py-[2px] rounded-md"
                    onClick={() => setShowSecondButtonFour(false)}
                  >
                    <button className="h-6 bg-customWhite flex w-2 rounded-md"></button>
                  </div>
                )}
              </div>
            </div>

            <div className="py-4 px-2 lg:px-2 flex flex-row w-full lg:w-auto lg:justify-center gap-2">
              <button
                className="px-8 w-full lg:w-auto border border-inPlayTabColor bg-customWhite font-bold  rounded-sm"
                onClick={() => setSettingOpen(false)}
              >
                Cancel
              </button>
              <button className="px-8 w-full lg:w-auto py-2 bg-oneClickBetColor text-textYellowColor rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuHeader;
