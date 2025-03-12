import React from "react";

const Footer = () => {
  return (
    <div className="bg-inPlayBgColor">
    <div className="flex flex-col  mx-auto py-4  max-w-7xl  pb-20 ">
      <div className="w-full bg-custom-gradient z-10   text-glow  py-6">
        <div className="flex flex-row items-center border-b border-gray-400 pt-1  w-full justify-center gap-2 pb-2">
          <span className="  rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22 11 13 2 9z" />
            </svg>
          </span>

          <span className=" rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="20"
              height="auto"
              fill="white"
              stroke=""
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M425.6 299.1c2.9-14.6 4.4-29.6 4.4-45 0-129.1-104.9-234-234-234-15.4 0-30.4 1.5-45 4.4C133.4 8.6 115.1 0 95.1 0 43.1 0 1 42.1 1 94.1c0 20 8.6 38.3 22.5 55.9-2.9 14.6-4.4 29.6-4.4 45 0 129.1 104.9 234 234 234 15.4 0 30.4-1.5 45-4.4 17.6 13.9 35.9 22.5 55.9 22.5 52 0 94.1-42.1 94.1-94.1 0-20-8.6-38.3-22.5-55.9zM237.1 364.9c-37.8 0-72.6-13.9-99.3-36.9-5.6-4.9-5.9-13.6-.7-19.2l20.6-20.6c4.7-4.7 12.3-5 17.5-.7 20.8 17.5 47.5 27.6 76.1 27.6 23.7 0 50.2-10.7 50.2-31.6 0-12-9.8-21.7-29.2-27.3l-51.3-14.6c-43.2-12.2-72.9-39.5-72.9-80.8 0-23.9 9.8-45.4 27.7-61.5 17.3-15.5 41.4-25.1 67.7-27V64c0-6.6 5.4-12 12-12h32.4c6.6 0 12 5.4 12 12v20.1c27.6 3.9 52 14.2 72.3 30.5 5.5 4.4 6.1 12.6 1.4 17.9l-22.9 23.9c-4.3 4.5-11.3 5-16.3 1.3-17.4-13.5-39.2-20.9-62-20.9-27.7 0-46.5 12.5-46.5 30.6 0 14.3 10.8 22.4 35.8 29.6l46.8 13.4c45.6 13 77.2 38.5 77.2 84.5-.1 49.8-43.1 88.2-107.8 88.2z" />
            </svg>
          </span>

          <span className=" rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="auto"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </span>
        </div>
        <div>
          <h3 className="underline text-center text-white">000000000</h3>
        </div>
      </div>
      <div className="flex flex-col items-center pt-4  font-light ">
        <div className="border-b border-black pb-2 flex lg:text-md text-sm flex-col justify-center font-medium items-center text-black">
          <h3 className="text-center">
            Our website works best in the newest and last prior version of these
            browsers:
          </h3>
          <p>Google Chrome. Firefox</p>
        </div>
        <div className="text-black space-y-2 flex flex-col lg:text-md text-sm items-center font-medium">
          <div className="flex flex-wrap items-center space-x-2 justify-center">
            <h3 className="underline">-Privacy- Policy </h3>
            <h3 className="underline">-Terms and Conditions</h3>
            <h3 className="underline">- Rules and Regulations</h3>
          </div>
          <h3 className="underline"> - KYC Responsible Gaming</h3>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;
