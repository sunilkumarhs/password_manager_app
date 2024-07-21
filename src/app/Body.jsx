import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPage from "./defaultSection/DefaultPage";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import DashBoard from "./mainSection/DashBoard";
import VerifcationPage from "./authentication/VerifcationPage";
import PasswordVaultPage from "./mainSection/passwordVault/PasswordVaultPage";
import NotesPage from "./mainSection/notesSection/NotesPage";
import CardsPage from "./mainSection/cardsSection/CardPage";
import BankPage from "./mainSection/bankAccSection/BankPage";
import SharedPage from "./mainSection/sharedSection/SharedPage";

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
    {
      path: "/passwordVault",
      element: <PasswordVaultPage />,
    },
    { path: "/notesPage", element: <NotesPage /> },
    { path: "/cardsPage", element: <CardsPage /> },
    { path: "/banksPage", element: <BankPage /> },
    { path: "/sharedPage", element: <SharedPage /> },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
