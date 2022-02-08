// import logo from "./logo.svg";
// import ScrollReveal from "scrollreveal";
// import { useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Menu from "./Pages/Menu/Menu";
import Specials from "./Pages/Specials/Specials";
import Contact from "./Pages/Contact/Contact";
import Nav from "./Components/Navbar/NavBar";
import "./App.css";

function App() {
  // useEffect(() => {
  //   ScrollReveal().reveal(".App-logo", { delay: 250, reset: true });
  // }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Nav />
        <Switch>
          <React.StrictMode>
            <Route exact path="/" component={Landing} />
            <Route exact path="/Menu" component={Menu} />
            <Route exact path="/Specials" component={Specials} />
            <Route exact path="/Contact" component={Contact} />
          </React.StrictMode>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
