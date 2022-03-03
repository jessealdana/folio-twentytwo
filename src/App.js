import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Nav from "./components/Nav"
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="top">
        <Nav />
      </div>
      <div className="mid">
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/folio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
      <div className="bottom">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
