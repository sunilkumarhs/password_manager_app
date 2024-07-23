import { createContext } from "react";

const GlobalContext = createContext({
  accessToken: null,
  setAccessToken: () => {},
  userId: null,
  setUserId: () => {},
  isAuth: localStorage.getItem("accessToken") ? true : false,
  setIsAuth: () => {},
});

export default GlobalContext;
