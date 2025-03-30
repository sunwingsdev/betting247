import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogo from "../assets/bg.png";
import llogo from "../assets/logImage.jpg";
import { IoReload } from "react-icons/io5";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import { useDispatch } from "react-redux";
import { logout, setCredentials } from "@/redux/slices/authSlice";
import toast from "react-hot-toast";
import { useGetHomeControlsQuery } from "../redux/features/allApis/homeControlApi/homeControlApi";

const SubAgentLogin = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const dispatch = useDispatch();
  const [validationCode, setValidationCode] = useState(generateCode());
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const control = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected
  );

  function generateCode() {
    return Math.floor(1000 + Math.random() * 9000).toString();
  }

  const reloadCode = () => {
    const newCode = generateCode();
    setValidationCode(newCode);
    setCode("");
  };

  // Handle form submission
  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      const { data: loginData } = await loginUser({ username, password });

      if (loginData.token) {
        const { data: userData } = await getUser(loginData.token);
        if (!userData?.role || userData?.role !== "sub-agent") {
          dispatch(logout());
          localStorage.removeItem("token");
          toast.error("Please login with valid credentials");
        } else {
          dispatch(setCredentials({ token: loginData.token, user: userData }));
          toast.success("Login successful");
          navigate("/admindashboard");
        }
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Provide valid username and password");
    }
  };

  return (
    <div className="overflow-y-auto">
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${blogo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex overflow-y-auto border border-white bg-white shadow-xl rounded-lg">
          <figure className="w-1/3 md:w-1/2">
            <img
              src={llogo}
              alt="Album"
              className="object-cover w-full h-full md:h-[500px]"
            />
          </figure>
          <div className="md:w-1/2 w-3/2 bg-black p-1">
            <div className="flex items-center justify-center">
              <img
                src={`${import.meta.env.VITE_BASE_API_URL}${control?.image}`}
                alt="Logo"
                className="w-40 h-14"
              />
            </div>
            <h3 className="text-center text-[20px] font-bold mb-4">
              Agent Login
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              {/* Username Input */}
              <div className="flex flex-col items-center justify-center">
                <input
                  type="text"
                  placeholder="Username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className="w-52 h-8 px-3 py-3 border border-loginColor placeholder:text-sm rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-4 flex flex-col items-center justify-center">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-52 px-3 py-3 border placeholder:text-sm border-loginColor h-8 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Validation Code Input */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <span className="text-black text-sm font-bold px-2 py-1  rounded">
                      {validationCode}
                    </span>
                    <button
                      type="button"
                      onClick={reloadCode}
                      className="ml-2 text-sm bg-yellow-500 px-2 py-1 text-white rounded hover:bg-yellow-600"
                    >
                      <IoReload />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Validation Code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    maxLength={4}
                    className="w-52 px-3 py-3 border border-loginColor h-8 rounded-sm placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex items-center justify-center">
                <button
                  disabled={!code || code !== validationCode || isLoading}
                  type="submit"
                  className="md:w-52 py-2 px-4 w-full bg-loginColor disabled:bg-gray-400 text-black font-medium rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {isLoading ? "Loading..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubAgentLogin;
