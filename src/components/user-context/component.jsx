import React from "react";
import { useState, useCallback, useContext } from "react";

const UserContext = React.createContext("");
export const UseUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const userEnter = useCallback((name) => {
    setUserName(name);
  }, []);

  const userExit = useCallback(() => {
    setUserName("");
  }, []);

  const isUserInSystem = useCallback(() => {
    return userName !== "";
  }, [userName]);

  return (
    <UserContext.Provider
      value={{ userName: userName, userEnter, userExit, isUserInSystem }}
    >
      {children}
    </UserContext.Provider>
  );
};
