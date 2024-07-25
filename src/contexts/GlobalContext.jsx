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
  passwords: [],
  setPasswords: () => {},
  notes: [],
  setNotes: () => {},
  payCards: [],
  setPayCards: () => {},
  banksData: [],
  setBanksData: () => {},
  reset: false,
  setReset: () => {},
});

export default GlobalContext;
