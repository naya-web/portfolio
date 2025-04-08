import React from "react";
import "./ServicesStyle.css";
import SectionTitle from "../allComponents/SectionTitle/SectionTitle";
// import ui_ux from "../../assets/uiux.svg";
import ui_ux from "../../assets/uiux4.svg";
import back from "../../assets/back2.svg";
import front from "../../assets/front.svg";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation(); 

  return (
    <div>
      <div className="services text-center py-70">
        <div className="container-fluid">
          <SectionTitle
            title={t("services.title")}
            description={t("services.description")}
          />
          <div className="row mx-0">
            <div className="col-lg-4 mt-lg-0 mt-4">
              <div className="service" data-aos="zoom-in" data-aos-delay="300">
                <img src={ui_ux} className="service-img" alt="" />
                <p className="service-title">{t("services.ui_ux")}</p>
                <p dangerouslySetInnerHTML={{ __html: t("services.ui_ux_description") }}></p>
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-4">
            <div className="service" data-aos="zoom-in" data-aos-delay="300">
            <img src={front} className="service-img" alt="" />

                <p className="service-title">{t("services.front_end")}</p>
                <p dangerouslySetInnerHTML={{ __html: t("services.front_end_description") }}></p>
                
              </div>
            </div>
            <div className="col-lg-4 mt-lg-0 mt-4">
            <div className="service" data-aos="zoom-in" data-aos-delay="300">
            <img src={back} className="service-img" alt="" />

                <p className="service-title">{t("services.back_end")}</p>
                <p dangerouslySetInnerHTML={{ __html: t("services.back_end_description") }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
