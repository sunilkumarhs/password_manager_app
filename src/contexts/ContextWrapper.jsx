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
  const [passwords, setPasswords] = useState(null);
  const [notes, setNotes] = useState(null);
  const [payCards, setPayCards] = useState(null);
  const [banksData, setBanksData] = useState(null);
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
        passwords,
        setPasswords,
        notes,
        setNotes,
        payCards,
        setPayCards,
        banksData,
        setBanksData,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
