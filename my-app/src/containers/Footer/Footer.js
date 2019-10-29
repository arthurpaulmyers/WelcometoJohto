import React from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import Logo from "../../assets/images/poke-ball.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container Footer">
      <hr />
      <div className="LogoContainer">
        <Link to={appRoutes.home}>
          <img src={Logo} alt="logo" className="logo-img" />
        </Link>
      </div>
      <br />
      <div className="SourceContainer">
        Information adapted from{" "}
        <a
          href="https://bulbapedia.bulbagarden.net/wiki/Main_Page"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://bulbapedia.bulbagarden.net/wiki/Main_Page
        </a>
      </div>
      <div className="SourceContainer">
        Information adapted from{" "}
        <a
          href="https://www.serebii.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.serebii.net/
        </a>
      </div>
    </div>
  );
};

export default Footer;