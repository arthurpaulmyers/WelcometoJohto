import React from 'react';
import logo from './logo.svg';
import { Switch, Route, Redirect} from "react-router-dom";
import appRoutes from "./shared/appRoutes";

import NavBar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";
import HomePage from "./containers/HomePage/HomePage";
import LocationsPage from "./containers/LocationsPage/LocationsPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
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

      <div className = "MainContent">
        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>
          <Route exact path={appRoutes.locations}>
            <LocationsPage />
          </Route>
          <Redirect to = {appRoutes.home} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
