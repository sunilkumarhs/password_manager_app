/* eslint-disable react/prop-types */
import { useState } from "react";
import GlobalContext from "./GlobalContext";
const ContextWrapper = (props) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userId, setUserId] = useState(null);
  return (
    <GlobalContext.Provider
      value={{
        accessToken,
        setAccessToken,
        userId,
        setUserId,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
