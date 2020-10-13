import React from 'react';
import {Switch, Route, withRouter, Link, Router } from 'react-router-dom';
import '../App.css';
import { AppBar, Button, Card, Icon, IconButton, TextField, Toolbar, Typography } from '@material-ui/core';

const Intro = () => {
  return (
    
    <div className="App">
      <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link></head>
      <header className="App-header"><div style={{margin:"3rem 3rem 3rem 3rem",padding:"2rem 2rem 2rem 2rem"}}>
        <center>
        <div style={{backgroundColor:"#0B2161",padding:"0rem 3rem 1rem 0rem",display:"-ms"}}>
          <Toolbar><IconButton edge="start" color="inherit" aria-label="menu">
          <Icon className="fa fa-cc-mastercard" style={{color:"white",fontSize:"4rem"}}></Icon>
          <Typography style={{margin:"2rem 0rem 2rem 0rem",color:"white"}}>Payment to
          <br></br>
        <span style={{margin:"0rem 0rem 0rem 2rem"}}>
          Exposys Data Labs</span></Typography> 
          </IconButton></Toolbar></div>
        <Card style={{backgroundColor:"white", margin:"0rem 0.1rem 10rem 0rem"}}>
          
          <Typography variant="subtitle1" style={{color:"grey", margin:"1rem 0.5rem 1rem 1rem"}}>Purpose of Payment</Typography>
          <TextField id="outlined-basic" variant="outlined" style={{margin:"0rem 1rem 0rem 5rem"}}></TextField>
          <Typography variant="subtitle1" style={{color:"grey", margin:"1rem 6rem 1rem 1rem"}}>Amount</Typography>
          <div style={{margin:"1rem 6rem 1rem 8rem"}}>
          <div className="flex" >
          <span className="currency">$</span>
          <TextField id="outlined-basic" variant="outlined" style={{width:"10rem"}}></TextField>
        </div></div>
          <br></br>
          <Button variant="contained" style={{backgroundColor:"green",height:"3rem",width:"20rem",margin:"0rem 1rem 1rem 3rem",color:"white"}}><center><Link to="page2" style={{color:"white"}}>Pay</Link></center></Button></Card></center></div>
      </header>
      
  </div>
  
  );
}

export default Intro;
