import { useState } from "react";
import DynamicModal from "../modals/DynamicModal";
import MotherAdminImgUploadForm from "./MotherAdminImgUploadForm";

const MotherAdminImgUploadSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row px-3 items-center justify-between bg-black text-white h-12">
        <p className="text-xl">Upload Admin Image</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-xs pl-3 pr-2 py-1 text-black bg-yellow-500 hover:bg-yellow-600 transition-colors"
        >
          +Add
        </button>
      </div>
      <DynamicModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <MotherAdminImgUploadForm closeModal={() => setIsModalOpen(false)} />
      </DynamicModal>
    </>
  );
};

export default MotherAdminImgUploadSection;
