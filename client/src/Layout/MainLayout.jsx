import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import { Helmet } from "react-helmet-async";
import { useGetHomeControlsQuery } from "../redux/features/allApis/homeControlApi/homeControlApi";
const MainLayout = () => {
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
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
