import { createContext, useEffect, useState } from "react";
import loginUser from "../../util/login-user";

const UserContext = createContext({
  isLoggedIn: false,
  isLoading: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});


export const UserContextProvider = (props) => {
  const [isLoggedInState, setIsLoggedInState] = useState(false);
  const [isLoadingState, setIsLoadingState] = useState(false);

  useEffect(() => {
    const userLoginInfo = localStorage.getItem("isLoggedIn");
    if (userLoginInfo === "1") {
      setIsLoggedInState(true);
    }
  }, []);

  const loginHandler = () => {
    setIsLoadingState(true);

    loginUser().then((response) => {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedInState(true);
      setIsLoadingState(false);
    });
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("myCoins");
    setIsLoggedInState(false);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedInState,
        isLoading: isLoadingState,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;