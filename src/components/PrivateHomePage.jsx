import { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import MarketCard from "./MarketCard";

const PrivateHomePage = () => {
  const [cryptoCurrencies, setCryptoCurrencies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?app_id=CG-M3t4McDdnyjURRmmRKSfkwyu&vs_currency=usd&order=market_cap_desc&per_page=10"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCryptoCurrencies(data);
      });
  }, []);

  return (
    <Container sx={{ textAlign: "center", marginTop: "15px" }}>
      <Grid container justifyContent="center" columnGap={5} rowGap={5}>
        {cryptoCurrencies.map((cap) => {
          return (
            <Grid item key={cap.id} xs={12} sm={6} md={3}>
              <MarketCard data={cap} />
            </Grid>
          );
        })}
      </Grid>
    </Container>

  );
};

export default PrivateHomePage;
