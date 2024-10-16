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
import { useContext, useEffect } from "react";
import GlobalContext from "../contexts/GlobalContext";
import fetchUser from "../utils/fetchUser";
import PasswordReset from "./authentication/PasswordReset";
import PasswordGenerater from "./mainSection/PasswordGenerater";
import Settings from "./userInfo/Settings";

const Body = () => {
  const { accessToken, setAccessToken, setIsAuth, setUser } =
    useContext(GlobalContext);
  useEffect(() => {
    if (accessToken) {
      fetchUser(accessToken, setUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const expiryDate = localStorage.getItem("expiryDate");
    if (!accessToken || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logoutHandler();
      return;
    }
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    setAutoLogout(remainingMilliseconds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const logoutHandler = () => {
    setIsAuth(false);
    setAccessToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("expiryDate");
    localStorage.removeItem("userId");
  };

  const setAutoLogout = (milliseconds) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };
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
      path: "/resetPass",
      element: <PasswordReset />,
    },
    {
      path: "/verify",
      element: <VerifcationPage />,
    },
    {
      path: "settings",
      element: <Settings />,
    },
    { path: "/dashBoard", element: <DashBoard /> },
    {
      path: "/passGenerater",
      element: <PasswordGenerater />,
    },
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
