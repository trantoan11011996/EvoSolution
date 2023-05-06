import React from "react";
import Particles from "react-tsparticles";
import ParticlesBg from "../../particleBg";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

export const Header = ({ data, openSideBar, isOpen, t }) => {
  const handleOpenSideBar = () => {
    openSideBar();
  };
  return (
    <header id="homepage" className="container-header">
      <div className="logo-image">
        <a href="/evosolution">
          <img src="https://evosolution.vn/wp-content/uploads/2021/10/logo.svg" />
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
            <h1 className="header-content-banner">{t("header.title")}aaaaaa</h1>
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
