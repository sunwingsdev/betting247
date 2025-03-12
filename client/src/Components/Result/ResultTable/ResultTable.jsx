import React from 'react';

const ResultTable = () => {
    const matchData = {
        thead: ["S.No.", "Sport", "Match Date", "Match Name", "Winner"],
        tbody: [
          {
            "S.No.": 1,
            Sport: "Cricket",
            "Match Date": "2025-02-23 21:19:54",
            "Match Name":
              "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
            Winner: "Islamabad United SRL T20",
          },
          {
            "S.No.": 2,
            Sport: "Cricket",
            "Match Date": "2025-02-23 20:59:21",
            "Match Name": "Lions v North West Dragons - (34057482)",
            Winner: "North West Dragons",
          },
          {
            "S.No.": 3,
            Sport: "Cricket",
            "Match Date": "2025-02-23 20:58:03",
            "Match Name": "Kwazulu Natal Inland v Eastern Storm - (34058323)",
            Winner: "Kwazulu Natal Inland",
          },
          {
            "S.No.": 4,
            Sport: "Cricket",
            "Match Date": "2025-02-23 21:19:54",
            "Match Name":
              "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
            Winner: "Islamabad United SRL T20",
          },{
            "S.No.": 5,
            Sport: "Cricket",
            "Match Date": "2025-02-23 21:19:54",
            "Match Name":
              "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
            Winner: "Islamabad United SRL T20",
          },{
            "S.No.": 6,
            Sport: "Cricket",
            "Match Date": "2025-02-23 21:19:54",
            "Match Name":
              "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
            Winner: "Islamabad United SRL T20",
          },{
            "S.No.": 7,
            Sport: "Cricket",
            "Match Date": "2025-02-23 21:19:54",
            "Match Name":
              "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
            Winner: "Islamabad United SRL T20",
          },{
            "S.No.": 8,
            Sport: "Cricket",
            "Match Date": "2025-02-23 21:19:54",
            "Match Name":
              "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
            Winner: "Islamabad United SRL T20",
          },{
            "S.No.": 9,
            Sport: "Cricket",
            "Match Date": "2025-02-23 21:19:54",
            "Match Name":
              "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
            Winner: "Islamabad United SRL T20",
          },
          {
            "S.No.": 10,
            Sport: "Cricket",
            "Match Date": "2025-02-23 21:19:54",
            "Match Name":
              "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
            Winner: "Islamabad United SRL T20",
          },{
            "S.No.": 11,
            Sport: "Cricket",
            "Match Date": "2025-02-23 21:19:54",
            "Match Name":
              "Karachi Kings SRL T20 v Islamabad United SRL T20 - (-10803944)",
            Winner: "Islamabad United SRL T20",
          },
        ],
      };
    return (
        <div className="overflow-x-auto  ">
      <table className="table-auto whitespace-nowrap border-collapse border border-sliderButtonMediumGray w-full">
        <thead>
          <tr className="bg-gray-200">
            {matchData.thead.map((heading, index) => (
              <th key={index} className="border border-sliderButtonMediumGray bg-customBlack text-customWhite  text-sm px-4 py-2">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
  {matchData.tbody.map((row, index) => (
    <tr
      key={index}
      className={`hover:bg-sliderButtonLightGray  ${index % 2 === 0 ? "bg-customWhite" : "bg-logoutBlueSoftColor"}`}
    >
      {matchData.thead.map((heading, i) => (
        <td key={i} className={`border border-sliderButtonMediumGray ${i===0 ? 'text-center': ''} text-xs px-4 py-2`}>
          {row[heading]}
        </td>
      ))}
    </tr>
  ))}
</tbody>

      </table>
    </div>
    );
};

export default ResultTable;