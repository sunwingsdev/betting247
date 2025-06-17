import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { useSelector } from "react-redux";
import { useUpdateProileMutation } from "../../redux/features/allApis/usersApi/usersApi";
import { toast } from "react-hot-toast";
import { useFetchUser } from "../../hooks/customHook";

const MyProfile = () => {
  const { user, singleUser } = useSelector((state) => state.auth);
  const { fetchUser } = useFetchUser(user?._id);
  const [updateProfile, { isLoading }] = useUpdateProileMutation();
  const [openModal, setOpenModal] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [formData, setFormData] = useState({});

  const accountDetails = [
    {
      title: "About You",
      firstName: singleUser?.firstName,
      lastName: singleUser?.lastName,
      birthday: singleUser?.birthday,
      email: singleUser?.email,
      password: "***************",
    },
    {
      title: "Setting",
      currency: singleUser?.currency || "PBU",
      oddsFormat: singleUser?.oddsFormat,
    },
    {
      title: "Address",
      address: singleUser?.address,
      townCity: singleUser?.townCity,
      country: singleUser?.country,
      countryState: singleUser?.countryState,
      postCode: singleUser?.postCode,
      timezone: singleUser?.timezone,
    },
    {
      title: "Commission",
      CommCharged: singleUser?.CommCharged,
    },
    {
      title: "Contact Details",
      phone: singleUser?.phone,
    },
  ];

  // Handle opening the modal for a specific section
  const handleEdit = (section) => {
    setEditingSection(section.title); // Set the section being edited
    setFormData(section); // Initialize form data with the section's current data
    setOpenModal(true); // Open the modal
  };

  // Handle input changes in the modal
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle saving the updated data
  const handleSave = async () => {
    // eslint-disable-next-line no-unused-vars
    const { title, ...profileInfo } = formData;
    const result = await updateProfile({
      id: singleUser?._id,
      data: profileInfo,
    });
    if (result?.error) {
      toast.error(result.error.data.error);
      return;
    }
    if (result?.data.modifiedCount > 0) {
      toast.success("Profile updated successfully");
      setOpenModal(false);
      fetchUser();
      return;
    }
  };

  return (
    <div>
      <h3 className="font-medium pb-2">Account Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {accountDetails.map((section, index) => (
          <div key={index} className="bg-customWhite shadow-md relative">
            {/* Section Title */}
            <h2 className="font-medium text-customWhite bg-logoutBlueColor px-4 py-2 flex justify-between items-center">
              {section.title}
              {/* Edit Button for the Section */}
              <button
                className="flex items-center gap-1 text-customWhite hover:text-tableBlueText"
                onClick={() => handleEdit(section)}
              >
                <MdEdit /> Edit
              </button>
            </h2>

            {/* Section Content */}
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
                      <span className="text-customBlack">{section[key]}</span>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {openModal && (
        <div
          className="fixed inset-0 flex items-center bg-customBlack bg-opacity-10 justify-center z-50"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="bg-inPlayBgColor px-6 py-4 rounded-lg shadow-lg relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-customBlack rounded-md p-1 text-customWhite hover:text-tableBlueText"
              onClick={() => setOpenModal(false)}
            >
              <ImCross className="w-2 h-auto" />
            </button>

            {/* Modal Title */}
            <h2 className="text-lg text-logoutBlueColor font-bold mb-2">
              Edit {editingSection}
            </h2>

            {/* Editable Fields */}
            <div className="space-y-2">
              {Object.keys(formData).map(
                (key) =>
                  key !== "title" && (
                    <div key={key}>
                      <label className="block text-sm font-bold mb-1 capitalize">
                        {key
                          .replace(/([A-Z])/g, " $1")
                          .replace(/^./, (str) => str.toUpperCase())}
                      </label>
                      <input
                        type="text"
                        className="w-full border shadow-md shadow-customWhite px-2 py-1 rounded"
                        value={formData[key]}
                        placeholder={`Enter your ${key} details`}
                        onChange={(e) => handleChange(key, e.target.value)}
                      />
                    </div>
                  )
              )}
            </div>

            {/* Save Button */}
            <div className="flex justify-center mt-6">
              <button
                className="px-10 py-2 bg-customBlack text-textYellowColor hover:bg-commonYellowColor font-bold hover:text-customBlack rounded"
                onClick={handleSave}
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
