import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPage from "./defaultSection/DefaultPage";
import SignUp from "./authentication/SignUp";

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
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
