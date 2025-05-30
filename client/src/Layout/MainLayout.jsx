import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import { Helmet } from "react-helmet-async";
import { useGetHomeControlsQuery } from "../redux/features/allApis/homeControlApi/homeControlApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserStatus } from "../redux/slices/authSlice";
const MainLayout = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const dispatch = useDispatch();

  const title = homeControls?.find(
    (control) => control.category === "title" && control.isSelected
  );

  useEffect(() => {
    dispatch(checkUserStatus());
  }, [dispatch]);
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
