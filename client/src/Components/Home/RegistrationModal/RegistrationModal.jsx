import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FaUser,
  FaLock,
  FaPhone,
  FaEye,
  FaEyeSlash,
  FaCreditCard,
} from "react-icons/fa";
import { useAddUserMutation } from "../../../redux/features/allApis/usersApi/usersApi";

const RegistrationModal = ({ closeModal }) => {
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
      closeModal();
      reset();
    }
    if (result?.error) {
      toast.error("Something went wrong", );
    }
  };

  return (
    <div className="md:flex justify-center w-full bg-gray-900">
      <div className="w-1/2 bg-black py-3 hidden md:block"></div>
      <div className="w-full md:w-1/2 px-3 bg-yellow-500 py-3">
        <h2 className="text-center text-2xl font-bold mb-6">Registration</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="relative flex items-center">
            <FaUser className="absolute left-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Enter Username"
              {...register("username", { required: "Username is required" })}
              className="pl-10 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
          {errors.username && (
            <p className="text-red-600 text-sm">{errors.username.message}</p>
          )}

          <div className="relative flex items-center">
            <FaLock className="absolute left-3 text-gray-500" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
              className="pl-10 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <button
              type="button"
              className="absolute right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}

          <div className="relative flex items-center">
            <FaLock className="absolute left-3 text-gray-500" size={20} />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter confirm password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="pl-10 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
            <button
              type="button"
              className="absolute right-3"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-red-600 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}

          <div className="relative flex items-center">
            <FaPhone className="absolute left-3 text-gray-500" size={20} />
            <span className="absolute left-10 text-gray-500">+880</span>
            <input
              type="text"
              placeholder="Enter Contact number"
              {...register("phone", { required: "Phone number is required" })}
              className="pl-20 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone.message}</p>
          )}

          <div className="relative flex items-center">
            <FaCreditCard className="absolute left-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Enter promo code (Optional)"
              {...register("promoCode")}
              className="pl-10 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-black text-white py-2 rounded-md hover:bg-gray-800"
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <button className="w-full mt-3 flex items-center justify-center border border-gray-700 py-2 rounded-md hover:bg-gray-200">
          Join Affiliate
        </button>
      </div>
    </div>
  );
};
export default RegistrationModal;
