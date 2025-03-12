import React, { useState } from "react";

const MyBets = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [betsActiveTab, setBetsActiveTab] = useState(1);
  const [activeBetsContent, setActiveBetsContent] = useState(1);
  const [selectedOption, setSelectedOption] = useState("All");
  const [betPlaced, setBetPlaced] = useState(false);
  const [market, setMarket] = useState(false);
  const [activeBetsHistory, setActiveBetsHistory] = useState(1);
  const [historySelectedOption, setHistorySelectedOption] = useState("Settled");
  const [date, setDate] = useState("2025-02-23");
  const [dateTwo, setDateTwo] = useState("2025-02-23");
  const [time, setTime] = useState("00:01");
  const [timeTwo, setTimeTwo] = useState("00:01");
  const [currentPageTwo, setCurrentPageTwo] = useState(1);
  const [activeBetsProfitLoss, setActiveBetsProfitLoss] = useState(1);
  const [profitDate, setProfitDate] = useState("2025-02-23");
  const [profitTime, setProfitTime] = useState("00:01");
  const [profitTimeTwo, setProfitTimeTwo] = useState("00:01");
  const [profitDateTwo, setProfitDateTwo] = useState("2025-02-23");
  const [profitSelectedOption, setProfileSelectedOption] = useState("All");
  const betsTabs = [
    { id: 1, label: "Current Bets" },
    { id: 2, label: "Bets History" },
    { id: 3, label: "Profit & Loss" },
  ];
  const betsTabsContent = [
    { id: 1, name: "Exchange" },
    { id: 2, name: "FancyBet" },
    { id: 3, name: "Fancy1Bet" },
    { id: 4, name: "TossBet" },
    { id: 5, name: "CasinoBet" },
    { id: 6, name: "Sportsbook" },
    { id: 7, name: "BookMaker" },
    { id: 8, name: "Premium" },
    { id: 9, name: "Other" },
    { id: 10, name: "SABA SPORTS" },
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
  const betHistoryTable = [
    {
      headers: [
        "Bet ID",
        "PL ID",
        "Market",
        "Selection	",
        "Type",
        "Bet placed",
        "Odds req.",
        "Stake",
        "Avg. odds matched	",
        "Profit/Loss	",
      ],
      message: "You have no bets in this time period.",
    },
  ];
  const betProfitTable = [
    {
      headers: ["Market", "Settled date		", "Profit/Loss"],
      message: "You have no bets in this time period.",
    },
  ];

  const filteredBetSummary =
    selectedOption === "All"
      ? betSummary // Show both Matched & Unmatched
      : betSummary.filter((item) => item.title === selectedOption);

  console.log("Filtered Data:", filteredBetSummary);
  const handleClickTwo = (index) => {
    if (index === 0 && currentPageTwo > 1) {
      // Prev Button
      setCurrentPageTwo(currentPageTwo - 1);
      console.log("Previous Page:", currentPageTwo - 1);
    } else if (index === 2 && currentPageTwo < totalPagesTwo) {
      // Next Button
      setCurrentPageTwo(currentPageTwo + 1);
      console.log("Next Page:", currentPageTwo + 1);
    } else {
      console.log("Clicked Page:", currentPageTwo);
    }
  };
  const totalPagesTwo = 5;
  return (
    <div>
      <h3 className="font-bold mb-2">My Bets</h3>
      <div className="grid grid-cols-6  ">
        {betsTabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`w-full px-4 py-1 ${
              index === 0 ? "border-b border-l border-r" : "border-b border-r "
            }  border-inPlayTabColor text-center font-medium text-inPlayTabColor text-sm bg-customWhite shadow-2xl shadow-customWhite   ${
              betsActiveTab === tab.id
                ? "bg-inPlayTabColor !text-customWhite"
                : ""
            }`}
            onClick={() => {
              setBetsActiveTab(tab.id);
              setActiveTab(4);
              window.location.hash = `4-${tab.id}`;
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {betsActiveTab === 1 && (
        <div className="mt-4">
          <div className="grid grid-cols-7 whitespace-nowrap gap-2">
            {betsTabsContent.map((ContentTab, index) => (
              <button
                key={ContentTab.id}
                className={`w-full  ${
                  index === 9 ? "" : "px-4"
                } py-1 border  border-inPlayTabColor text-center text-sm font-medium text-inPlayTabColor  bg-customWhite shadow-2xl shadow-customWhite   ${
                  activeBetsContent === ContentTab.id
                    ? "bg-inPlayTabColor !text-customWhite"
                    : ""
                }`}
                onClick={() => {
                  setActiveBetsContent(ContentTab.id);
                  setBetsActiveTab(1);
                  setActiveTab(4);
                  window.location.hash = `4-1-${ContentTab.id}`;
                }}
              >
                {ContentTab.name}
              </button>
            ))}
          </div>
          <div className=" border mt-2 ">
            {betsTabsContent.map(
              (ContentTab) =>
                activeBetsContent === ContentTab.id && (
                  <div key={ContentTab.id}>
                    {/* <h3 className="text-lg font-bold text-inPlayTabColor">
                            {ContentTab.name} Content
                          </h3> */}

                    <div className="flex whitespace-nowrap bg-logoutBlueSoftColor border-t-4 border-inPlayTabColor gap-2 px-2 py-3 items-center text-sm">
                      {/* Select Input */}
                      <span className="">Bet Status</span>
                      <select
                        id="filter"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        className=" w-[20%] text-xs py-1 border border-inPlayTabColor shadow-sm"
                      >
                        <option value="All">All</option>
                        <option value="Unmatched">Unmatched</option>
                        <option value="Matched">Matched</option>
                      </select>

                      {/* <input
                                type="checkbox"
                                checked={orderBy}
                                onChange={() => setOrderBy(!orderBy)}
                                className="h-4 w-4 rounded"
                              /> */}
                      <span>Order By</span>

                      <label className="flex items-center  space-x-2">
                        <input
                          type="checkbox"
                          checked={betPlaced}
                          onChange={() => setBetPlaced(!betPlaced)}
                          className="h-4 w-4 border border-inPlayTabColor rounded"
                        />
                        <span>Bet placed</span>
                      </label>

                      <label className="flex items-center  space-x-2">
                        <input
                          type="checkbox"
                          checked={market}
                          onChange={() => setMarket(!market)}
                          className="h-4 w-4 border border-inPlayTabColor rounded"
                        />
                        <span>Market</span>
                      </label>
                    </div>

                    {/* Selected Values Display */}
                    {/* <div className="mt-4 p-2 border rounded-md bg-white">
                            <p>
                              Selected Option: <strong>{selectedOption}</strong>
                            </p>
                            <p>
                              Order By:{" "}
                              <strong>
                                {orderBy ? "Enabled" : "Disabled"}
                              </strong>
                            </p>
                            <p>
                              Bet placed:{" "}
                              <strong>
                                {betPlaced ? "Enabled" : "Disabled"}
                              </strong>
                            </p>
                            <p>
                              Market:{" "}
                              <strong>{market ? "Enabled" : "Disabled"}</strong>
                            </p>
                          </div> */}

                    {/* Filtered Data Show */}
                    {filteredBetSummary.map((data, index) => (
                      <div key={index} className="border text-sm  mt-4">
                        <h3 className=" font-bold bg-inPlayTabColor text-customWhite py-1 px-2">
                          {data.title}
                        </h3>
                        <table className="border-collapse  w-full ">
                          <thead className="px-2">
                            <tr className="">
                              {data.headers.map((header, i) => (
                                <th
                                  key={i}
                                  className={`border-b text-sm font-medium bg-logoutBlueSoftColor  border-inPlayTabColor ${
                                    i === 7 ? "" : "whitespace-nowrap"
                                  }  ${
                                    i === 0
                                      ? "text-left !font-bold text-inPlayTabColor px-2 w-[20%]"
                                      : "w-auto "
                                  }  py-1`}
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                colSpan={data.headers.length}
                                className="text-left border-b px-2 bg-customWhite  py-1 border-inPlayTabColor"
                              >
                                {data.message}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                  </div>
                )
            )}
          </div>
        </div>
      )}
      {betsActiveTab === 2 && (
        <div className="mt-4">
          <div className="grid grid-cols-7 whitespace-nowrap gap-2">
            {betsTabsContent.map((ContentTab, index) => (
              <button
                key={ContentTab.id}
                className={`w-full  ${
                  index === 9 ? "" : "px-4"
                } py-1 border  border-inPlayTabColor text-center text-sm font-medium text-inPlayTabColor  bg-customWhite shadow-2xl shadow-customWhite   ${
                  activeBetsHistory === ContentTab.id
                    ? "bg-inPlayTabColor !text-customWhite"
                    : ""
                }`}
                onClick={() => {
                  setActiveBetsHistory(ContentTab.id);
                  setBetsActiveTab(2);
                  setActiveTab(4);
                  window.location.hash = `4-2-${ContentTab.id}`;
                }}
              >
                {ContentTab.name}
              </button>
            ))}
          </div>
          <div className=" border mt-2 ">
            {betsTabsContent.map(
              (ContentTab) =>
                activeBetsHistory === ContentTab.id && (
                  <div key={ContentTab.id}>
                    {/* <h3 className="text-lg font-bold text-inPlayTabColor">
                            {ContentTab.name} Content
                          </h3> */}
                    <div className=" flex px-2   gap-2 w-full bg-logoutBlueSoftColor whitespace-nowrap border-t-4 border-inPlayTabColor py-3 items-center text-sm">
                      {/* Bet Status */}

                      <span>Bet Status</span>

                      <select
                        id="filter"
                        value={historySelectedOption}
                        onChange={(e) =>
                          setHistorySelectedOption(e.target.value)
                        }
                        className="w-[20%] border border-inPlayTabColor py-1 text-xs shadow-sm"
                      >
                        <option value="Settled">Settled</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Voided">Voided</option>
                      </select>

                      {/* Period */}

                      <span>Period</span>

                      {/* Start Date & Time */}
                      <div className="flex items-center text-xs  space-x-2">
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                            console.log("Selected Date:", e.target.value);
                          }}
                          className="border border-t-4 rounded-t-md border-inPlayTabColor px-1 py-1  shadow-sm"
                        />
                        <input
                          type="time"
                          value={time}
                          onChange={(e) => {
                            setTime(e.target.value);
                            console.log("Selected Time:", e.target.value);
                          }}
                          className="border border-inPlayTabColor px-[2px] rounded-md py-1 shadow-sm"
                        />
                      </div>

                      {/* "To" */}

                      <span>to</span>

                      {/* End Date & Time */}
                      <label className="flex items-center text-xs   space-x-2">
                        <input
                          type="date"
                          value={dateTwo}
                          onChange={(e) => {
                            setDateTwo(e.target.value);
                            console.log("Selected Time2:", e.target.value);
                          }}
                          className="border border-t-4 rounded-t-md border-inPlayTabColor px-1 py-1 rounded-sm shadow-2xl shadow-customWhite"
                        />
                        <input
                          type="time"
                          value={timeTwo}
                          onChange={(e) => {
                            setTimeTwo(e.target.value);
                            console.log("Selected Time2:", e.target.value);
                          }}
                          className="border border-inPlayTabColor px-[2px] py-1 rounded-md shadow-2xl shadow-customWhite"
                        />
                      </label>
                    </div>
                    <div className="flex space-x-2 border-b border-inPlayTabColor bg-logoutBlueSoftColor px-2 pb-4">
                      {[
                        { label: "Just For Today" },
                        { label: "From Yesterday" },
                        { label: "Get History" },
                      ].map((btn, index) => (
                        <button
                          key={index}
                          className={`px-3 py-1 border border-inPlayTabColor font-bold ${
                            index === 2
                              ? "bg-oneClickBetColor text-textYellowColor hover:bg-commonYellowColor hover:text-customBlack"
                              : "bg-customWhite text-customBlack "
                          } text-sm rounded shadow`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs pt-2">
                      Betting History enables you to review the bets you have
                      placed. <br />
                      Specify the time period during which your bets were
                      placed, the type of markets on which the bets were placed,
                      and the sport. <br />
                      Betting History is available online for the past 30 days.
                    </p>
                    {betHistoryTable.map((data, index) => (
                      <div key={index} className="border text-sm  mt-4">
                        <table className="border-collapse  w-full ">
                          <thead className="px-2">
                            <tr className="">
                              {data.headers.map((header, i) => (
                                <th
                                  key={i}
                                  className={`border-y text-sm font-medium bg-logoutBlueSoftColor  border-inPlayTabColor ${
                                    i === 7 ? "" : "whitespace-nowrap"
                                  }  ${
                                    i === 2
                                      ? "text-left !font-medium px-2 w-[20%]"
                                      : "w-auto "
                                  }  py-1`}
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                colSpan={data.headers.length}
                                className="text-left border-b px-2 bg-customWhite  py-1 border-inPlayTabColor"
                              >
                                {data.message}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
                    <div className="flex justify-center space-x-2 mt-4">
                      {["Prev", "1", "Next"].map((label, index) => (
                        <button
                          key={index}
                          onClick={() => handleClickTwo(index)}
                          disabled={
                            (index === 0 && currentPageTwo === 1) ||
                            (index === 2 && currentPageTwo === totalPagesTwo)
                          }
                          className={`px-3 py-1 rounded-[4px] text-sm ${
                            index === 1
                              ? "bg-customBlack text-textYellowColor hover:text-customBlack hover:bg-textYellowColor"
                              : "bg-sliderButtonMediumGray text-customWhite hover:text-textYellowColor"
                          } `}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      )}
      {betsActiveTab === 3 && (
        <div className="mt-4">
          <div className=" bg-customWhite px-2">
            <div>
              <h3 className="text-inPlayTabColor text-lg font-medium">
                Profit & Loss - Main wallet
              </h3>
              <div className=" flex flex-row items-center gap-2 text-sm">
                <div className=" flex flex-row items-center ">
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke=""
                      className="w-5 h-auto stroke-inPlayTabColor fill-inPlayTabColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H5z"
                      />
                    </svg>
                  </span>
                  <p>userdemo11</p>
                </div>
                <div className="flex flex-row gap-1 items-center">
                  <span className="bg-inPlayTabColor rounded-[4px] p-[2px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke=""
                      className="w-3 h-auto stroke-customWhite "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v4l3 3m5-10a9 9 0 11-6.627-2.628M5.25 5.25l1.5 1.5M18.75 5.25l-1.5 1.5"
                      />
                    </svg>
                  </span>
                  <p>2025-02-23 18:10</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 pt-4 whitespace-nowrap gap-2">
              {betsTabsContent.map((ContentTab, index) => (
                <button
                  key={ContentTab.id}
                  className={`w-full  ${
                    index === 9 ? "" : "px-4"
                  } py-1 border  border-inPlayTabColor text-center text-sm font-medium text-inPlayTabColor  bg-customWhite shadow-2xl shadow-customWhite   ${
                    activeBetsProfitLoss === ContentTab.id
                      ? "bg-inPlayTabColor !text-customWhite"
                      : ""
                  }`}
                  onClick={() => {
                    setActiveBetsProfitLoss(ContentTab.id);
                    setBetsActiveTab(3);
                    setActiveTab(4);
                    window.location.hash = `4-3-${ContentTab.id}`;
                  }}
                >
                  {ContentTab.name}
                </button>
              ))}
            </div>
          </div>
          <div className=" border mt-2  bg-customWhite ">
            {betsTabsContent.map(
              (ContentTab) =>
                activeBetsHistory === ContentTab.id && (
                  <div key={ContentTab.id}>
                    {/* <h3 className="text-lg font-bold text-inPlayTabColor">
                            {ContentTab.name} Content
                          </h3> */}
                    <div className=" flex px-2   gap-2 w-full bg-logoutBlueSoftColor whitespace-nowrap border-t-4 border-inPlayTabColor py-3 items-center text-sm">
                      {/* Bet Status */}

                      <span>Period</span>
                      {/* Start Date & Time */}
                      <div className="flex items-center text-xs  space-x-2">
                        <input
                          type="date"
                          value={profitDate}
                          onChange={(e) => {
                            setProfitDate(e.target.value);
                            console.log("Selected Date:", e.target.value);
                          }}
                          className="border border-t-4 rounded-t-md border-inPlayTabColor px-1 py-1 rounded-sm shadow-sm"
                        />
                        <input
                          type="time"
                          value={profitTime}
                          onChange={(e) => {
                            setProfitTime(e.target.value);
                            console.log("Selected Time:", e.target.value);
                          }}
                          className="border border-inPlayTabColor px-[2px] rounded-md py-1 shadow-sm"
                        />
                      </div>

                      {/* "To" */}

                      <span>to</span>

                      {/* End Date & Time */}
                      <label className="flex items-center text-xs   space-x-2">
                        <input
                          type="date"
                          value={profitDateTwo}
                          onChange={(e) => {
                            setProfitDateTwo(e.target.value);
                            console.log("Selected Time2:", e.target.value);
                          }}
                          className="border border-t-4 rounded-t-md border-inPlayTabColor px-1 py-1 rounded-sm shadow-2xl shadow-customWhite"
                        />
                        <input
                          type="time"
                          value={profitTimeTwo}
                          onChange={(e) => {
                            setProfitTimeTwo(e.target.value);
                            console.log("Selected Time2:", e.target.value);
                          }}
                          className="border border-inPlayTabColor px-[2px] py-1 rounded-md shadow-2xl shadow-customWhite"
                        />
                      </label>
                    </div>
                    <div className="flex space-x-2 border-b border-inPlayTabColor bg-logoutBlueSoftColor px-2 pb-4">
                      {[
                        { label: "Just For Today" },
                        { label: "From Yesterday" },
                        { label: "Get P & L" },
                      ].map((btn, index) => (
                        <button
                          key={index}
                          className={`px-3 py-1 border border-inPlayTabColor font-bold ${
                            index === 2
                              ? "bg-oneClickBetColor text-textYellowColor hover:bg-commonYellowColor hover:text-customBlack"
                              : "bg-customWhite text-customBlack "
                          } text-sm rounded shadow`}
                        >
                          {btn.label}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs border-b py-2 border-inPlayTabColor px-2 pt-2">
                      Betting Profit & Loss enables you to review the bets you
                      have placed. <br />
                      Specify the time period during which your bets were
                      placed, the type of markets on which the bets were placed,
                      and the sport. <br />
                      Betting Profit & Loss is available online for the past 30
                      days.
                    </p>
                    <div className="flex flex-row py-4 bg-inPlayBgColor justify-between">
                      <h3 className="font-bold">Total P/L: PBU (0.00)</h3>
                      <div className="grid grid-cols-2 gap-2 whitespace-nowrap items-center">
                        <select
                          id="filter"
                          value={profitSelectedOption}
                          onChange={(e) =>
                            setProfileSelectedOption(e.target.value)
                          }
                          className="w-full border font-medium border-inPlayTabColor py-1 text-xs shadow-sm"
                        >
                          <option value="Settled">ALL</option>
                          <option value="Settled">SOCCER</option>
                          <option value="Cancelled">TENNIS</option>
                          <option value="Voided">CRICKET</option>
                        </select>

                        <p className="font-bold">PBU (0.00) ALL</p>
                      </div>
                    </div>
                    {betProfitTable.map((data, index) => (
                      <div key={index} className="border  text-sm  ">
                        <table className="border-collapse  w-full ">
                          <thead className="">
                            <tr className="">
                              {data.headers.map((header, i) => (
                                <th
                                  key={i}
                                  className={`border-y text-sm font-medium bg-logoutBlueSoftColor px-2 border-inPlayTabColor ${
                                    i === 7 ? "" : "whitespace-nowrap"
                                  }  ${
                                    i === 0
                                      ? "text-left !font-bold text-inPlayTabColor  w-[60%]"
                                      : "w-auto text-right "
                                  }  py-1`}
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                colSpan={data.headers.length}
                                className="text-left border-b px-2 bg-customWhite  py-1 border-inPlayTabColor"
                              >
                                {data.message}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <h3 className=" bg-inPlayBgColor">
                          Profit and Loss is shown net of commission.
                        </h3>
                      </div>
                    ))}

                    <div className="flex bg-inPlayBgColor justify-center space-x-2 pt-4">
                      {["Prev", "1", "Next"].map((label, index) => (
                        <button
                          key={index}
                          onClick={() => handleClickTwo(index)}
                          disabled={
                            (index === 0 && currentPageTwo === 1) ||
                            (index === 2 && currentPageTwo === totalPagesTwo)
                          }
                          className={`px-3 py-1 rounded-[4px] text-sm ${
                            index === 1
                              ? "bg-customBlack text-textYellowColor hover:text-customBlack hover:bg-textYellowColor"
                              : "bg-sliderButtonMediumGray text-customWhite hover:text-textYellowColor"
                          } `}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBets;
