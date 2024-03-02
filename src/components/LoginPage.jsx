import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from 'react-router-dom';
// import coin2 from "../images/coin2.avif";
import UserContext from "./context/user-context";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { loginHandler } = useContext(UserContext);
  const isLoggedIn = localStorage.getItem("isLoggedIn");


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  useEffect(() => {
    console.log(isLoggedIn)
    if (isLoggedIn) {
      navigate('/homePage')
    }
  }, [])


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    loginHandler();
    navigate("/homePage");
    console.log("Logging in with username:", username, "and password:", password);
  };

  return (
    <Stack>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Paper
          style={{
            // backgroundImage: `url(${coin2})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box width={{ xs: 200, md: 400 }} borderRadius={10} p={10}>
            <Box sx={{ textAlign: "center", marginBottom: 3 }}>
              <Typography color="primary" variant="h5" fontWeight="bold">
                LOGIN
              </Typography>
            </Box>
            <form>
              <Stack alignItems="center" rowGap={3}>
                <FormControl fullWidth>
                  <TextField
                    label="Username"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    size="small"
                    color="error"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    size="small"
                    color="error"
                    variant="outlined"
                  />
                </FormControl>
                <FormControl fullWidth>
                  <Box sx={{ display: "flex", gap: 2, justifyContent: 'center' }}>
                    <Button variant="contained" color="primary" style={{ width: '200px' }} onClick={handleLogin}>
                      LOGIN
                    </Button>
                  </Box>
                </FormControl>
                <Box style={{ textAlign: "center", marginTop: 3 }}>
                  <Typography color="primary" variant="body1">
                    Don't have an account? <NavLink to="/register">Register here!</NavLink>
                  </Typography>
                </Box>
              </Stack>
            </form>
          </Box>
        </Paper>
      </Box>
    </Stack>
  );
};

export default LoginPage;

