import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Menu, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
}));

const Header = () => {

const classes = useStyles();

    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Typography  variant="h6" className={classes.title}>
            RN
          </Typography>
          <Menu KeepMounted open={true}>
          <MenuItem href='/home' >Home</MenuItem>
          <MenuItem href='/product' >Products</MenuItem>
          <MenuItem href='/about-us' >About Us</MenuItem>
          <MenuItem href='/contact-us' >Contact Us</MenuItem>

          </Menu>
          

          
          <Button href='/login' color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header



