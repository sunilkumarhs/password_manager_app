import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPage from "./defaultSection/DefaultPage";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import DashBoard from "./mainSection/DashBoard";
import VerifcationPage from "./authentication/VerifcationPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <DefaultPage />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path: "/verify",
      element: <VerifcationPage />,
    },
    { path: "/dashBoard", element: <DashBoard /> },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
