import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import ReactNotification from "react-notifications-component";

function App() {
  return (
    <Router>
      <ReactNotification />
      <h1>Google Book Search</h1>
      <Navbar />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Search} />
        <Route exact path={process.env.PUBLIC_URL + "/saved"} component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
