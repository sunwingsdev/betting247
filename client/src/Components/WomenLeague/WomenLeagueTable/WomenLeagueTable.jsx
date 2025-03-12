import React from 'react';


const WomenLeagueTable = () => {
    const teams = [
        {
          name: "Delhi Capitals Women",
          data: [
            { back: 151.36, lay: 3.45 },
            { back: 275, lay: 3.5 },
            { back: 1.6, lay: 4.9 },
            { back: 3.46, lay: 5.1 },
            { back: 1.45, lay: 5.2 },
            { back: 18.71, lay: 3.2 },
          ],
        },
        {
          name: "Mumbai Indians Women",
          data: [
            { back: 189.2, lay: 2.92 },
            { back: 367.6, lay: 3 },
            { back: 16.61, lay: 3.9 },
            { back: 13.99, lay: 3.95 },
            { back: 88, lay: 12 },
            { back: 20, lay: 2.76 },
          ],
        },
        {
          name: "RC Bengaluru Women",
          data: [
            { back: 86.54, lay: 2.84 },
            { back: 386.15, lay: 2.88 },
            { back: 20.85, lay: 3.5 },
            { back: 2.77, lay: 3.7 },
            { back: 3.46, lay: 3.8 },
            { back: 14.99, lay: 2.8 },
          ],
        },
        {
          name: "Gujarat Giants Women",
          data: [
            { back: 16.06, lay: 6.4 },
            { back: 33.25, lay: 6.6 },
            { back: 7.32, lay: 14.5 },
            { back: 66, lay: 15.5 },
            { back: 5, lay: 100 },
            { back: 5, lay: 6.2 },
          ],
        },
        {
          name: "UP Warriorz Women",
          data: [
            { back: 16.35, lay: 16 },
            { back: 12, lay: 21 },
            { back: 1.33, lay: 42 },
            { back: 6.89, lay: 150 },
            { back: 5.08, lay: 1000 },
            { back: 3.08, lay: 20 },
          ],
        },
      ];
    return (
        <div className="overflow-x-auto px-4 pt-4 bg-inPlayBgColor  lg:px-0">
          <table className=" w-full  bg-customWhite shadow-2xl ">
            <thead className="border-b-2 border-sliderButtonMediumGray">
              <tr className="text-[10px]  ">
                <th className="text-left px-4">5 selections</th>
                <th>200.7%</th>
                <th></th>
                <th className="bg-tableBoxDarkBlue py-[6px]"
                   style={{
                    clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  Back All
                </th>

                <th className="bg-tableBoxDarkPink py-[6px]"
                style={{
                  clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
                }}
                >
                  Lay All
                </th>
                <th></th>
                <th>96.3%</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr
                  key={index}
                  className="border-b text-xs  whitespace-nowrap  lg:text-md  border-black"
                >
                  <td className=" px-4  font-medium">{team.name}</td>
                  {team.data.map((entry, i) => (
                    <td
                      key={`lay-${index}-${i}`}
                      className={`py-3 px-4  leading-[1] ${
                        i === 0
                          ? "bg-tableBoxLightBlue"
                          : i === 1
                          ? "bg-tableBoxMediumBlue"
                          : i === 2
                          ? "bg-tableBoxBlue"
                          : i === 3
                          ? "bg-tableBoxPink"
                          : i === 4
                          ? "bg-tableBoxMediumPink"
                          : "bg-tableBoxLightPink"
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <span className="block text-[14px] font-medium">
                          {entry.lay}
                        </span>
                        <span className="block text-[13px]">{entry.back}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
};

export default WomenLeagueTable;