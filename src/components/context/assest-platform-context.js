import React, {useEffect, useState, useContext, createContext} from "react";

const AssetContext = createContext({
    asset: [],
    fetchAsset: () => {},
  });
  
  export const AssetContextProvider = (props) => {
    const [asset, setAsset] = useState([]);
  
    useEffect(() => {
      const fetchAsset = async () => {
        const URL = "https://api.coingecko.com/api/v3/asset_platforms?app_id=CG-M3t4McDdnyjURRmmRKSfkwyu";
        const response = await fetch(URL);
        const data = await response.json();
        localStorage.setItem("asset", data);
        setAsset(data);
      };
  
      fetchAsset();
    }, []); 
  
    return (
      <AssetContext.Provider value={{ asset: asset }}>
        {props.children}
      </AssetContext.Provider>
    );
  };

  export default AssetContext;