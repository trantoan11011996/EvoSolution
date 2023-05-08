import React, { useEffect } from "react";
import "./partner.css";
import "./partner-img.css";
import aos from "aos";

export const Partner = ({ t }) => {
  useEffect(() => {
    aos.init({ once: true });
  }, []);
  const listPartner = t("partner.list_partner", { returnObjects: true });
  console.log(listPartner);
  return (
    <div id="partner" className="partner-container">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="600"
        className="partner-content"
      >
        <h1>{t("partner.title")}</h1>
        <div className="partner-description">
          <p>{t("partner.paragraph")}</p>
        </div>
        <div className="bottom"></div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-offset="600"
        className="list-partner"
      >
        {/* {listPartner?.map((item, index) => {
          return (
            <div className="partner">
              <img className={item.class} src={item.image} key={index}/>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
