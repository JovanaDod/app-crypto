import { createContext } from "react";
import { useState, useEffect } from "react";

const RegisterContext = createContext({
    createdUser: [],
    registerHandler: () => {},
});

export const RegisterContextProvider = (props) => {
    const [createdUser, setCreatedUser] = useState(() => {
        const storedUsers = localStorage.getItem('createdUser');
        return storedUsers ? JSON.parse(storedUsers) : [];
    });

    useEffect(() => {
        localStorage.setItem('createdUser', JSON.stringify(createdUser));
    }, [createdUser]);

    const registerHandler = (user) => {
        console.log(user)
        setCreatedUser([...createdUser, user]);
    };

  return (
    <RegisterContext.Provider
      value={{
        registerHandler: registerHandler,
      }}
    >
      {props.children}
    </RegisterContext.Provider>
  );
};

export default RegisterContext;
