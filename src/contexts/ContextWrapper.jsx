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
  return (
    <GlobalContext.Provider
      value={{
        accessToken,
        setAccessToken,
        userId,
        setUserId,
        isAuth,
        setIsAuth,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
