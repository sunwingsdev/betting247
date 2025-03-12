import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MyProfile from "../../Components/MyAccount/MyProfile";
import BalanceOverview from "../../Components/MyAccount/BalanceOverview";
import AccountStatement from "../../Components/MyAccount/AccountStatement";
import MyBets from "../../Components/MyAccount/MyBets";
import Activity from "../../Components/MyAccount/Activity";

const MyAccount = () => {
  const tabs = [
    { id: 1, label: "My Profile" },
    { id: 2, label: "Balance OverView" },
    { id: 3, label: "Account Statement" },
    { id: 4, label: "My Bets" },
    { id: 5, label: "Activity Log" },
  ];
  const betSummary = [
    {
      title: "Unmatched",
      headers: [
        "Market",
        "Selection",
        "Type",
        "Bet ID",
        "Bet placed",
        "Odds req.",
        "Matched",
        "Unmatched",
        "Date matched",
      ],
      message: "You have no bets in this time period.",
    },
    {
      title: "Matched",
      headers: [
        "Market",
        "Selection",
        "Type",
        "Bet ID",
        "Bet placed",
        "Odds req.",
        "Matched",
        "Avg. odds matched",
        "Date matched",
      ],
      message: "You have no bets in this time period.",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);
  const [betsActiveTab, setBetsActiveTab] = useState(1);
  const [selectedOption, setSelectedOption] = useState("All");
  const [historySelectedOption, setHistorySelectedOption] = useState("Settled");
  const [profitSelectedOption, setProfileSelectedOption] = useState("All");

  useEffect(() => {
    // Meta viewport
    const metaViewport = document.querySelector("meta[name='viewport']");

    if (metaViewport) {
      const originalContent = metaViewport.getAttribute("content");
      metaViewport.setAttribute("content", "width=1200");
      return () => {
        metaViewport.setAttribute("content", originalContent);
      };
    }
  }, []);

  useEffect(() => {
    console.log("Updated historySelectedOption:", historySelectedOption);
  }, [historySelectedOption]);
  useEffect(() => {
    console.log("Updated profileSelectedOption:", profitSelectedOption);
  }, [profitSelectedOption]);

  const filteredBetSummary =
    selectedOption === "All"
      ? betSummary // Show both Matched & Unmatched
      : betSummary.filter((item) => item.title === selectedOption);

  console.log("Filtered Data:", filteredBetSummary);

  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash.includes("-")) {
      const [tabs, betsTabs] = hash.split("-").map(Number);
      setActiveTab(tabs);
      setBetsActiveTab(betsTabs);
    } else if (hash) {
      setActiveTab(Number(hash));
    }
  }, [location]);

  return (
    <div className="bg-inPlayBgColor flex flex-row gap-x-4 px-4">
      <div className="w-[30%]  h-min bg-customWhite shadow-lg ">
        <div className="flex flex-row justify-between bg-logoutBlueColor">
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
            <h2 className=" px-4   cursor-pointer ">My Account</h2>
          </div>
        </div>
        {tabs.map((tab) => (
          <div key={tab.id} className="text-sm">
            <div className="border-b border-sliderButtonMediumGray">
              <button
                className={`block w-full px-2 py-1 text-left text-sm hover:text-customWhite hover:bg-sliderButtonMediumGray ${
                  activeTab === tab.id
                    ? "bg-sliderButtonMediumGray text-customWhite"
                    : ""
                }`}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.location.hash = tab.id;
                }}
              >
                {tab.label}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-inPlayBgColor">
        {activeTab === 1 && <MyProfile />}

        {activeTab === 2 && <BalanceOverview />}

        {activeTab === 3 && <AccountStatement />}

        {activeTab === 4 && <MyBets />}

        {activeTab === 5 && <Activity />}
      </div>
    </div>
  );
};

export default MyAccount;
