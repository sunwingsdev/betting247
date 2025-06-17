import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} duration={4000} />
      </HelmetProvider>
    </Provider>
  );
};

export default App;
