import React from "react";
import ReactDom from "react-dom";
import Header from "./compontents/Header";
import HomeGuest from "./compontents/HomeGuest";
import Footer from "./compontents/Footer";
import About from "./compontents/About";
import Tearms from "./compontents/Tearms";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomeGuest />
        </Route>

        <Route path="/about-us" exact>
          <About />
        </Route>

        <Route path="/terms" exact>
          <Tearms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
ReactDom.render(<Main />, document.querySelector("#app"));
if (module.hot) {
  module.hot.accept();
}
