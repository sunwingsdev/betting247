import React from 'react';

const BalanceOverview = () => {
    const tableHeaders = [
        "Date",
        "Transaction_No",
        "Debits",
        "Credits",
        "Balance",
        "Remarks",
        "From_To",
      ];
    return (
        <div className="w-full bg-inPlayBgColor">
            <h2 className="text-customBlack font-bold mb-2">Summary</h2>
            <div className="bg-customWhite">
              <div className="flex justify-between items-center w-full px-4 ">
                {/* Left Side */}
                <div className="flex flex-col border-r border-sliderButtonMediumGray pr-4 py-3 w-1/7">
                  <h2 className="font-medium text-lg">Your Balances</h2>
                  <p className="text-sliderButtonMediumGray">
                    <span className="text-4xl text-tableBlueText font-bold">
                      0.00
                    </span>{" "}
                    PBU
                  </p>
                </div>

                {/* Right Side */}
                <div className="flex flex-col w-1/2 pl-4">
                  <h3 className="font-medium">Welcome,</h3>
                  <p className="text-sm">
                    View your account details here. You can manage funds, review
                    and change your settings and see the performance of your
                    betting activity.
                  </p>
                </div>
              </div>
            </div>
            <table className="w-full mt-4">
              <thead className="border-y border-sliderButtonMediumGray bg-sliderButtonLightGray">
                <tr>
                  {tableHeaders.map((key, index) => (
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
          </div>
    );
};

export default BalanceOverview;