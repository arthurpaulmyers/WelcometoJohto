import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/components/ScrollToTop/ScrollToTop.js";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Thank you so much to Michael Liu for sharing a well-functioning React page. His code allowed
//me to get a better understanding of React, to know which packages to install on my computer,
//and which tutorials I needed to take to develop a deeper understanding.

const app = (
    <Router>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>
);


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
