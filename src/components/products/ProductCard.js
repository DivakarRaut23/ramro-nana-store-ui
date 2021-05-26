import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: green [500],
  },
}));

export default function ProductCard({children}) {
  const classes = useStyles();

  console.log("k k aayeko cha ta data >>>" , children)

  const categoryInitial = children.name.charAt(0)


  return (
    <Card className={classes.root}>
      <ButtonBase></ButtonBase>
      <CardHeader
        avatar={
          <Avatar aria-label="category" className={classes.avatar}>
            {categoryInitial.toUpperCase()}
          </Avatar>
        }
        action={
          <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
        }
        title={children.name}
        subheader={children.price}
      />
      <CardMedia
        className={classes.media}
        image={children.images[0]}
        title="Nepali Kurtha"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {children.description}
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}
