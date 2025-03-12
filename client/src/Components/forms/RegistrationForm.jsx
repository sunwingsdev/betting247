import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import {
  FaLock,
  FaMoneyBill,
  FaPhone,
  FaRegCheckSquare,
  FaUser,
} from "react-icons/fa";

const RegistrationForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-full min-h-screen">
      <div className="w-full max-w-2xl bg-gray-900 flex rounded-lg shadow-lg">
        {/* Left Side (Placeholder) */}
        <div className="md:w-1/2 bg-gray-900 hidden md:flex items-center justify-center text-white p-6"></div>

        {/* Right Side (Registration Form) */}
        <div className="w-full md:w-1/2 bg-[#ffb427] p-6 relative rounded-r-lg">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-black text-2xl"
          >
            <AiOutlineClose />
          </button>

          {/* Title */}
          <h2 className="text-2xl text-black mb-5 text-center">Registration</h2>

          {/* Input Fields */}
          <div className="space-y-4">
            {/* Username */}
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-600" />
              <input
                type="text"
                placeholder="Enter Username"
                className="w-full pl-10 p-2 border rounded"
              />
              <p className="text-red-500 text-sm pl-2">Username is required</p>
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-600" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full pl-10 p-2 border rounded"
              />
              <button
                className="absolute top-3 right-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <FaRegCheckSquare className="absolute top-3 left-3 text-gray-600" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter confirm password"
                className="w-full pl-10 p-2 border rounded"
              />
              <button
                className="absolute top-3 right-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </button>
            </div>

            {/* Contact Number */}
            <div className="relative">
              <FaPhone className="absolute top-3 left-3 text-gray-600" />
              <input
                type="text"
                placeholder="+880 Enter Contact number"
                className="w-full pl-10 p-2 border rounded"
              />
            </div>

            {/* Promo Code */}
            <div className="relative">
              <FaMoneyBill className="absolute top-3 left-3 text-gray-600" />
              <input
                type="text"
                placeholder="Enter promo code (Optional)"
                className="w-full pl-10 p-2 border rounded"
              />
            </div>

            {/* Sign Up Button */}
            <button className="w-full bg-black text-white py-2 rounded mt-2">
              Sign Up
            </button>

            {/* Join Affiliate */}
            <button className="w-full bg-white text-black py-2 rounded mt-2 flex items-center justify-center gap-2">
              Join Affiliate →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
