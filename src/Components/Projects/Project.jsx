import React from "react";
import { useTranslation } from "react-i18next";

function Project({ name, img, link, onDetailsClick, ...props }) {
  const { t } = useTranslation();

  return (
    <div className="col-md-4" {...props}>
      <div className="project">
        <img src={img} className="w-100" alt={name} />
        <div className="project-info">
          <p>{name}</p>
          <div className="d-flex gap-3">
            <a
              href={link}
              className="demo-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("projects.demo")}
            </a>
            <button 
              onClick={onDetailsClick} 
              className="demo-link" 
              
            >
              {t("projects.details")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;