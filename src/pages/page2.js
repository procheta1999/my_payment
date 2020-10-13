import React from 'react';
import {Switch, Route, withRouter, Link, Router } from 'react-router-dom';
import '../App.css';
import { AppBar, Button, Card, Icon, IconButton, TextField, Toolbar, Typography } from '@material-ui/core';
export default function Page2(){
    return(<div className="App">
    <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link></head>
    <header className="App-header"><div style={{margin:"3rem 3rem 3rem 3rem",padding:"2rem 2rem 2rem 2rem"}}>
      <center>
      <div style={{backgroundColor:"#0B2161",padding:"0rem 3rem 1rem 0rem"}}>
        <Toolbar><IconButton edge="start" color="inherit" aria-label="menu">
        <Icon className="fa fa-cc-mastercard" style={{color:"white",fontSize:"4rem"}}></Icon>
        <Typography style={{margin:"2rem 0rem 2rem 0rem",color:"white"}}>Payment to
        <br></br>
      <span style={{margin:"0rem 0rem 0rem 2rem"}}>
      Exposys Data Labs</span></Typography> 
        </IconButton></Toolbar></div>
      <Card style={{backgroundColor:"white", padding:"0rem 4rem 3rem 0rem",justifyContent:"left",alignContent:"left",alignItems:"left"}}>
      <div className="creditCardForm">
    <div className="payment">
        <form>
            
            <div className="form-group" id="card-number-field">
                <label for="cardNumber">Card Number</label>
                <input type="text" class="form-control" id="cardNumber"/>
            </div>
            
            <div className="form-group" id="expiration-date">
                <label>Expiration Date</label>
                <select>
                    <option value="01">January</option>
                    <option value="02">February </option>
                    <option value="03">March</option>
                    <option value="04">April</option>
                    <option value="05">May</option>
                    <option value="06">June</option>
                    <option value="07">July</option>
                    <option value="08">August</option>
                    <option value="09">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select>
                    <option value="16"> 2016</option>
                    <option value="17"> 2017</option>
                    <option value="18"> 2018</option>
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
                </select>
            </div>
            <div className="form-group CVV">
                <label for="cvv">CVV</label>
                <input type="text" class="form-control" id="cvv"/>
            </div>
        </form>
    </div>
</div>
        <Button variant="contained" style={{backgroundColor:"green",height:"3rem",width:"20rem",margin:"0rem 0.5rem 1rem 6rem",color:"white"}}><center>Pay</center></Button></Card></center></div>
    </header>
</div>)
}