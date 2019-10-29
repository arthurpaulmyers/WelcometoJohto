import React from "react";
import { useParams } from "react-router";
import LocationList from "../HomePage/LocationsList";
import "./LocationsPage.css";

const LocationsPage = () => {
    const { id } = useParams();
    const loc = LocationList.filter(loc => loc.id === id)[0];
    const { name, introText, locationText, eventText, nearbyText, introImg, locationImg, eventImg, nearbyImg, iTextAlt, lTextAlt, eTextAlt, nTextAlt } = loc;

    return (
        <div className="container">
            <br />
            <div className = "row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img style={{ width: "100%"}} src={introImg} alt={iTextAlt} />
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <h1 className="LocationName">{name}</h1>
                    <p className="LocationPara">{introText}</p>
                    <br />
                    <br />
                </div>
            </div>
            <div className = "row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <p className="LocationPara">{locationText}</p>
                    <br />
                    <br />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img style={{ width: "100%"}} src={locationImg} alt={lTextAlt} />
                </div>
            </div>
            <div className = "row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img style={{ width: "100%"}} src={eventImg} alt={eTextAlt} />
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <p className="LocationPara">{eventText}</p>
                    <br />
                    <br />
                </div>
            </div>
            <div className = "row">
                <div className="col-lg-8 col-md-6 col-sm-12">
                    <p className="LocationPara">{nearbyText}</p>
                    <br />
                    <br />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img style={{ width: "100%"}} src={nearbyImg} alt={nTextAlt} />
                </div>
            </div>
        </div>
    );
};

export default LocationsPage;