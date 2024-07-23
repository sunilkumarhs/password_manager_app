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
// import { api } from "../restApi/scurePass";
// import { toast } from "../components/ui/use-toast";
// import { decryptData } from "../utils/securingData";
import fetchUser from "../utils/fetchUser";

const Body = () => {
  const { accessToken, setAccessToken, setIsAuth, userId, setUser } =
    useContext(GlobalContext);
  useEffect(() => {
    if (accessToken) {
      fetchUser(userId, accessToken, setUser);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const fetchUser = async () => {
  //   const id = decryptData(userId);
  //   try {
  //     const token = decryptData(accessToken);
  //     const response = await api.get("/securepass_server/fetchUser/" + id, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     if (response.status === 200) {
  //       setUser(response.data);
  //     }
  //   } catch (err) {
  //     const errorStatus = err.response.status;
  //     const errMessage = err.response.data.message;
  //     const errMessage1 = err.response.data.error;
  //     toast({
  //       title: "ErrorCode:" + errorStatus,
  //       description: (
  //         <div className="mt-2 w-[340px] rounded-md bg-zinc-400 dark:bg-zinc-700 p-4">
  //           <p>{errMessage || errMessage1}</p>
  //         </div>
  //       ),
  //     });
  //   }
  // };
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
    console.log(remainingMilliseconds);

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
