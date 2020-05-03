import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Component/Home/Home";
import Nav from "./Component/Nav/Nav";
import Footer from "./Component/Footer/Footer";
import Contact from "./Component/Contact Us/Contact";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
          <Footer />
        </Route>
        <Route exact path="/aboutus">
          About Us
        </Route>
        <Route exact path="/contacts">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
