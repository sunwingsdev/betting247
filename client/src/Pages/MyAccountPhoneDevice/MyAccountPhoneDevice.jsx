import React from "react";
import { HiOutlineArrowRightStartOnRectangle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Marquee from "../../Components/Marquee/Marquee";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const profileInformation = [
  { id: 1, name: "My Profile", path: "/myaccount#1" },
  { id: 2, name: "Balance Overview", path: "/myaccount#2" },
  { id: 3, name: "Account Statement", path: "/myaccount#3" },
  { id: 4, name: "My Bets", path: "/myaccount#4-1" },
  { id: 5, name: "Bets History", path: "/myaccount#4-2" },
  { id: 6, name: "Profit Loss", path: "/myaccount#4-3" },
  { id: 7, name: "Activity Log", path: "/myaccount#5" },
  { id: 8, name: "Check Sport Wise Result", path: "/result" },
  { id: 9, name: "Balance Transfer", path: "/balancetransfer" },
];

const MyAccountPhoneDevice = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    toast.success("Logout successful");
    navigate("/");
  };
  return (
    <div className="bg-inPlayBgColor">
      <Marquee />
      <div className="  hover:text-customWhite lg:hidden bg-inPlayBgColor border-b border-customBlack ">
        <div className="px-2  flex flex-row bg-customBlack text-customWhite justify-between items-center text-sm">
          <div className="flex flex-row items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                className="w-5 h-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H5z"
                />
              </svg>
            </span>
            <h3 className="   ">{user?.username}</h3>
          </div>
          <p className="text-[10px] py-1 border-l border-customWhite border-opacity-50 px-1">
            GMT+6:0
          </p>
        </div>
      </div>
      {profileInformation.map((item, index) => (
        <div
          key={index}
          className=" border-b bg-customWhite  shadow-2xl border-sliderButtonMediumGray"
        >
          <div className="flex flex-row justify-between cursor-pointer items-center px-2">
            <button
              key={item.id}
              className="block w-full py-1     text-left text-tableBlueText text-sm hover:text-textYellowColor  "
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </button>
            <span className="border border-opacity-50 border-sliderButtonMediumGray bg-customWhite shadow-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="black"
                className="w-4 h-4 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      ))}
      <div className="  w-full  mt-4 flex py-2 flex-row items-center justify-center gap-1 bg-liveRedColor  ">
        <button
          className="  text-customWhite text-sm  font-bold "
          onClick={handleLogout}
        >
          LOGOUT
        </button>
        <span className=" text-sm text-customWhite ">
          <HiOutlineArrowRightStartOnRectangle className="w-5  h-auto stroke-[2]" />
        </span>
      </div>
    </div>
  );
};

export default MyAccountPhoneDevice;
