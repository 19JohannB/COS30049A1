import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, } from '@mui/material/styles';

// basic text that prints 'Copyright [icon] JSM (our group name) 2023' the year 'JSM' has been established
// https://stackoverflow.com/questions/58650673/how-to-hard-code-simple-authentication-no-backend-and-redirect-to-home-page

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/"> 
        JSM
      </Link>{' '}
      {'2023'}
    </Typography>
  );
}

const defaultTheme = createTheme();


export default function Login() {

  const [usernameinput, useUsername] = useState('');
  const [passwordinput, usePassword] = useState('');

  // the code prior shows that '_____input' is the current state of the input field and that 
  // 'use______' is the method that allows us to update the value of the input field. 

  const HandleUsername = (event) => {
    useUsername(event.target.value);
  }
  
  const HandlePassword = (event) => {
    usePassword(event.target.value);
  }

  // the code prior allows us to retrieve the value of the text fields (or input fields) of the login form
  // which then communicates these values to the useState code in lines 34-35.
  // the updated values of the input fields will then be compared to the hardcoded details shown below. 

  const handleSubmit = (event) => {
    event.preventDefault();
    let hardcodedetails = {
      username: 'jsm123',
      password: '123jsm',
    }

    // if username and password that the user logs in with matches the hardcoded details, 
    // they will successfully be directed to a dashboard

    if ((usernameinput === hardcodedetails.username) && (passwordinput === hardcodedetails.password)) {
      window.location.href = 'https://www.facebook.com';
    } else {
      alert('Wrong username and password, please try again.');
      // since the login details are hardcoded, the wrong details inputted will pop up with an alert 
      // saying the following
    }
    }
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              value={usernameinput}
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={HandleUsername}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={passwordinput}
              autoComplete="current-password"
              onChange={HandlePassword}
            />
            <Button
              onclick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}