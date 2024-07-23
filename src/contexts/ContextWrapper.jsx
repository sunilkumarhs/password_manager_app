/* eslint-disable react/prop-types */
import { useState } from "react";
import GlobalContext from "./GlobalContext";
const ContextWrapper = (props) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null
  );
  const [userId, setUserId] = useState(localStorage.getItem("userId") || null);
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("accessToken") ? true : false
  );
  const [user, setUser] = useState(null);
  return (
    <GlobalContext.Provider
      value={{
        accessToken,
        setAccessToken,
        userId,
        setUserId,
        isAuth,
        setIsAuth,
        user,
        setUser,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
