import React, { useEffect, useRef, useState } from "react";
import "./SkillsStyle.css";
import SectionTitle from "../allComponents/SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null); // Ref for the skills section

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true); // Trigger animation when the section is in view
            observer.unobserve(entry.target); // Stop observing after animation is triggered
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current); // Start observing the skills section
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <div ref={skillsRef}>
      <div className="skills py-70">
        <div className="container-fluid">
          <SectionTitle title={t("skills.title")} />
          <div className="row mx-0">
            <div className="col-lg-6">
              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>HTML</p>
                  <p>95%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "95%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>CSS</p>
                  <p>90%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "90%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>Bootstrap</p>
                  <p>85%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "85%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>Tailwind</p>
                  <p>70%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "70%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>JavaScript</p>
                  <p>80%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "80%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>React JS</p>
                  <p>80%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "80%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>Web api</p>
                  <p>80%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "80%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>GitHub</p>
                  <p>75%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "75%" : "0%" }}
                  ></span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>MySql</p>
                  <p>70%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "70%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>Laravel</p>
                  <p>60%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "60%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>Figma</p>
                  <p>80%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "80%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>Photoshop</p>
                  <p>60%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "60%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>Microsoft Office</p>
                  <p>80%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "80%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>{t("skills.problem_solving")}</p>
                  <p>85%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "85%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>{t("skills.effictive_communication")}</p>
                  <p>90%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "90%" : "0%" }}
                  ></span>
                </div>
              </div>

              <div className="skill">
                <div className="skill-name d-flex justify-content-between">
                  <p>ً{t("skills.ًwork_under_pressure")}</p>
                  <p>85%</p>
                </div>
                <div className="skill-progress">
                  <span
                    style={{ width: animate ? "85%" : "0%" }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;