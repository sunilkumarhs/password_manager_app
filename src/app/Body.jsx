import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPage from "./defaultSection/DefaultPage";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";

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
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
