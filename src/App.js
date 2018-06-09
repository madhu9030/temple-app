import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar/navBar.js';
import CarouselSlider from './components/carousel/carousel.js';
import Home from './containers/Home';
import AboutUs from './containers/AboutUs';
import Services from './containers/Services';
import Events from './containers/Events';
import Contact from './containers/Contact';
import Donations from "./containers/Donations";

class App extends Component {
  render() {
      return (
          <div className="App">
          <div className="tp-latest-news as-l-container">
              <marquee>Latest News</marquee>
          </div>

          <div className="as-l-container tp-carousal-wrapper">
              <CarouselSlider/>
          </div>
          <HashRouter>
              <div>
                  <NavBar/>
                  <div className="tp-body-content">
                      <Switch>
                          <Route exact path="/home" component={Home} />
                          <Route path="/AboutUs" component={AboutUs} />
                          <Route path="/Services" component={Services} />
                          <Route path="/Events" component={Events} />
                          <Route path="/Donations" component={Donations} />
                          <Route path="/Contact" component={Contact} />
                      </Switch>
                  </div>
              </div>
          </HashRouter>
      </div>);
    }
}

export default App;
