import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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
export default function BottomNavition (){
    const classes = useStyles();
    return(
     <Navbar collapseOnSelect expand="lg"  variant="dark" fixed='bottom' className='Bottom-nav-bgcolor'>
      <div className={classes.root} style={{height:'15vh'}}>
      <Grid container spacing={3} style={{textAlign:'center'}}>
        <Grid item xs={6} className='Botton-input-container'>
         <div className='input-btn-container'>
         <input type='text' placeholder='Enter a Task' className='Task-input'/>
         <div className='Add-btn-container'>
        <button className='Add-btn'>Add Task</button>
         </div>
         </div>
        </Grid>
      </Grid>
    </div>
       </Navbar> 
    )
}