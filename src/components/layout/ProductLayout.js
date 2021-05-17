import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Footer from './partials/Footer'
import Header from './partials/Header'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const ProductLayout = ({children}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Header /> </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>This is a Filter section for Product</Paper>
        </Grid>
       
        <Grid item xs={10}>
          <Paper className={classes.paper}>{children}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><Footer /></Paper>
        </Grid>
        </Grid>
    </div>
    )
}

export default ProductLayout


