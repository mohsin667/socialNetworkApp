import React,{useState} from "react";
import ReactDom from "react-dom";
import Header from "./compontents/Header";
import HomeGuest from "./compontents/HomeGuest";
import Footer from "./compontents/Footer";
import About from "./compontents/About";
import Tearms from "./compontents/Tearms";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./compontents/Home"
import CreatePost from "./compontents/CreatePost";
import Axios from "axios";
import ViewSinglePost from "./compontents/ViewSinglePost"
import FlashMessages from "./compontents/FlashMessages"
Axios.defaults.baseURL = "http://localhost:8080"
function Main() {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")));
  const [flashMessage, setFlashMessage] = useState([]);

  function addFlashMessages(msg) {
    setFlashMessage(prev=>prev.concat(msg))
  }
  return (
    <BrowserRouter>
      <FlashMessages messages={flashMessage}/>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home />:<HomeGuest />}
        </Route>
        <Route path="/post/:id">
          <ViewSinglePost />
        </Route>
        <Route path="/create-post">
          <CreatePost addFlashMessages={addFlashMessages} />
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
