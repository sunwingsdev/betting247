import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import InPlay from "../Pages/InPlay/InPlay";
import MultiMarkets from "../Pages/MultiMarket/MultiMarkets";
import Cricket from "../Pages/Cricket/Cricket";
import Soccer from "../Pages/Soccer/Soccer";
import Tennis from "../Pages/Tennis/Tennis";
import Sports from "../Pages/Sports/Sports";
import WommenLeague from "../Pages/WomenLeague/WomenLeague";
import MyAccount from "../Pages/My Acoount/My Account";
import MyAccountPhoneDevice from "../Pages/MyAccountPhoneDevice/MyAccountPhoneDevice";
import Result from "../Pages/Resukt/Result";
import BalanceTransfer from "../Pages/BalanceTransfer/BalanceTransfer";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import Setting from "../Pages/Dashboard/Setting";
import AdminSetting from "../Pages/Dashboard/AdminSetting";
import UsersData from "../Pages/Dashboard/UsersData";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import DemoGame from "../Pages/DemoGame/DemoGame";
import Banking from "../Pages/Dashboard/Banking/Banking";
import HomeControl from "../Pages/Dashboard/HomeControl";
import Banner from "../Pages/Banner";
import Game from "../Pages/Dashboard/Game";
import BetList from "../Pages/Dashboard/BetList";
import BetListLive from "../Pages/Dashboard/BetListLive";
import ActiveGame from "../Pages/Dashboard/ActiveGame";
import DeactiveGame from "../Pages/Dashboard/DeactiveGame";
import LiveGame from "../Pages/Dashboard/LiveGame";
import AccountSummary from "../Components/Dashboard/AccountSummary";
import AccountTabs from "../Components/Dashboard/AccountTabs";
import AccountStatementTabs from "../Components/Dashboard/AccountStatementTabs";
import Profile from "../Components/Dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/games/demo/:id",
        element: <DemoGame />,
      },
      {
        path: "/inplay",
        element: <InPlay />,
      },
      {
        path: "/multimarket",
        element: <MultiMarkets />,
      },
      { path: "/cricket", element: <Cricket /> },
      { path: "/soccer", element: <Soccer /> },
      { path: "/tennis", element: <Tennis /> },
      {
        path: "/sports",
        element: <Sports />,
      },
      { path: "/womenleague", element: <WommenLeague /> },
      { path: "/myaccount", element: <MyAccount /> },
      {
        path: "/myaccountphone",
        element: (
          <PrivateRoute>
            <MyAccountPhoneDevice />{" "}
          </PrivateRoute>
        ),
      },
      { path: "/result", element: <Result /> },
      { path: "/balancetransfer", element: <BalanceTransfer /> },
    ],
  },
  {
    path: "/admindashboard",
    element: (
      <AdminRoute>
        {" "}
        <DashboardLayout />
      </AdminRoute>
    ),
    children: [
      { path: "", element: <AdminDashboard /> },
      { path: "generalsetting", element: <Setting /> },
      { path: "adminsetting", element: <AdminSetting /> },
      { path: "gameapi", element: <Game /> },
      { path: "homecontrol", element: <HomeControl /> },
      { path: "myaccount", element: <MyAccount /> },
      { path: "betlist", element: <BetList /> },
      { path: "betlive", element: <BetListLive /> },
      { path: "banking", element: <Banking /> },
      { path: "activegame", element: <ActiveGame /> },
      { path: "deactivegame", element: <DeactiveGame /> },
      { path: "livegame", element: <LiveGame /> },
      { path: "usersdata/:role", element: <UsersData /> },
    ],
  },
  { path: "/admin", element: <Banner /> },
  { path: "/accountsummary", element: <AccountSummary /> },
  { path: "/accounttabs", element: <AccountTabs /> },
  { path: "/accountstatementtabs", element: <AccountStatementTabs /> },
  { path: "/profile", element: <Profile /> },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
