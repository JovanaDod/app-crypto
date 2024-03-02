import {
  Box,
  Button,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import RegisterContext from "./context/register-context";

const RegisterPage = () => {
  const navigate = useNavigate();
  const initialState = {
    username: '',
    email: '',
    password: ''
  }
  const [user, setUser] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { registerHandler } = useContext(RegisterContext);

  const userNameHandler = (event) => {
    setUser({
      ...user,
      username: event.target.value
    });
  };

  const userEmailHandler = (event) => {
    setUser({
      ...user,
      email: event.target.value
    })
  };

  const passwordHandler = (event) => {
    setUser({
      ...user,
      password: event.target.value
    })
  };

  const confirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };
    
  const registerOnClickHandler = () => {
    if (user.password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    } else {
      registerHandler(user)
      navigate("/login")
    }
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
          <Box sx={{ textAlign: "center" , marginBottom: 3 }}>
            <Typography color="primary" variant="h5" fontWeight="bold">
              REGISTER
            </Typography>
          </Box>
          <form>
            <Stack alignItems="center" rowGap={3}>
            <FormControl fullWidth>
                <TextField
                  label="Username"
                  id="outlined-size-small"
                  size="small"
                  color="error"
                  variant="outlined"
                  onChange={userNameHandler}
                  value={user.username}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Email"
                  id="outlined-size-small"
                  size="small"
                  color="error"
                  variant="outlined"
                  onChange={userEmailHandler}
                  value={user.email}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  size="small"
                  color="error"
                  id="outlined-size-small"
                  onChange={passwordHandler}
                  value={user.password}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Confirm Password"
                  type="password"
                  id="outlined-size-small"
                  size="small"
                  color="error"
                  variant="outlined"
                  value={confirmPassword}
                  onChange={confirmPasswordHandler}
                  error={passwordError !== ''}
                  helperText={passwordError}
                />
              </FormControl>
            
              <FormControl fullWidth>
                <Box sx={{ display: "flex", gap: 2, justifyContent: 'center' }}>
                  <Button variant="contained" color="primary" style={{ width: '200px' }} onClick={registerOnClickHandler}>
                    REGISTER
                  </Button>
                </Box>
                <Box style={{ textAlign: "center", marginTop: 3 }}>
                <Typography color="primary" variant="body1">
                  You have an account? <NavLink to="/login">Login here!</NavLink>
                </Typography>
              </Box>


              </FormControl>
            </Stack>
          </form>
        </Box>
      </Paper>
    </Box>
  </Stack>
  )
};

export default RegisterPage;
