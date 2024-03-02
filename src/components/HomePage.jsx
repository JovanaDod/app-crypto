import { Container, Grid, Box, Typography } from "@mui/material";
import WW from "../images/WW.jpg";


const HomePage = () => {


  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
       <Grid item xs={12} md={6} sx={{ textAlign: 'center', marginTop: '15px' }}>
        <Typography variant="h3" color="orange"><b>WELCOME TO CRYPTO APP</b></Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Container sx={{
          marginTop: "30px",
          backgroundImage: `url(${WW})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: "500px",
        }} />
      </Grid>

    </Grid>
  );
};

export default HomePage;
