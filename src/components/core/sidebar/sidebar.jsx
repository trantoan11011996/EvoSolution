import React, { useEffect, useState } from "react";
import "./sidebar.css";
import i18n from "../../../i18n/i18n";

export const SideBar = ({ isOpen, closeSideBar, t }) => {
  const [lang, setLang] = useState("");
  const sidebarMap = t("sidebar.content", { returnObjects: true });
  useEffect(() => {
    // 👇️ scroll to top on page load

    const langLocal = localStorage.getItem("lang");
    if (langLocal === "eng") {
      setLang("English");
      return;
    } else {
      setLang("Vietnamese");
    }
  }, []);

  const handleCloseSideBar = () => {
    closeSideBar();
  };
  const changeLang = (e) => {
    closeSideBar();
    window.location.reload();
    const langValue = e.target.value;
    localStorage.setItem("lang", langValue);
    setTimeout(() => {
      i18n.changeLanguage(langValue);
    }, 500);
  };
  return (
    <div
      className={isOpen ? "sidebar-container open" : "sidebar-container close"}
    >
      <div className="sidebar-header">
        <div className="sidebar-header-content">
          <span className="header-menu">Menu</span>
        </div>
        <div
          className="sidebar-header-icon"
          onClick={() => handleCloseSideBar()}
        ></div>
      </div>
      <a className="sidebar-item" href={`/evosolution/#features`}>
        gitfeatures
      </a>
      <ul className="sidebar-content">
        <li className="sidebar-list-item">
          <a
            className="sidebar-item"
            href="/evosolution/#homepage"
            // onClick={() => window.location.reload()}
            onClick={() => handleCloseSideBar()}
          >
            {t("sidebar.homepage.title")}
          </a>
        </li>
        {sidebarMap?.map((item, index) => {
          return (
            <li
              key={index}
              className="sidebar-list-item"
              onClick={() => handleCloseSideBar()}
            >
              <a className="sidebar-item" href={`/evosolution/#${item.link}`}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="sidebar-about">
        <span>{t("sidebar.paragraph")}</span>
      </div>
      <div className="language">
        <select onChange={changeLang} className="select-lang">
          <option value="eng" selected={lang === "English"}>
            English{" "}
          </option>
          <option value="vie" selected={lang === "Vietnamese"}>
            Vietnamese
          </option>
        </select>
      </div>
      <div className="profile">
        <a
          className="link_profile"
          href="https://evosolution.vn/wp-content/uploads/2021/04/ho-so-vi.pdf"
          target="_blank"
        >
          <span>{t("sidebar.profile")}</span>
          <i className="bi bi-download"></i>
        </a>
      </div>
      <div className="link-social">
        {/* <i className="link-icon icon-facebook bi bi-facebook"></i>
        <i className="link-icon bi bi-instagram"></i>
        <i className="link-icon bi bi-youtube"></i>
        <i className="link-icon bi bi-twitter"></i> */}
      </div>
    </div>
  );
};
