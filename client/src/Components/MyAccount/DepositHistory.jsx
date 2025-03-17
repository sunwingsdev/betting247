import moment from "moment";
import { useGetDepositsQuery } from "../../redux/features/allApis/depositsApi/depositsApi";
import { useSelector } from "react-redux";

const DepositHistory = () => {
  const { data: deposits, isLoading } = useGetDepositsQuery();
  const { user } = useSelector((state) => state.auth);

  const myDeposits = deposits?.filter(
    (deposit) => deposit?.userId === user?._id
  );

  if (isLoading) return <div className="text-center mt-4">Loading...</div>;

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-headerGray text-headingTextColor text-center">
          <tr>
            <th className="border-y bg-headerGray border-gray-300 px-4 py-2 text-center text-sm font-medium uppercase">
              Channel
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-4 py-2 text-center text-sm font-medium uppercase">
              Method
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-2 py-2 text-center text-sm font-medium uppercase">
              Number
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-4 py-2 text-center text-sm font-medium uppercase">
              Transaction ID
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-2 py-2 text-center text-sm font-medium uppercase">
              BDT Amount
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-2 py-2 text-center text-sm font-medium uppercase">
              PBU Amount
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-12 py-2 text-center text-sm font-medium uppercase">
              Status
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-4 py-2 text-center text-sm font-medium uppercase">
              Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {myDeposits?.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                {/* <button className="w-6 h-6 bg-green-500  font-sans text-white text-xs rounded-sm">
                  AD
                </button> */}
                <span className="text-blue-500 pl-2">{row.channel}</span>
              </td>
              <td className="capitalize border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                {row?.method}
              </td>
              <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-red-700">
                {row.number}
              </td>
              <td className="border-b px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                {row?.transactionId}
              </td>
              <td className="border-b px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                {row?.bdtAmount}
              </td>
              <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                {row?.pbuAmount}
              </td>

              <td className="border-b px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                <div className="flex flex-row items-center justify-center space-x-1 ">
                  {row?.status === "pending" ? (
                    <>
                      <span className="text-yellow-800">
                        <svg
                          className="w-3 h-3 "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="yellow" />
                        </svg>
                      </span>
                      <span className="text-yellow-600 capitalize">
                        {row?.status}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-green-800">
                        <svg
                          className="w-3 h-3 "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="green" />
                        </svg>
                      </span>
                      <span className="text-green-800 capitalize">
                        {row?.status}
                      </span>
                    </>
                  )}
                </div>
              </td>
              <td className="border-b px-12 py-2 whitespace-nowrap text-sm text-gray-700">
                {" "}
                {moment(row.createdAt).format("Do MMM YYYY, h:mm a")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepositHistory;
