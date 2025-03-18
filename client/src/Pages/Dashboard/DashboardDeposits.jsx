import moment from "moment";
import {
  useGetDepositsQuery,
  useUpdateStatusMutation,
} from "../../redux/features/allApis/depositsApi/depositsApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const DashboardDeposits = () => {
  const { data: deposits, isLoading } = useGetDepositsQuery();
  const [updateStatus, { isLoading: updateStatusLoading }] =
    useUpdateStatusMutation();

  const handleUpdateStatus = async (id, status) => {
    const statusInfo = { id, data: { status } };
    const result = await updateStatus(statusInfo);
    if (result.error) {
      toast.error(result.error.data.error);
    }
    if (result.data.modifiedCount > 0) {
      toast.success("Status updated successfully");
    }
  };

  const isImageUrl = (url) => {
    // Regex to check if the URL ends with common image extensions
    return /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(url);
  };

  if (isLoading) return <div className="text-center mt-4">Loading...</div>;

  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-headerGray text-headingTextColor text-center">
          <tr>
            <th className="border-y bg-headerGray border-gray-300 px-2 py-1 text-center text-sm font-medium uppercase">
              Channel
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-2 py-1 text-center text-sm font-medium uppercase">
              Method
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-2 py-2 text-center text-sm font-medium uppercase">
              Number
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-2 py-1 text-center text-sm font-medium uppercase">
              User Inputs
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-2 py-2 text-center text-sm font-medium uppercase">
              BDT Amount
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-2 py-2 text-center text-sm font-medium uppercase">
              PBU Amount
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-12 py-2 text-center text-sm font-medium uppercase">
              Username
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-12 py-2 text-center text-sm font-medium uppercase">
              Status
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-2 py-1 text-center text-sm font-medium uppercase">
              Time
            </th>
            <th className="border-y bg-headerGray border-gray-300 px-12 py-2 text-center text-sm font-medium uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {deposits?.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border-b px-2 py-1 whitespace-nowrap text-sm text-gray-700">
                {/* <button className="w-6 h-6 bg-green-500  font-sans text-white text-xs rounded-sm">
                  AD
                </button> */}
                <span className="text-blue-500 pl-2">{row.channel}</span>
              </td>
              <td className="capitalize border-b px-2 py-1 whitespace-nowrap text-sm text-gray-700">
                {row?.method}
              </td>
              <td className="border-b px-2 py-1 whitespace-nowrap text-sm text-red-700">
                {row.number}
              </td>
              <td className="border-b px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                {row?.paymentInputs?.map((input, index) => {
                  const [key, value] = Object.entries(input)[0];
                  return (
                    <div key={index} className="flex items-center">
                      <strong className="mr-2 capitalize">{key}:</strong>
                      {typeof value === "string" && isImageUrl(value) ? (
                        <Link
                          to={`${import.meta.env.VITE_BASE_API_URL}${value}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`${import.meta.env.VITE_BASE_API_URL}${value}`}
                            alt={key}
                            className="w-24 h-auto rounded"
                          />
                        </Link>
                      ) : (
                        <span>{value}</span>
                      )}
                    </div>
                  );
                })}
              </td>
              <td className="border-b px-2 py-2 whitespace-nowrap text-sm text-gray-700">
                {row?.bdtAmount}
              </td>
              <td className="border-b px-2 py-1 whitespace-nowrap text-sm text-gray-700">
                {row?.pbuAmount}
              </td>
              <td className="border-b px-2 py-1 whitespace-nowrap text-sm text-gray-700">
                {row?.userInfo?.username}
              </td>
              <td className="border-b px-2 py-1 whitespace-nowrap text-sm text-gray-700">
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
                      <span className="text-yellow-800 capitalize">
                        {row?.status}
                      </span>
                    </>
                  ) : row?.status === "approved" ? (
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
                  ) : (
                    <>
                      <span className="text-red-600">
                        <svg
                          className="w-3 h-3 "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 100 100"
                        >
                          <circle cx="50" cy="50" r="40" fill="red" />
                        </svg>
                      </span>
                      <span className="text-red-800 capitalize">
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
              <td className="border-b lg:border-opacity-10 flex flex-row items-center justify-center space-x-2 px-12 py-2 whitespace-nowrap text-sm text-gray-700">
                {row?.status === "pending" ? (
                  <>
                    <button
                      onClick={() => handleUpdateStatus(row?._id, "approved")}
                      disabled={updateStatusLoading}
                      className="w-16 h-8 bg-green-600  font-sans text-white  rounded-sm disabled:bg-slate-400"
                    >
                      {updateStatusLoading ? "Loading..." : "Accept"}
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(row?._id, "rejected")}
                      disabled={updateStatusLoading}
                      className="w-16 h-8 bg-red-600  font-sans text-white  rounded-sm disabled:bg-slate-400"
                    >
                      {updateStatusLoading ? "Loading..." : "Reject"}
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-8"></div>
                    <div className="w-16 h-8"></div>
                  </>
                )}

                <button className="w-8 h-8 bg-gray-200 rounded-sm font-sans">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-8 h-4 font-medium"
                  >
                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardDeposits;
