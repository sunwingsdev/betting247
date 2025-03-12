import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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
import { useAddUserMutation } from "../../redux/features/allApis/usersApi/usersApi";

const RegistrationForm = ({ onClose }) => {
  const [addUser, { isLoading }] = useAddUserMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...userInfo } = data;
    userInfo.createdBy = "self";
    const result = await addUser(userInfo);
    if (result?.data?.insertedId) {
      toast.success("User created successfully");
      onClose();
      reset();
    }
    if (result?.error) {
      toast.error("Something went wrong");
    }
  };

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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username */}
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-600" />
              <input
                type="text"
                placeholder="Enter Username"
                {...register("username", { required: "Username is required" })}
                className="w-full pl-10 p-2 border rounded"
              />
              {errors.username && (
                <p className="text-red-500 text-sm pl-2">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-600" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full pl-10 p-2 border rounded"
              />
              <button
                className="absolute top-3 right-3"
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm pl-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <FaRegCheckSquare className="absolute top-3 left-3 text-gray-600" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter confirm password"
                {...register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                className="w-full pl-10 p-2 border rounded"
              />
              <button
                className="absolute top-3 right-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                type="button"
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </button>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm pl-2">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Contact Number */}
            <div className="relative">
              <FaPhone className="absolute top-3 left-3 text-gray-600" />
              <input
                type="text"
                placeholder="+880 Enter Contact number"
                {...register("phone", {
                  required: "Phone number is required",
                })}
                className="w-full pl-10 p-2 border rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm pl-2">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Promo Code */}
            <div className="relative">
              <FaMoneyBill className="absolute top-3 left-3 text-gray-600" />
              <input
                type="text"
                placeholder="Enter promo code (Optional)"
                {...register("promoCode")}
                className="w-full pl-10 p-2 border rounded"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-2 rounded mt-2 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>

            {/* Join Affiliate */}
            <button
              className="w-full bg-white text-black py-2 rounded mt-2 flex items-center justify-center gap-2"
              type="button"
            >
              Join Affiliate →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
