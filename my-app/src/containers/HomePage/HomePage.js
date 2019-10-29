import React, { Component } from "react";
import { Router, Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import { sortBy } from "lodash";
import LocationsList from "./LocationsList.js";

import "./HomePage.css";

class HomePage extends Component {
    state = {
        loc: LocationsList
    };

    render() {
        let { loc } = this.state;
        loc = sortBy(loc, ["rank"]);

/*const homePage = () => { */
    return (
        <div className="Home">
            <div className="container">
                        <br />
                        <br />
                        <br />
                        <br />
                <div className = "row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <img style={{ width: "auto"}} src={"../../assets/images/Elm.png"} alt={"Professor Elm"} />
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <h1 className="HomeTitle">Welcome to the Johto Region</h1>
                        <p className="HomePara">I’m Professor Elm, the preeminant Pokemon Professor 
                        in the Johto Region. I give new trainers their first
                        partner Pokemon in their adventures, but today, I want
                        to talk with you about the Johto Region itself.</p>
                        <p className="HomePara">The Johto Region is one of the oldest established 
                        civilizations in our universe, and we have many 
                        prominent cultural and technological centers as such.</p>
                        <p className="HomePara">Below, you can see some of our most important 
                        landmarks. Click one to learn more.</p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {loc.map((loc, idx) => {
                        return (
                            <Link key={loc.id} to={`${appRoutes.locations}/${loc.id}`} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 LocContainer">
                                <img src={loc.introImg} alt={loc.iTextAlt} />
                                <h5 className="LocName">{loc.name}</h5>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
    }
}

export default HomePage;