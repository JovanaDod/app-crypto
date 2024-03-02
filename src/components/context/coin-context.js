import React, {useEffect, useState, useContext, createContext} from "react";

const CoinContext = createContext({
    coins: [],
    fetchCoins: () => {},
  });
  
  export const CoinContextProvider = (props) => {
    const [coins, setCoins] = useState([]);
  
    useEffect(() => {
      const fetchCoins = async () => {
        const URL = "https://api.coingecko.com/api/v3/coins/markets?app_id=CG-M3t4McDdnyjURRmmRKSfkwyu&vs_currency=usd";
        const response = await fetch(URL);
        const data = await response.json();
        localStorage.setItem("coins", data);
        setCoins(data);
      };
  
      fetchCoins();
    }, []); 
  
    return (
      <CoinContext.Provider value={{ coins: coins }}>
        {props.children}
      </CoinContext.Provider>
    );
  };

export default CoinContext;