import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPage from "./DefaultPage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <DefaultPage />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
