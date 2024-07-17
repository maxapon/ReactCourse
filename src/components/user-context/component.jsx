import React from "react";
import { useState, useCallback, useContext, useReducer } from "react";

const UserContext = React.createContext();

export const UseUser = () => useContext(UserContext);

/*
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
};*/

const INITIAL_STATE = {
  userName: undefined,
  email: undefined,
  isAutorize: false,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "login":
      return {
        userName: payload.userName,
        email: payload.email,
        isAutorize: true,
      };
    case "logout":
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const userEnter = useCallback(({ userName, email }) => {
    dispatch({ type: "login", payload: { userName, email } });
  }, []);

  const userExit = useCallback(() => {
    dispatch({ type: "logout" });
  }, []);

  const value = {
    user: state,
    userEnter,
    userExit,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
