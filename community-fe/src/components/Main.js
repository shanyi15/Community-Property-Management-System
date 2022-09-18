import React, { useState } from "react";
import {  
  Route, 
  Switch, 
  // Redirect 
} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";


import Login from "./Login";
import Register from "./Register";
import Mainpage from "./Mainpage";
import Dashboard from "./Dashboard";
import Payment from "./Payment";
import Booking from "./Booking";
import Posts from "./Posts";


function Main(props) {
 const { isLoggedIn, handleLoggedIn } = props;

//  const showLogin = () => {
//    return isLoggedIn ? (
//      <Redirect to="/home" />
//    ) : (
//      <Login handleLoggedIn={handleLoggedIn} />
//    );
//  };
 
 return (
  <div className="main">
   <Router>
     <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>        
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>   
     </Switch>
    </Router>
  </div>
 );
}

export default Main;