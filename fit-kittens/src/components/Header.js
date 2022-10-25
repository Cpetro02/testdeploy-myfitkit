import React from 'react';
import {AppBar, Typography} from '@mui/material';

const Header = () => {
  return (
  <div>
    <AppBar position='sticky'>
        <Typography>Fit Kittens</Typography>
    </AppBar>
  </div>
  )
}

export default Header;