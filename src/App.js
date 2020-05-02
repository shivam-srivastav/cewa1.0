import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Component/Home/Home";
import Nav from "./Component/Nav/Nav";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Nav />
          <Home />
          <Footer />
        </Route>
        <Route exact path="/aboutus">
          About Us
        </Route>
        <Route exact path="/Contacts">
          Contact us
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
