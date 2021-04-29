import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '../Navigation/Avatar';
import DropDown from '../Navigation/DropDown';

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
export default function Navigation(){
  const classes = useStyles();
    return(
       <div className='TopNavbar'>
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
          <img className='todo-logo' 
            alt='logo' src='https://icon-library.com/images/todo-icon/todo-icon-5.jpg'
            />
          </Grid>
          <Grid item xs={6}>
          <div className="User-Profile">
          <Avatar/>
          <DropDown/> 
          </div>
          </Grid>
        </Grid>
      </div>
      </div>
    )
}