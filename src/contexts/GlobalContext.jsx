import { createContext } from "react";

const GlobalContext = createContext({
  accessToken: null,
  setAccessToken: () => {},
  userId: null,
  setUserId: () => {},
});

export default GlobalContext;
