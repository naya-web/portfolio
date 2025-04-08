// import React, { useEffect, useState } from "react";
// import "./SideBarMenuStyle.css";
// import { MdMailOutline } from "react-icons/md";
// import { FiGithub } from "react-icons/fi";
// import { CiLinkedin } from "react-icons/ci";
// import { IoLogoWhatsapp } from "react-icons/io5";
// import { useTranslation } from "react-i18next";
// import { IoMoonOutline } from "react-icons/io5";
// import ThemeToggle from "../ThemeToggle";

// function useActiveSection() {
//   const [activeSection, setActiveSection] = useState("about");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, options);

//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     return () => {
//       sections.forEach((section) => {
//         observer.unobserve(section);
//       });
//     };
//   }, []);

//   return activeSection;
// }

// function SideBarMenu() {
//   const { t, i18n } = useTranslation();
//   const activeSection = useActiveSection();

//   // Function to toggle between languages
//   const toggleLanguage = () => {
//     const newLanguage = i18n.language === "en" ? "ar" : "en";
//     i18n.changeLanguage(newLanguage);
//   };

//   return (
//     <>
//       <div className="side-bar">
//         <div className="container-fluid">
//           <div className="text-center ">
//             <div className="logo">
//               <h1>&lt;NJN&gt;</h1>
//               <div className="d-flex justify-content-center gap-3">
//                 {/* Language toggle button */}
//                 <button onClick={toggleLanguage} className="lang-btn">
//                   {i18n.language === "en" ? "AR" : "EN"}
//                 </button>
//                 {/* <button className="dark-light-btn">
//                   <IoMoonOutline />
//                 </button> */}
//                 <ThemeToggle />
//               </div>
//             </div>

//             <div className="side-bar-links">
//               <ul>
//                 <li className={activeSection === "about" ? "active" : ""}>
//                   <a href="#about">{t("sidebar.about_me")}</a>
//                 </li>
//                 <li className={activeSection === "services" ? "active" : ""}>
//                   <a href="#services">{t("sidebar.services")}</a>
//                 </li>
//                 <li className={activeSection === "projects" ? "active" : ""}>
//                   <a href="#projects">{t("sidebar.projects")}</a>
//                 </li>
//                 <li className={activeSection === "skills" ? "active" : ""}>
//                   <a href="#skills">{t("sidebar.skills")}</a>
//                 </li>
//                 <li className={activeSection === "contact" ? "active" : ""}>
//                   <a href="#contact">{t("sidebar.contact")}</a>
//                 </li>
//               </ul>
//             </div>

//             <div className="side-bar-footer">
//               <div className="copyright">
//                 <p>{t("sidebar.copyright")}</p>
//                 <p>
//                 {t("sidebar.designed")}
//                 </p>
//               </div>

//               <div className="social">
//                 <MdMailOutline />
//                 <FiGithub />
//                 <CiLinkedin />
//                 <IoLogoWhatsapp />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SideBarMenu;

// import React, { useEffect, useState } from "react";
// import "./SideBarMenuStyle.css";
// import { MdMailOutline, MdClose } from "react-icons/md";
// import { FiGithub } from "react-icons/fi";
// import { CiLinkedin } from "react-icons/ci";
// import { IoLogoWhatsapp } from "react-icons/io5";
// import { useTranslation } from "react-i18next";
// import { IoMoonOutline } from "react-icons/io5";
// import ThemeToggle from "../ThemeToggle";

// function useActiveSection() {
//   const [activeSection, setActiveSection] = useState("about");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     }, options);

//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     return () => {
//       sections.forEach((section) => {
//         observer.unobserve(section);
//       });
//     };
//   }, []);

//   return activeSection;
// }

// function SideBarMenu({ toggleSidebar }) {
//   const { t, i18n } = useTranslation();
//   const activeSection = useActiveSection();

//   const toggleLanguage = () => {
//     const newLanguage = i18n.language === "en" ? "ar" : "en";
//     i18n.changeLanguage(newLanguage);
//   };

//   return (
//     <>
//       <div className="side-bar">
//         <div className="container-fluid">
//           <div className="text-center">
//             {/* Close button for mobile */}
//             <button className="close-sidebar d-lg-none" onClick={toggleSidebar}>
//               <MdClose />
//             </button>

