import React, { useState } from 'react';

const AccountStatement = () => {
    
      const [currentPage, setCurrentPage] = useState(1);
    const accountTableHeaders = [
        "Date/Time",
        "Deposit",
        "Withdraw",
        "Balance",
        "Remark",
        "From/To",
      ];
      const totalPages = 5;
      const handleClick = (index) => {
        if (index === 0 && currentPage > 1) {
          // Prev Button
          setCurrentPage(currentPage - 1);
          console.log("Previous Page:", currentPage - 1);
        } else if (index === 2 && currentPage < totalPages) {
          // Next Button
          setCurrentPage(currentPage + 1);
          console.log("Next Page:", currentPage + 1);
        } else {
          console.log("Clicked Page:", currentPage);
        }
      };
    return (
        <div className="">
            <table className="w-full mt-4">
              <thead className="border-y border-sliderButtonMediumGray bg-sliderButtonLightGray">
                <tr>
                  {accountTableHeaders.map((key, index) => (
                    <th key={index} className="px-4 py-2 font-medium text-left">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div className="flex justify-center space-x-2 mt-4">
              {["Prev", "1", "Next"].map((label, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  disabled={
                    (index === 0 && currentPage === 1) ||
                    (index === 2 && currentPage === totalPages)
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
    );
};

export default AccountStatement;