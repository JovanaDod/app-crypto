import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { NavLink } from "react-router-dom";

const MarketCard = (props) => {
  const { data } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 250 }} image={data.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Market cap: {data.market_cap}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Current price: $ {data.current_price}
        </Typography>
      </CardContent>
      <CardActions> 
        <NavLink to="https://www.coingecko.com/" style={{ textDecoration: 'none' }}>
          <Button variant="contained" size="small">Learn More</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default MarketCard;
