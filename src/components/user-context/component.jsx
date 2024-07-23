import React from "react";
import { useCallback, useContext, useReducer } from "react";

const UserContext = React.createContext();

export const useUser = () => useContext(UserContext);

const defaultUserImg = {
  IMG1: "/src/resources/user.png",
  IMG2: "/src/resources/userEnter.png",
};

const INITIAL_STATE = {
  userName: undefined,
  email: undefined,
  isAutorize: false,
  profileImg: defaultUserImg.IMG1,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "login":
      return {
        userName: payload.userName,
        email: payload.email,
        isAutorize: true,
        profileImg: defaultUserImg.IMG2,
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
