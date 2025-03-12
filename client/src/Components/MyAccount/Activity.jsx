import React from 'react';

const Activity = () => {
    const loginData = [
        {
          loginDateTime: "23-02-2025 14:40:13",
          loginStatus: "Login - -",
          ipAddress: "103.150.64.201",
          isp: "-",
          location: "Dhaka, Bangladesh",
          userAgentType: "Browser"
        },
        {
          loginDateTime: "22-02-2025 14:56:18",
          loginStatus: "Login - -",
          ipAddress: "103.150.64.205",
          isp: "-",
          location: "Rangpur City, Bangladesh",
          userAgentType: "Browser"
        },
        {
          loginDateTime: "22-02-2025 01:12:14",
          loginStatus: "Login - -",
          ipAddress: "103.150.64.205",
          isp: "-",
          location: "Rangpur City, Bangladesh",
          userAgentType: "Mobile"
        },
        {
          loginDateTime: "22-02-2025 01:12:14",
          loginStatus: "Login - -",
          ipAddress: "103.150.64.205",
          isp: "-",
          location: "Rangpur City, Bangladesh",
          userAgentType: "Mobile"
        },
        {
          loginDateTime: "22-02-2025 01:12:14",
          loginStatus: "Login - -",
          ipAddress: "103.150.64.205",
          isp: "-",
          location: "Rangpur City, Bangladesh",
          userAgentType: "Mobile"
        },
        {
          loginDateTime: "22-02-2025 01:12:14",
          loginStatus: "Login - -",
          ipAddress: "103.150.64.205",
          isp: "-",
          location: "Rangpur City, Bangladesh",
          userAgentType: "Mobile"
        },
        {
          loginDateTime: "22-02-2025 01:12:14",
          loginStatus: "Login - -",
          ipAddress: "103.150.64.205",
          isp: "-",
          location: "Rangpur City, Bangladesh",
          userAgentType: "Mobile"
        },
        {
          loginDateTime: "22-02-2025 01:10:57",
          loginStatus: "Login - -",
          ipAddress: "103.150.64.201",
          isp: "-",
          location: "Dhaka, Bangladesh",
          userAgentType: "Browser"
        },
        {
          loginDateTime: "22-02-2025 01:10:57",
          loginStatus: "Login - -",
          ipAddress: "103.150.64.201",
          isp: "-",
          location: "Dhaka, Bangladesh",
          userAgentType: "Browser"
        },
        {
          loginDateTime: "22-02-2025 01:09:57",
          loginStatus: "Login - -",
          ipAddress: "103.150.64.201",
          isp: "-",
          location: "Dhaka, Bangladesh",
          userAgentType: "Mobile"
        }
      ];
    return (
        <div className="overflow-x-auto p-4">
          <table className="min-w-full border whitespace-nowrap text-sm border-gray-300">
            {/* Table Head */}
            <thead className="">
              <tr className="bg-logoutBlueSoftColor   text-sm leading-normal">
                <th className="py-2 px-4 font-medium border">Login Date & Time</th>
                <th className="py-2 px-4 font-medium border">Login Status</th>
                <th className="py-2 px-4 font-medium border">IP Address</th>
                <th className="py-2 px-4 font-medium border">ISP</th>
                <th className="py-2 px-4 font-medium border">City/State/Country</th>
                <th className="py-2 px-4 font-medium border">User Agent Type</th>
              </tr>
            </thead>
    
            {/* Table Body */}
            <tbody>
              {loginData.map((data, index) => (
                <tr key={index} className=" bg-customWhite text-center">
                  <td className="py-2 px-4 border">{data.loginDateTime}</td>
                  <td className="py-2 px-4 text-tableGreenText border">{data.loginStatus}</td>
                  <td className="py-2 px-4 border">{data.ipAddress}</td>
                  <td className="py-2 px-4 border">{data.isp}</td>
                  <td className="py-2 px-4 border">{data.location}</td>
                  <td className="py-2 px-4 border">{data.userAgentType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
};

export default Activity;