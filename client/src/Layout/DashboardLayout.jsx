import { Outlet } from "react-router-dom";
import CommonNavMenu from "../Components/Dashboard/CommonNavMenu";
import { Helmet } from "react-helmet-async";
import { useGetHomeControlsQuery } from "../redux/features/allApis/homeControlApi/homeControlApi";

const DashboardLayout = () => {
  const { data: homeControls } = useGetHomeControlsQuery();

  const title = homeControls?.find(
    (control) => control.category === "title" && control.isSelected
  );
  return (
    <div>
      <Helmet>
        <title>{`${title?.title || "***"}`} | Official</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${import.meta.env.VITE_BASE_API_URL}${title?.image}`}
        />
      </Helmet>
      <CommonNavMenu></CommonNavMenu>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
