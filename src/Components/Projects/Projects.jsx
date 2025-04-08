import React, { useState } from "react";
import SectionTitle from "../allComponents/SectionTitle/SectionTitle";
import "./ProjectsStyle.css";
import append from "../../assets/Append.png";
import golf from "../../assets/Golf.png";
import grandCoffy from "../../assets/GrandCoffy.png";
import luxary from "../../assets/Luxary.png";
import flexStart from "../../assets/flex-start.png";
import spotify from "../../assets/spotify.png";
import Project from "./Project";
import ProjectModal from "./ProjectModal";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      name: t("projects.append"),
      img: append,
      link: "https://naya-web.github.io/Append-project/",
      description: t("projects.append_description"),
      technologies: ["HTML", "CSS","js","Bootstrap", "Responsive Design"]
    },
    {
      name: t("projects.golf"),
      img: golf,
      link: "https://naya-web.github.io/golf-club/",
      description: t("projects.golf_description"),
      technologies: ["HTML", "CSS","js","Bootstrap", "Responsive Design"]
    },
    {
      name: t("projects.grand_coffy"),
      img: grandCoffy,
      link: "https://naya-web.github.io/Grand-Coffe/",
      description: t("projects.grand_coffe_description"),
      technologies: ["HTML", "CSS","js","Bootstrap", "Responsive Design"]
    },
    {
      name: t("projects.luxary_hotel"),
      img: luxary,
      link: "https://naya-web.github.io/luxuryhotel/",
      description: t("projects.luxary_description"),
      technologies: ["HTML", "CSS","js","Bootstrap", "Responsive Design"]
    },
    {
      name: t("projects.flex_start"),
      img: flexStart,
      link: "https://flex-start-front-qn9l.vercel.app/",
      description: t("projects.flexStart_description"),
      technologies: ["React", "CSS", "Boostrap", "React-bootstrap","Responsive Design", "Axios","Json-server"]
    },
    {
      name: t("projects.spotify"),
      img: spotify,
      link: "http://my-spotify123.surge.sh",
      description: t("projects.spotify_description"),
      technologies: ["React", "CSS", "Bootstrap","React-bootstrap"]
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <div className="projects py-70">
        <div className="container-fluid">
          <SectionTitle
            title={t("projects.title")}
            description={t("projects.description")}
          />
          <div className="row mx-0">
            {projectsData.map((project, index) => (
              <Project 
                key={index}
                name={project.name}
                img={project.img}
                link={project.link}
                onDetailsClick={() => openModal(project)}
                data-aos="zoom-in"
                data-aos-delay={index * 300}
              />
            ))}
          </div>
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </div>
  );
}

export default Projects;