import React, {useEffect, useState, useContext} from "react";
import Container from "@mui/material/Container";
import {Button, Grid} from "@mui/material";
import { CoinContextProvider } from "./context/coin-context";
import CoinContext from "./context/coin-context";
import CoinCard from "./CoinCard";

const CryptoCurrenciesPage = () => {
  const { coins } = useContext(CoinContext);
  const coinsPage = 10;
  const [next, setNext] = (useState(coinsPage));

  const handleOnLoadMore = () => {
    setNext(next + coinsPage);
  }

  const isEndOfCoins = next >= coins.length;
  
  return (
    <CoinContextProvider>
      <Container sx={{ textAlign: "center", marginTop: "15px" }}>
    <Grid container spacing={3} justifyContent="center">
      {coins.slice(0, next).map((coin) => (
        <Grid item key={coin.id} xs={12} sm={6} md={4} lg={3} sx={{ textAlign: "center" }}>
          <CoinCard coin={coin} />
        </Grid>
      ))}
    </Grid>
    
    {!isEndOfCoins ? (
      <Button variant="contained" onClick={handleOnLoadMore} sx={{ m: 3 }}>Load More</Button>
    ) : (
      <div>No more coins.</div>
    )}
  </Container> 
    </CoinContextProvider>
    
  )
};

export default CryptoCurrenciesPage;
