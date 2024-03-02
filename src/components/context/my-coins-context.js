import React, {useEffect, useState, useContext, createContext} from "react";

const MyCoinsContext = createContext({
    myCoins: [],
    addMyCoin: () => {}
  });
  
  export const MyCoinsContextProvider = (props) => {
    const [myCoins, setMyCoins] = useState(() => {
        const storedCoins = localStorage.getItem('myCoins');
        return storedCoins ? JSON.parse(storedCoins) : [];
    });

    useEffect(() => {
        localStorage.setItem('myCoins', JSON.stringify(myCoins));
    }, [myCoins]);
    const addMyCoin = (newCoin) => {
        console.log(newCoin)
        setMyCoins([...myCoins, newCoin]);
    };
  
    return (
      <MyCoinsContext.Provider value={{ myCoins: myCoins, addMyCoin: addMyCoin }}>
        {props.children}
      </MyCoinsContext.Provider>
    );
  };

export default MyCoinsContext;