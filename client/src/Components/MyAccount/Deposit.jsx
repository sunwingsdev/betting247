import { useState, useEffect } from "react";
import personal from "../../assets/deposit/personal.png";
import agent from "../../assets/deposit/agent.png";
import merchant from "../../assets/deposit/merchant.png";
import { GoCopy } from "react-icons/go";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useAddDepositMutation } from "../../redux/features/allApis/depositsApi/depositsApi";
import { useGetPaymentMethodsQuery } from "../../redux/features/allApis/paymentMethodApi/paymentMethodApi";
import { uploadImage } from "../../hooks/files";

const Deposit = () => {
  const { user } = useSelector((state) => state.auth);
  const { data: paymentMethods } = useGetPaymentMethodsQuery();
  const [addDeposit, { isLoading }] = useAddDepositMutation();
  const [selectedChannel, setSelectedChannel] = useState("agent");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [filteredPaymentMethods, setFilteredPaymentMethods] = useState([]);
  const [bdtAmount, setBdtAmount] = useState("");
  const [pbuAmount, setPbuAmount] = useState(0);
  const [tempInputValues, setTempInputValues] = useState({});

  const conversionRate = 100;

  useEffect(() => {
    const depositMethods =
      paymentMethods?.filter(
        (method) =>
          method?.paymentType === "deposit" && method?.status === "active"
      ) || [];
    const filtered = depositMethods?.filter(
      (method) => method.channel === selectedChannel
    );
    setFilteredPaymentMethods(filtered);
    setSelectedPaymentMethod(null);
  }, [selectedChannel, paymentMethods]);

  useEffect(() => {
    setSelectedChannel("agent");
  }, []);

  useEffect(() => {
    if (bdtAmount) {
      const calculatedPbu = parseFloat(bdtAmount) / conversionRate;
      setPbuAmount(calculatedPbu.toFixed(2)); // Limit to 2 decimal places
    } else {
      setPbuAmount(0);
    }
  }, [bdtAmount]);

  const handleInputChange = (name, value) => {
    setTempInputValues((prevValues) => ({
      ...prevValues,
      [name]: value, // Update the temporary state
    }));
  };

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
    if (!bdtAmount) {
      toast.error("Please enter the BDT amount.");
      return;
    }
    const paymentInputs = [];
    for (const [name, value] of Object.entries(tempInputValues)) {
      if (value instanceof File) {
        try {
          const { filePath } = await uploadImage(value);
          paymentInputs.push({ [name]: filePath });
          // eslint-disable-next-line no-unused-vars
        } catch (error) {
          toast.error("Failed to upload file. Please try again.");
          continue;
        }
      } else {
        paymentInputs.push({ [name]: value });
      }
    }

    const depositInfo = {
      channel: selectedChannel,
      method: selectedPaymentMethod.method,
      number: selectedPaymentMethod.number,
      bdtAmount,
      pbuAmount,
      userId: user?._id,
      paymentInputs,
    };
    console.log(depositInfo);

    const result = await addDeposit(depositInfo);
    if (result.error) {
      toast.error(result.data.error.message);
    } else {
      toast.success("Deposit request sent successfully!");
      setBdtAmount("");
      setPbuAmount(0);
      setSelectedChannel("agent");
      setSelectedPaymentMethod(null);
      setTempInputValues({});
    }

    // You can add further logic here, such as making an API call
  };

  return (
    <div className="w-full md:w-4/5">
      <h1 className="text-black mb-1">Deposit</h1>
      <div className="bg-white rounded-md p-3">
        <div className="bg-[#254c5d] p-1 rounded-md">
          <h1 className="text-white text-center">
            1 PBU = {conversionRate} BDT
          </h1>
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
            <div className="flex items-center gap-4">
              {filteredPaymentMethods?.length === 0 ? (
                <p className="text-center">No payment method found</p>
              ) : (
                filteredPaymentMethods?.map((method) => (
                  <div
                    key={method._id}
                    onClick={() => setSelectedPaymentMethod(method)}
                    className={`cursor-pointer p-2 ${
                      selectedPaymentMethod?._id === method._id
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                  >
                    <label htmlFor="paymentMethod" className="mb-2">
                      Payment Method <span className="text-red-600">*</span>
                    </label>
                    <img
                      src={`${import.meta.env.VITE_BASE_API_URL}${
                        method.image
                      }`}
                      alt={`${method.method} img`}
                      className="w-32 object-contain"
                    />
                  </div>
                ))
              )}
            </div>
            {selectedPaymentMethod?.number && (
              <>
                <div className="mt-2 p-3 bg-gray-100 rounded-md flex items-center gap-2">
                  <p className="text-lg font-semibold text-gray-800">
                    Payment Number: {selectedPaymentMethod.number}
                  </p>

                  <GoCopy
                    className="text-xl cursor-pointer text-gray-500 hover:text-blue-800"
                    onClick={() =>
                      handleCopyNumber(selectedPaymentMethod.number)
                    }
                  />
                </div>
              </>
            )}
          </div>

          {selectedPaymentMethod?.userInputs?.length &&
            selectedPaymentMethod?.userInputs?.map((item) => (
              <div key={item.name} className="flex flex-col">
                <label htmlFor="transactionId">
                  {item.label}{" "}
                  <span
                    className={`text-red-600 ${
                      item.isRequired === "required" ? "" : "hidden"
                    }`}
                  >
                    *
                  </span>
                </label>

                {item?.type === "file" ? (
                  <input
                    name={item?.name}
                    type="file"
                    className="w-full py-1.5 px-3 outline-none rounded-sm"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      handleInputChange(item?.name, file); // Update temporary state with the file
                    }}
                    required={item?.isRequired === "required"}
                  />
                ) : (
                  <input
                    name={item?.name}
                    type={item?.type}
                    className="w-full py-1.5 px-3 outline-none rounded-sm"
                    placeholder={item?.label}
                    value={tempInputValues[item?.name] || ""} // Bind to temporary state
                    onChange={(e) => {
                      const value = e.target.value;
                      handleInputChange(item?.name, value); // Update temporary state with the input value
                    }}
                    required={item?.isRequired === "required"}
                  />
                )}
              </div>
            ))}

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
