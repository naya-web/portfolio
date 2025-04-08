import React from "react";
import "./HomeSectionStyle.css";
// import img from "../../assets/img.jpg";
// import img from "../../assets/Naya (5).png";
import img from "../../assets/Naya5.png";
import { useTranslation } from "react-i18next";

function HomeSection() {
  const { t } = useTranslation();

  return (
    <div className="home-section py-70">
      <div className="overlay ">
        <div className="container-fluid">
          <div className="home-content">
            <img src={img} className="profile-img" data-aos="zoom-in" alt="" />
            <div className="w-75">
              <p data-aos="fade-up" data-aos-delay="300">{t("home_section.hello")}</p>
              <h1 data-aos="fade-up" data-aos-delay="600">{t("home_section.name")}</h1>
              <p data-aos="fade-up" data-aos-delay="900">{t("home_section.job")}</p>
              <p data-aos="fade-up" data-aos-delay="1200">
              {t("home_section.description")}
              </p>
            </div>
            <button className="download-cv" data-aos="fade-up" data-aos-delay="1500">
              <a href="/Naya_alnaqula_2025.pdf" download="Naya_alnaqula_2025.pdf">{t("home_section.download")}</a>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
