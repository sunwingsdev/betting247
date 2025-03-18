import DynamicCompColor from "../../Components/Dashboard/DynamicCompColor";
import DynamicGradientColor from "../../Components/Dashboard/DynamicGradientColor";

const ColorControl = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      <DynamicGradientColor
        title={"Home page header color control"}
        section={"home-header"}
      />
      <DynamicCompColor
        title={"Home page navbar color control"}
        section={"home-navbar"}
      />
      <DynamicCompColor
        title={"Home page game play button color control"}
        section={"home-game-button"}
      />
    </div>
  );
};

export default ColorControl;
