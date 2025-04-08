import React from "react";
import { useTranslation } from "react-i18next";

function ProjectModal({ project, onClose }) {
  const { t } = useTranslation();

  if (!project) return null;

  // Split technologies into groups of 3
  const techGroups = [];
  for (let i = 0; i < project.technologies.length; i += 3) {
    techGroups.push(project.technologies.slice(i, i + 3));
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h3 className="text-center">{project.name}</h3>
        <div className="modal-description">
          <p className="text-center">{project.description}</p>
          <h4 className="text-center">{t("projects.technologies")}:</h4>
          <div className="tech-groups-container">
            {techGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="tech-group">
                <ul className="tech-list">
                  {group.map((tech, techIndex) => (
                    <li key={techIndex} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="m-auto">
          <a
            href={project.link}
            className="demo-modal"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projects.visit_site")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
