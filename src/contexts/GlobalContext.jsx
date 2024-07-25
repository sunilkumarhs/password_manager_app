import { createContext } from "react";

const GlobalContext = createContext({
  accessToken: null,
  setAccessToken: () => {},
  userId: null,
  setUserId: () => {},
  isAuth: localStorage.getItem("accessToken") ? true : false,
  setIsAuth: () => {},
  user: null,
  setUser: () => {},
  passwords: null,
  setPasswords: () => {},
  notes: null,
  setNotes: () => {},
  payCards: null,
  setPayCards: () => {},
  banksData: null,
  setBanksData: () => {},
});

export default GlobalContext;
