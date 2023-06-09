import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBarMenuButton from './AppBarMenuButton';
import { UserAuth } from '../login/AuthContext';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const cfa_theme = createTheme({
  palette: {
    primary: {
      main: '#E51636',
    },
    secondary: {
      main: '#E51636',
    },
  },
});

export default function MainAppBar() {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate('/');
      console.log("Successfully logged out")
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={cfa_theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color='primary'>
          <Toolbar>
            <AppBarMenuButton />
            <div className='appbar-logo'></div>
              <Typography id='bar-description' variant= "h5" padding = "0px" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                Manager
              </Typography>
              <Button onClick={handleSignOut} color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
