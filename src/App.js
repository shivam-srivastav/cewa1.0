import React, { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./Component/Home/Home";
import Nav from "./Component/Nav/Nav";
import Footer from "./Component/Footer/Footer";
import Contact from "./Component/Contact Us/Contact";
import Gallery from "./Component/Gallery/Gallery";
import About from "./Component/About/About";
import Membership from "./Component/Memebership/Membership1";
import News from "./Component/Home/NewsAndBlog/News/News";
import Program from "./Component/Programs/Program";
function App() {
  const [url, seturl] = useState("");
  const handleUrl = (data) => {
    seturl(data);
  };
  console.log(url);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home handleUrl={handleUrl} />
          <Footer />
        </Route>
        <Route exact path="/programs">
          <Program />
        </Route>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/contacts">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/membership">
          <Membership />
        </Route>
        <Route exact path={`/news/${url}`}>
          <News />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
/*
<div>
      <h1 style={{color: "red"}}>CEWA!</h1>
      <p>say</p>
      </div>
*/
