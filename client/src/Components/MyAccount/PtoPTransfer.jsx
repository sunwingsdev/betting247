import { MdContentCopy } from "react-icons/md";

const PtoPTransfer = () => {
  return (
    <div className="w-4/5">
      <h1 className="text-black mb-1">P2P Transfer</h1>
      <div className="bg-white rounded-md p-3">
        <form className="mt-2 flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="myWalletId" className="mb-2">
              My Wallet Id
            </label>
            <div className="w-full flex flex-row items-center gap-4">
              <input
                type="text"
                name="myWalletId"
                className="border border-gray-500 rounded outline-none px-2 py-3 w-4/5"
              />
              <div className=" bg-[#ffb427] p-2 rounded">
                <MdContentCopy className="text-4xl" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="reWalletId" className="mb-2">
              Transfer To
            </label>
            <div className="w-full flex flex-col gap-4">
              <input
                type="text"
                name="reWalletId"
                className="border border-gray-500 rounded outline-none px-2 py-3 w-4/5"
                placeholder="Recipient Wallet ID"
              />
              <input
                type="text"
                name="transferAmount"
                className="border border-gray-500 rounded outline-none px-2 py-3 w-4/5"
                placeholder="Transfer Amount"
              />
              <input
                type="text"
                name="remark"
                className="border border-gray-500 rounded outline-none px-2 py-3 w-4/5"
                placeholder="Remark"
              />
            </div>
          </div>

          <div className="flex w-3/4 gap-4">
            <button className="text-black bg-white rounded w-full py-1 border border-gray-500">
              Clear
            </button>
            <button className="text-black bg-[#ffb427] rounded w-full py-1">
              Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PtoPTransfer;
