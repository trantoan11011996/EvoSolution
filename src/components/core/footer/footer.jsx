import React, { useEffect } from "react";
import "./footer.css";
import aos from "aos";
export const Footer = ({ t }) => {
  useEffect(() => {
    aos.init({ once: true });
  }, []);
  return (
    <div id="contact" className="footer-container">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-duration="500"
        data-aos-easing="ease-in-sine"
        className="footer-content"
      >
        <h1>{t("footer.title")}</h1>
        <div className="bottom"></div>
      </div>
      <div className="footer-form-contact">
        <div className="footer-form">
          <div className="form-input">
            <input
              className="input"
              placeholder={t("footer.placeholder.name.content")}
              type="text"
            />
          </div>
          <div className="form-input">
            <input
              className="input"
              type="email"
              placeholder={t("footer.placeholder.email.content")}
            ></input>
          </div>
          <div className="form-input">
            <input
              className="input"
              placeholder={t("footer.placeholder.phone.content")}
              type="text"
            ></input>
          </div>
          <div className="form-input">
            <input
              className="input"
              placeholder={t("footer.placeholder.message.content")}
            />
          </div>
          <div className="button-submit">
            <button>{t("footer.submit.content")}</button>
          </div>
        </div>
        <div className="footer-contact">
          <div className="contact mb-5">
            <h1>{t("footer.form_contact.address.label")}</h1>
            <p>{t("footer.form_contact.address.content")}</p>
            <div className="map">
              <a href="https://goo.gl/maps/VfHeQ75nqoWx7fAz5" target="_blank">
                {t("footer.form_contact.address.map")}
              </a>
            </div>
          </div>
          <div className="contact mb-5">
            <h1>{t("footer.form_contact.email.label")}</h1>
            <p>{t("footer.form_contact.email.content")}</p>
          </div>
          <div className="contact mb-5">
            <h1>{t("footer.form_contact.phone.label")}</h1>
            <p>{t("footer.form_contact.phone.content")}</p>
          </div>
          <div className="contact">
            <h1>{t("footer.form_contact.work_hours.label")}</h1>
            <p>{t("footer.form_contact.work_hours.content")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
