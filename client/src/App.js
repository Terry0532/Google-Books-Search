import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import ReactNotification from "react-notifications-component";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <ReactNotification />
      <Navbar />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Search} />
        <Route exact path={process.env.PUBLIC_URL + "/login"} component={Login} />
        <PrivateRoute path={process.env.PUBLIC_URL + "/protected"}>
          <Saved />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