//             <div className="logo">
//               <h1>&lt;NJN&gt;</h1>
//               <div className="d-flex justify-content-center gap-3">
//                 <button onClick={toggleLanguage} className="lang-btn">
//                   {i18n.language === "en" ? "AR" : "EN"}
//                 </button>
//                 <ThemeToggle />
//               </div>
//             </div>

//             <div className="side-bar-links">
//               <ul>
//                 <li className={activeSection === "about" ? "active" : ""}>
//                   <a href="#about" onClick={toggleSidebar}>{t("sidebar.about_me")}</a>
//                 </li>
//                 <li className={activeSection === "services" ? "active" : ""}>
//                   <a href="#services" onClick={toggleSidebar}>{t("sidebar.services")}</a>
//                 </li>
//                 <li className={activeSection === "projects" ? "active" : ""}>
//                   <a href="#projects" onClick={toggleSidebar}>{t("sidebar.projects")}</a>
//                 </li>
//                 <li className={activeSection === "skills" ? "active" : ""}>
//                   <a href="#skills" onClick={toggleSidebar}>{t("sidebar.skills")}</a>
//                 </li>
//                 <li className={activeSection === "contact" ? "active" : ""}>
//                   <a href="#contact" onClick={toggleSidebar}>{t("sidebar.contact")}</a>
//                 </li>
//               </ul>
//             </div>

//             <div className="side-bar-footer">
//               <div className="copyright">
//                 <p>{t("sidebar.copyright")}</p>
//                 <p>{t("sidebar.designed")}</p>
//               </div>

//               <div className="social">
//                 <MdMailOutline />
//                 <FiGithub />
//                 <CiLinkedin />
//                 <IoLogoWhatsapp />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SideBarMenu;

import "./SideBarMenuStyle.css";
import { MdMailOutline, MdClose } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { IoMoonOutline } from "react-icons/io5";
import ThemeToggle from "../ThemeToggle";
import { useEffect, useState } from "react";

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return activeSection;
}

function SideBarMenu({ toggleSidebar }) {
  const { t, i18n } = useTranslation();
  const activeSection = useActiveSection();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <div className="side-bar">
        <div className="container-fluid">
          <div className="text-center">
            {/* Close button for mobile */}
            <button
              className="close-sidebar d-lg-none"
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              <MdClose />
            </button>

            <div className="logo">
              <h1>&lt;NJN&gt;</h1>
              <div className="d-flex justify-content-center gap-3">
                <button onClick={toggleLanguage} className="lang-btn">
                  {i18n.language === "en" ? "AR" : "EN"}
                </button>
                <ThemeToggle />
              </div>
            </div>

            <div className="side-bar-links">
              <ul>
                <li className={activeSection === "about" ? "active" : ""}>
                  <a href="#about" onClick={toggleSidebar}>
                    {t("sidebar.about_me")}
                  </a>
                </li>
                <li className={activeSection === "services" ? "active" : ""}>
                  <a href="#services" onClick={toggleSidebar}>
                    {t("sidebar.services")}
                  </a>
                </li>
                <li className={activeSection === "projects" ? "active" : ""}>
                  <a href="#projects" onClick={toggleSidebar}>
                    {t("sidebar.projects")}
                  </a>
                </li>
                <li className={activeSection === "skills" ? "active" : ""}>
                  <a href="#skills" onClick={toggleSidebar}>
                    {t("sidebar.skills")}
                  </a>
                </li>
                <li className={activeSection === "contact" ? "active" : ""}>
                  <a href="#contact" onClick={toggleSidebar}>
                    {t("sidebar.contact")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="side-bar-footer">
              <div className="copyright">
                <p>{t("sidebar.copyright")}</p>
                <p>{t("sidebar.designed")}</p>
              </div>

              <div className="social">
                <a
                  href="mailto:nayaalnakola@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <MdMailOutline />
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/naya-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>

                {/* LinkedIn */}
                <a
                  href="linkedin.com/in/naya-al-nakola"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <CiLinkedin />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/+96391423559"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <IoLogoWhatsapp />
                </a>


                {/* <MdMailOutline /> */}
                {/* <FiGithub />
                <CiLinkedin />
                <IoLogoWhatsapp /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBarMenu;
