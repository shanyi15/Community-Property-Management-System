import TopBar from "./TopBar";
import Main from "./Main";
import { TOKEN_KEY } from "../constants.js";
import React, { useState } from "react";
import { Footer } from "antd/lib/layout/layout";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem(TOKEN_KEY) ? true : false
  );
 
  const logout = () => {
    console.log("log out");
    localStorage.removeItem(TOKEN_KEY);
    setIsLoggedIn(false);
  };
 
  const loggedIn = (token) => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      setIsLoggedIn(true);
    }
  };
  return (
 
    <div className="App">

    <TopBar isLoggedIn={isLoggedIn} handleLogout={logout} />
    <Main isLoggedIn={isLoggedIn} handleLoggedIn={loggedIn} />
    <Footer>
      Community Property Management System ©2022 Created by Flag Camp Group 1
    </Footer>
    </div>  
  );
}

export default App;
