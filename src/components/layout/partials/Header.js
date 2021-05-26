import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Badge } from '@material-ui/core';


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
         <Badge badgeContent={0} color="secondary">
          <FavoriteIcon />
          </Badge>
          <Badge badgeContent={0} color="secondary">
          <LocalMallIcon />
          </Badge>
          
          <Button href='/login' color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header



