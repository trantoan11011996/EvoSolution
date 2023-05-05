import React from "react";
import Particles from "react-tsparticles";
import ParticlesBg from "../../particleBg";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faChartBar } from "@fortawesome/free-regular-svg-icons";

export const Header = ({ data, openSideBar, isOpen, t }) => {
  const handleOpenSideBar = () => {
    openSideBar();
  };
  return (
    <header id="homepage" className="container-header">
      <div className="logo-image">
        <a href="/">
          <img src="../img/header/logo.svg" />
        </a>
      </div>
      <div
        className={isOpen ? "toggle-sidebar display-none" : "toggle-sidebar"}
        onClick={() => handleOpenSideBar()}
      >
        <div className="dash"></div>
        <div className="dash"></div>
        <div className="dash"></div>
      </div>
      <div className="intro">
        <ParticlesBg />

        <div className="container-content">
          <div className="intro-text">
            <h1 className="header-content-banner">{t("header.title")}</h1>
            <p>{t("header.paragraph")}</p>
            <button className="btn-header">
              {" "}
              <a href="#features">{t("header.contact")}</a>{" "}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
