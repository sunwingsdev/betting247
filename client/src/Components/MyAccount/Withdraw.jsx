import bkash from "../../assets/withdraw/BKash_logo.svg";
import cellfin from "../../assets/withdraw/Cellfin.webp";
import nagad from "../../assets/withdraw/Nagad.jpeg";
import rocket from "../../assets/withdraw/rocket.png";
import upay from "../../assets/withdraw/Upay.png";

const Withdraw = () => {
  return (
    <div className="w-4/5">
      <h1 className="text-black mb-1">Withdraw</h1>
      <div className="bg-white rounded-md p-3">
        <form className="mt-4 flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="pbuAmount">
              PBU amount <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="pbuAmount"
              className="border border-gray-500 rounded outline-none px-2 py-1"
              placeholder="Enter amount"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="paymentMethod" className="mb-2">
              Payment Method <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-4">
              <div className="w-16 border border-gray-400">
                <img src={bkash} alt="bkash img" />
              </div>
              <div className="w-16 border border-gray-400">
                <img src={nagad} alt="nagad img" />
              </div>
              <div className="w-16 border border-gray-400">
                <img src={rocket} alt="rocket img" />
              </div>
              <div className="w-16 border border-gray-400">
                <img src={upay} alt="upay img" />
              </div>
              <div className="w-16 border border-gray-400">
                <img src={cellfin} alt="cellfin img" />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="currency">
              Currency <span className="text-red-600">*</span>
            </label>
            <select
              name="currency"
              className="border border-gray-500 rounded outline-none px-2 py-1"
            >
              <option value="bdt">BDT</option>
              <option value="usd">USD</option>
              <option value="inr">INR</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="accountNo">
              Account No. <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="accountNo"
              className="border border-gray-500 rounded outline-none px-2 py-1"
              placeholder="Enter account no"
            />
          </div>

          <div className="flex w-full">
            <button
              type="submit"
              className="text-black bg-[#ffb427] rounded w-full py-1"
            >
              Withdraw
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
