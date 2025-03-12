import { Outlet } from "react-router-dom";
import CommonNavMenu from "../Components/Dashboard/CommonNavMenu";

const DashboardLayout = () => {
  return (
    <div>
      <CommonNavMenu></CommonNavMenu>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
