import { useState } from "react";
import bkash from "../../assets/deposit/bkash.png";
import cellfin from "../../assets/withdraw/Cellfin.webp";
import nagad from "../../assets/deposit/nagad.png";
import rocket from "../../assets/deposit/rocket.png";
import upay from "../../assets/deposit/upay.png";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useAddWithdrawMutation } from "../../redux/features/allApis/withdrawApi/withdrawApi";

const paymentMethods = [
  { name: "bkash", image: bkash },
  { name: "nagad", image: nagad },
  { name: "rocket", image: rocket },
  { name: "upay", image: upay },
  { name: "cellfin", image: cellfin },
];

const Withdraw = () => {
  const { user, singleUser } = useSelector((state) => state.auth);
  const [addWithdraw, { isLoading }] = useAddWithdrawMutation();
  const [pbuAmount, setPbuAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [currency, setCurrency] = useState("bdt");
  const [accountNo, setAccountNo] = useState("");

  const conversionRate = 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedMethod) {
      toast.error("Please select a payment method");
      return;
    }
    if (!pbuAmount || !accountNo) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (singleUser?.balance < pbuAmount) {
      toast.error("Insufficient balance");
      return;
    }
    // Form data object
    const formData = {
      pbuAmount,
      bdtAmount: pbuAmount * conversionRate,
      method: selectedMethod,
      currency,
      number: accountNo,
      userId: user?._id,
    };

    console.log("Withdraw Data:", formData);
    const result = await addWithdraw(formData);
    if (result?.error) {
      toast.error(result.data.error.message);
    }
    if (result?.data.insertedId) {
      toast.success("Withdraw successful");
      setAccountNo("");
      setPbuAmount("");
      setSelectedMethod("");
      setCurrency("bdt");
    }
  };

  return (
    <div className="w-full md:w-4/5">
      <h1 className="text-black mb-1">Withdraw</h1>
      <div className="bg-white rounded-md p-3">
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-6">
          {/* PBU Amount */}
          <div className="flex flex-col">
            <label htmlFor="pbuAmount">
              PBU amount <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="pbuAmount"
              value={pbuAmount}
              onChange={(e) => setPbuAmount(e.target.value)}
              className="border border-gray-500 rounded outline-none px-2 py-1"
              placeholder="Enter amount"
            />
          </div>

          {/* Payment Method Selection */}
          <div className="flex flex-col">
            <label htmlFor="paymentMethod" className="mb-2">
              Payment Method <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className={`border-2 cursor-pointer ${
                    selectedMethod === method.name
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedMethod(method.name)}
                >
                  <img
                    className="w-28 h-16"
                    src={method.image}
                    alt={method.name}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Currency Selection */}
          <div className="flex flex-col">
            <label htmlFor="currency">
              Currency <span className="text-red-600">*</span>
            </label>
            <select
              name="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="border border-gray-500 rounded outline-none px-2 py-1"
            >
              <option value="bdt">BDT</option>
              <option value="usd">USD</option>
              <option value="inr">INR</option>
            </select>
          </div>

          {/* Account No */}
          <div className="flex flex-col">
            <label htmlFor="accountNo">
              Account No. <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="accountNo"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
              className="border border-gray-500 rounded outline-none px-2 py-1"
              placeholder="Enter account no"
            />
          </div>

          {/* Submit Button */}
          <div className="flex w-full">
            <button
              type="submit"
              disabled={isLoading}
              className="text-black bg-[#ffb427] rounded w-full py-1 disabled:bg-slate-400"
            >
              {isLoading ? "Loading..." : "Withdraw"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
