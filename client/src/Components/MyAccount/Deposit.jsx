import personal from "../../assets/deposit/personal.png";
import agent from "../../assets/deposit/agent.png";
import merchant from "../../assets/deposit/merchant.png";
const Deposit = () => {
  return (
    <div className="w-4/5">
      <h1 className="text-black mb-1">Deposit</h1>
      <div className="bg-white rounded-md p-3">
        <div className="bg-[#254c5d] p-1 rounded-md">
          <h1 className="text-white text-center">1 PBU = 100 BDT</h1>
        </div>
        <form className="mt-4 flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="pbuAmount">
              PBU amount <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="pbuAmount"
              className="border border-gray-500 rounded outline-none px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="paymentMethod" className="mb-2">
              Payment Method <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-4">
              <div>
                <img src={agent} alt="agent img" />
              </div>
              <div>
                <img src={merchant} alt="merchant img" />
              </div>
              <div>
                <img src={personal} alt="personal img" />
              </div>
            </div>
          </div>

          <div className="flex w-full">
            <button
              type="submit"
              className="text-black bg-[#ffb427] rounded w-full py-1"
            >
              Make Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
