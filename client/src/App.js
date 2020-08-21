import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import ReactNotification from "react-notifications-component";
import PrivateRoute from "./components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import TopSaved from "./pages/TopSaved";

function App() {
  return (
    <Router>
      <ReactNotification />
      <Navbar />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Search} />
        <PrivateRoute path={process.env.PUBLIC_URL + "/saved"}>
          <Saved />
        </PrivateRoute>
        <Route exact path={process.env.PUBLIC_URL + "/top"} component={TopSaved} />
      </Switch>
    </Router>
  );
}

export default App;
