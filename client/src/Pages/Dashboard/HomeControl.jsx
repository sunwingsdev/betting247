import LogoUpload from "../../Components/Dashboard/LogoUpload";
import LogoSelection from "../../Components/Dashboard/LogoSelection";
import SliderUploadSection from "../../Components/Dashboard/SliderUploadSection";
import SliderSelectionSection from "../../Components/Dashboard/SliderSelectionSection";
import NoticeUploadSection from "../../Components/Dashboard/NoticeUploadSection";
import NoticeSelectionSection from "../../Components/Dashboard/NoticeSelectionSection";
import TitleUploadSection from "../../Components/Dashboard/TitleUploadSection";
import TitleSelectionSection from "../../Components/Dashboard/TitleSelectionSection";
import LoginImageUploadSection from "../../Components/Dashboard/LoginImageUploadSection";
import LoginImageSelectionSection from "../../Components/Dashboard/LoginImageSelectionSection";

const HomeControl = () => {
  return (
    <div className="bg-adminBackground min-h-screen">
      <h1 className="text-center text-xl font-bold bg-yellow-500 h-10">
        Home Control
      </h1>
      <div className="mx-4 bg-white">
        <LogoUpload />
        <LogoSelection />
        <SliderUploadSection />
        <SliderSelectionSection />
        <NoticeUploadSection />
        <NoticeSelectionSection />
        <TitleUploadSection />
        <TitleSelectionSection />
        <LoginImageUploadSection />
        <LoginImageSelectionSection />
      </div>
    </div>
  );
};

export default HomeControl;
