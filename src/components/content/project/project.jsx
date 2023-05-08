import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Col, Container, Row } from "react-bootstrap";
import "./project.css";
import aos from "aos";
import { FaExternalLinkAlt } from "react-icons/fa";
export const Project = ({ t }) => {
  useEffect(() => {
    aos.init({ once: true });
  }, []);

  const listProject = t("project.project_list", { returnObjects: true });
  return (
    <div id="project" className="project">
      <div className="project-container">
        <div
          data-aos="zoom-in"
          data-aos-duration="600"
          data-aos-easing="linear"
          className="project-header"
        >
          <h1>{t("project.title")}</h1>
          <div className="project-header-description">
            <p>{t("project.paragraph")}</p>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="project-list">
          <div className="row-project-list">
            {/* {listProject?.map((item, index) => {
              return (
                <div
                  className="col-project-list mb-3"
                  data-aos="zoom-in"
                  data-aos-duration={1000 + index * 300}
                  key={index}
                >
                  <a href={item.linkProject} target="_blank">
                    <div className="image-project mb-3">
                      <img src={item.imageProject} />
                      <div className="overlay">
                        <FaExternalLinkAlt className="icon-link-project"></FaExternalLinkAlt>{" "}
                      </div>
                    </div>
                  </a>
                  <div className="content-image">
                    <h2>{item.titleProject}</h2>
                    <p>{item.descProject}</p>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};
