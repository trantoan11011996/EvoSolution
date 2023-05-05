import React, { useEffect, useState } from "react";
import { SideBar } from "./core/sidebar/sidebar";
import { Header } from "./core/header/header";
import { Features } from "./content/features/features";
import { About } from "./content/about/about";
import { Project } from "./content/project/project";
import SmoothScroll from "smooth-scroll";
import { Technology } from "./content/technology/technology";
import { Partner } from "./content/partner/partner";
import { Footer } from "./core/footer/footer";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";
import i18next from "i18next";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 20,
  speedAsDuration: true,
});
export default function MainApp() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const openSideBar = () => {
    setIsOpen((curent) => !curent);
  };
  const closeSideBar = () => {
    setIsOpen((curent) => !curent);
  };
  return (
    <div>
      <SideBar t={t} isOpen={isOpen} closeSideBar={closeSideBar} />
      <Header t={t} openSideBar={openSideBar} isOpen={isOpen} />

      <Features t={t} />
      <About t={t} />
      <Project t={t} />
      <Technology t={t} />
      <Partner t={t} />
      <Footer t={t} />
      {/* <Contact data={landingPageData.Contact} /> */}
    </div>
  );
}
