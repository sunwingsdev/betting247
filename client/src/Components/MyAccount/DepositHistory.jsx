const DepositHistory = () => {
  return (
    <div className="w-4/5">
      <h1 className="text-black mb-1">Deposit History</h1>
      <div className="bg-[#e0e6e6] p-2">
        <form className="flex items-center gap-3">
          <input
            type="text"
            name=""
            placeholder="Search Transaction Id"
            className="px-2 py-1 bg-[#ced5da] placeholder-gray-600 outline-none"
          />
          <div className="flex items-center gap-3">
            <button className="bg-black text-yellow-400 rounded px-3 py-0.5 font-bold">
              Get Request
            </button>
            <button className="bg-black text-yellow-400 rounded px-3 py-0.5 font-bold">
              Clear Filter
            </button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="">
            <tr className=" text-left text-sm font-semibold">
              <th className="px-4 py-2 border-y border-black">Created On</th>
              <th className="px-4 py-2 border-y border-black">Payment Type</th>
              <th className="px-4 py-2 border-y border-black">
                Payment Method
              </th>
              <th className="px-4 py-2 border-y border-black">PBU Amount</th>
              <th className="px-4 py-2 border-y border-black">Trx Id</th>
              <th className="px-4 py-2 border-y border-black">Status</th>
              <th className="px-4 py-2 border-y border-black">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="7"
                className="text-center py-6 text-gray-600 bg-gray-100"
              >
                No Data Found
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepositHistory;
