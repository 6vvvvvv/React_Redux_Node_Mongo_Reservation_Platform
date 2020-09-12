import React from "react";
import Navibar from "./components/Navibar";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SIgnup from "./components/SIgnup";
import Myspace from "./components/Myspace";
import ShowWidget from "./components/ShowWidget";
import Sport from "./components/Sport";
import Medecine from "./components/Medecine";
import Culture from "./components/Culture";
import Conciergerie from "./components/Conciergerie";
import Sidenav from "./components/Sidenav";
import Detail from "./components/Detail";

const App = () => {
  return (
    <Router>
      <Navibar />
      <Sidenav />
      <ShowWidget />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={SIgnup} />
        <Route path="/myspace" component={Myspace} />
        <Route path="/sport" component={Sport} />
        <Route path="/medecinedouce" component={Medecine} />
        <Route path="/culture" component={Culture} />
        <Route path="/conciergerie" component={Conciergerie} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </Router>
  );
};

export default App;
