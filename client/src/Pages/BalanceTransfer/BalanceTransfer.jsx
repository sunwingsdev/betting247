import React, { useState } from "react";

const BalanceTransfer = () => {
  const [userID, setUserID] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = () => {
    console.log("TO USER ID:", userID);
    console.log("TRANSFER AMOUNT:", amount);
  };
  return (
    <div className="bg-inPlayBgColor pb-1">
      <div className="lg:px-2">
        <h3 className="lg:bg-customBlack bg-inPlayTabColor text-white text-center lg:text-left lg:px-2 py-1 font-medium ">
          BALANCE TRANSFER
        </h3>
      </div>
      <div className="px-2 flex lg:flex-row flex-col gap-1 items-center justify-center text-sm mt-4">
        <p className="font-bold">TO USER:</p>
        <input
          type="text"
          placeholder="ENTER USERID"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          className="border w-full lg:w-auto border-inPlayTabColor bg-customWhite border-t-2 px-2 py-[2px] rounded-md"
        />
        <p className="font-bold">TRANSFER AMOUNT:</p>
        <input
          type="number"
          placeholder="ENTER AMOUNT"
          min="1" // Minimum 1 taka dite hobe
          step="0.01" // Jodi decimal amount support korte chai
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border w-full lg:w-auto border-inPlayTabColor bg-customWhite border-t-2 px-2 py-[2px] rounded-md"
        />
        <button onClick={handleTransfer} className=" w-full lg:w-auto text-customWhite font-bold bg-tableGreenText py-[4px] px-2  shadow-md ">
          TRANSFER AMOUNT
        </button>
      </div>
    </div>
  );
};

export default BalanceTransfer;
