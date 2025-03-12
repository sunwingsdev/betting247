import React, { useState } from 'react';
import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";

const MyProfile = () => {
    const accountDetails = [
        {
          title: "About You",
          firstName: "userdemo11",
          lastName: "Abir",
          birthday: "--",
          email: "userdemo1@gmail.com",
          password: "********************************",
        },
        {
          title: "Setting",
          currency: "PBU",
          oddsFormat: "--",
        },
    
        {
          title: "Address",
          address: "--",
          townCity: "--",
          country: "--",
          countryState: "--",
          postcode: "--",
          timezone: "Asia/Dhaka GMT+6:00",
        },
    
        {
          title: "Commission",
          CommCharged: "5%",
        },
    
        {
          title: "Contact Details",
          primaryNumber: "1708117270",
        },
      ];
      const fields = [
        {
          label: "New Password",
          state: "currentPassword",
          placeholder: "Enter your new password",
        },
        {
          label: "New Password Confirm",
          state: "newPassword",
          placeholder: "Enter new password Confirm",
        },
        {
          label: "Your Password ",
          state: "confirmPassword",
          placeholder: "Enter your password",
        },
      ];
      const [openModal, setOpenModal] = useState(false);
      const [formData, setFormData] = useState({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        const handleChange = (field, value) => {
            setFormData((prev) => ({ ...prev, [field]: value }));
          };
          const handleSubmit = () => {
            console.log("Password Data:", formData);
            // Optionally, you can add validation here
          };
    return (
        <div>
            <h3 className="font-medium pb-2 ">Account Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {accountDetails.map((section, index) => (
                <div key={index} className=" bg-customWhite    shadow-md ">
                  <h2 className="font-medium text-customWhite bg-logoutBlueColor px-4   ">
                    {section.title}
                  </h2>
                  <div className="space-y-2">
                    {Object.keys(section).map((key) =>
                      key !== "title" ? (
                        <div
                          key={key}
                          className="relative border-b border-sliderButtonMediumGray border-opacity-50"
                        >
                          <div className="grid grid-cols-3 text-sm px-4 py-[2px]">
                            <span className="text-customBlack font-medium capitalize">
                              {key
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (str) => str.toUpperCase())}
                            </span>
                            <span className="text-customBlack">
                              {section[key]}
                            </span>

                            {key === "password" && (
                              <span
                                className="absolute right-2  top-1/2 transform -translate-y-1/2 flex items-center gap-1 text-tableBlueText text-[13px] cursor-pointer hover:underline"
                                onClick={() => setOpenModal(true)}
                              >
                                Edit
                                <MdEdit stroke="2" />
                              </span>
                            )}
                            {openModal && (
                              <div
                                className="fixed inset-0 flex items-center  bg-customBlack bg-opacity-10 justify-center z-50 "
                                onClick={() => setOpenModal(false)}
                              >
                                <div
                                  className="bg-inPlayBgColor px-4 py-2 rounded-lg shadow-lg relative"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <button
                                    className="absolute top-2 right-2 bg-customBlack rounded-md p-1  text-customWhite hover:text-tableBlueText"
                                    onClick={() => setOpenModal(false)}
                                  >
                                    <ImCross className="w-2 h-auto" />
                                  </button>

                                  <h2 className="text-lg text-logoutBlueColor font-bold mb-4">
                                    Change Password
                                  </h2>

                                  {fields.map((field, index) => (
                                    <div
                                      key={field.state}
                                      className={`mb-3 flex flex-row ${
                                        index === 0 || index === 2
                                          ? "space-x-[12px] "
                                          : "space-x-1"
                                      }   justify-between  items-center`}
                                    >
                                      <label
                                        className={`block text-sm text-left font-bold ${
                                          index === 0 || index === 2
                                            ? "whitespace-nowrap "
                                            : ""
                                        }`}
                                      >
                                        {field.label}
                                      </label>
                                      <input
                                        type="password"
                                        className="w-full border shadow-md shadow-customWhite  p-2 rounded mt-1"
                                        placeholder={field.placeholder}
                                        value={formData[field.state]}
                                        onChange={(e) =>
                                          handleChange(
                                            field.state,
                                            e.target.value
                                          )
                                        }
                                      />
                                    </div>
                                  ))}

                                  {/* Change Button */}
                                  <div className="flex justify-center">
                                    <button
                                      className="px-12 py-2 bg-customBlack  text-textYellowColor hover:bg-commonYellowColor font-bold hover:text-customBlack rounded"
                                      onClick={handleSubmit}
                                    >
                                      Change
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
    );
};

export default MyProfile;