import { Link, useLocation } from "react-router-dom";
import MenuHeader from "../../Components/Header/MenuHeader";
import { useSelector } from "react-redux";
// import gameLogo from "../../assets/entrance.svg";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const buttons = [
    {
      label: "Home",
      icon: "M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5a1 1 0 00-1-1h-2a1 1 0 00-1 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z",
      bgColor: "",
      link: "/",
    },
    {
      label: "In-play",
      icon: "M12 8v4l3 3m5-10a9 9 0 11-6.627-2.628M5.25 5.25l1.5 1.5M18.75 5.25l-1.5 1.5",
      bgColor: "",
      link: "/inplay",
    },
    {
      label: "Sports",
      icon: "M8 12h8m-4 0V8m8-5H4a1 1 0 00-1 1v2a3 3 0 003 3h1a4 4 0 008 0h1a3 3 0 003-3V4a1 1 0 00-1-1zM8 21h8m-8-3h8m-6 0v-3m4 3v-3",
      bgColor: "",
      link: "/sports",
    },
    {
      label: "MultiMarket",
      icon: "M18 3V5H17V11L19 14V16H13V23H11V16H5V14L7 11V5H6V3H18ZM9 5V11.6056L7.4037 14H16.5963L15 11.6056V5H9Z",
      bgColor: "",
      link: "/multimarket",
    },

    {
      label: "Account",
      icon: "M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H5z",
      bgColor: "",
      link: user ? "/myaccountphone" : "/login",
    },
  ];
  const location = useLocation();

  return (
    <div className="relative">
      <MenuHeader />
      {/* bottom navbar for small screen */}

      <div className="fixed bottom-0 w-full z-50  lg:hidden">
        <div className="grid grid-cols-5 justify-items-center bg-footer-gradient text-customWhite text-xs  whitespace-nowrap font-medium">
          {buttons.map((btn, index) => (
            <Link
              key={index}
              to={btn.link}
              className={`px-1 py-1 ${
                location.pathname === btn.link
                  ? "bg-footer-gradient-active"
                  : "hover:bg-footer-gradient-active"
              }`}
            >
              <button key={index} className=" flex flex-col items-center ">
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
                    d={btn.icon}
                  />
                </svg>
                {btn.label}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
