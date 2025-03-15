import { useState, useEffect } from "react";
import personal from "../../assets/deposit/personal.png";
import agent from "../../assets/deposit/agent.png";
import merchant from "../../assets/deposit/merchant.png";
import bkash from "../../assets/deposit/bkash.png";
import nagad from "../../assets/deposit/nagad.png";
import rocket from "../../assets/deposit/rocket.png";
import { GoCopy } from "react-icons/go";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useAddDepositMutation } from "../../redux/features/allApis/depositsApi/depositsApi";

const paymentMethods = [
  {
    _id: 1,
    name: "bkash",
    channel: "agent",
    image: bkash,
    number: "01700000000",
  },
  {
    _id: 2,
    name: "nagad",
    channel: "agent",
    image: nagad,
    number: "01900000000",
  },
  {
    _id: 3,
    name: "rocket",
    channel: "agent",
    image: rocket,
    number: "01900000000",
  },
  {
    _id: 4,
    name: "bkash",
    channel: "merchant",
    image: bkash,
    number: "01700000000",
  },
  {
    _id: 5,
    name: "nagad",
    channel: "personal",
    image: nagad,
    number: "01900000000",
  },
  {
    _id: 6,
    name: "rocket",
    channel: "personal",
    image: rocket,
    number: "01900000000",
  },
];

const Deposit = () => {
  const { user } = useSelector((state) => state.auth);
  const [addDeposit, { isLoading }] = useAddDepositMutation();
  const [selectedChannel, setSelectedChannel] = useState("agent");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [filteredPaymentMethods, setFilteredPaymentMethods] = useState([]);
  const [transactionId, setTransactionId] = useState("");
  const [bdtAmount, setBdtAmount] = useState("");
  const [pbuAmount, setPbuAmount] = useState(0);

  const conversionRate = 100; // 1 PBU = 100 BDT

  useEffect(() => {
    // Filter payment methods based on the selected channel
    const filtered = paymentMethods.filter(
      (method) => method.channel === selectedChannel
    );
    setFilteredPaymentMethods(filtered);
    // Reset selected payment method when channel changes
    setSelectedPaymentMethod(null);
  }, [selectedChannel]);

  useEffect(() => {
    // Set the first channel as default
    setSelectedChannel("agent");
  }, []);

  useEffect(() => {
    // Calculate PBU amount whenever BDT amount changes
    if (bdtAmount) {
      const calculatedPbu = parseFloat(bdtAmount) / conversionRate;
      setPbuAmount(calculatedPbu.toFixed(2)); // Limit to 2 decimal places
    } else {
      setPbuAmount(0);
    }
  }, [bdtAmount]);

  const handleCopyNumber = (number) => {
    navigator.clipboard.writeText(number);
    alert("Number copied to clipboard!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPaymentMethod) {
      toast.error("Please select a payment method.");
      return;
    }
    if (!transactionId) {
      toast.error("Please enter the transaction ID.");
      return;
    }
    if (!bdtAmount) {
      toast.error("Please enter the BDT amount.");
      return;
    }

    const depositInfo = {
      channel: selectedChannel,
      method: selectedPaymentMethod.name,
      number: selectedPaymentMethod.number,
      transactionId,
      bdtAmount,
      pbuAmount,
      userId: user?._id,
    };
    console.log(depositInfo);

    const result = await addDeposit(depositInfo);
    if (result.error) {
      toast.error(result.data.error.message);
    } else {
      toast.success("Deposit request sent successfully!");
      setBdtAmount("");
      setTransactionId("");
      setPbuAmount(0);
      setSelectedChannel("agent");
      setSelectedPaymentMethod(null);
    }

    // You can add further logic here, such as making an API call
  };

  return (
    <div className="w-full md:w-4/5">
      <h1 className="text-black mb-1">Deposit</h1>
      <div className="bg-white rounded-md p-3">
        <div className="bg-[#254c5d] p-1 rounded-md">
          <h1 className="text-white text-center">1 PBU = 100 BDT</h1>
        </div>
        <form className="mt-4 flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="bdtAmount">
              BDT Amount <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="bdtAmount"
              value={bdtAmount}
              onChange={(e) => setBdtAmount(e.target.value)}
              className="border border-gray-500 rounded outline-none px-2 py-1"
              required
            />
            <p className="text-sm text-gray-600 mt-1">
              PBU Amount: {pbuAmount} PBU
            </p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="paymentMethod" className="mb-2">
              Channel <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-4">
              <div
                onClick={() => setSelectedChannel("agent")}
                className={`cursor-pointer p-1 ${
                  selectedChannel === "agent" ? "border-2 border-blue-500" : ""
                }`}
              >
                <img src={agent} alt="agent img" className=" object-contain" />
              </div>
              <div
                onClick={() => setSelectedChannel("merchant")}
                className={`cursor-pointer p-1 ${
                  selectedChannel === "merchant"
                    ? "border-2 border-blue-500"
                    : ""
                }`}
              >
                <img
                  src={merchant}
                  alt="merchant img"
                  className="object-contain"
                />
              </div>
              <div
                onClick={() => setSelectedChannel("personal")}
                className={`cursor-pointer p-1 ${
                  selectedChannel === "personal"
                    ? "border-2 border-blue-500"
                    : ""
                }`}
              >
                <img
                  src={personal}
                  alt="personal img"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="paymentMethod" className="mb-2">
              Payment Method <span className="text-red-600">*</span>
            </label>
            <div className="flex items-center gap-4">
              {filteredPaymentMethods.map((method) => (
                <div
                  key={method._id}
                  onClick={() => setSelectedPaymentMethod(method)}
                  className={`cursor-pointer p-2 ${
                    selectedPaymentMethod?._id === method._id
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                >
                  <img
                    src={method.image}
                    alt={`${method.name} img`}
                    className="w-32 object-contain"
                  />
                </div>
              ))}
            </div>
            {selectedPaymentMethod && (
              <div className="mt-2 p-3 bg-gray-100 rounded-md flex items-center gap-2">
                <p className="text-lg font-semibold text-gray-800">
                  Payment Number: {selectedPaymentMethod.number}
                </p>

                <GoCopy
                  className="text-xl cursor-pointer text-gray-500 hover:text-blue-800"
                  onClick={() => handleCopyNumber(selectedPaymentMethod.number)}
                />
              </div>
            )}
          </div>

          {selectedPaymentMethod && (
            <div className="flex flex-col">
              <label htmlFor="transactionId">
                Transaction ID <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="transactionId"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="border border-gray-500 rounded outline-none px-2 py-1"
                required
              />
            </div>
          )}

          <div className="flex w-full">
            <button
              type="submit"
              disabled={isLoading}
              className="text-black bg-[#ffb427] rounded w-full py-1"
            >
              {isLoading ? "Loading..." : "Make Payment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
