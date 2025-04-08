// import { useTranslation } from "react-i18next";
// import SideBarMenu from "../Components/allComponents/SideBarMenu/SideBarMenu";
// import HomeSection from "../Components/HomeSection/HomeSection";
// import Projects from "../Components/Projects/Projects";
// import Services from "../Components/Services/Services";
// import Skills from "../Components/Skills/Skills";
// import { useEffect } from "react";
// import 'aos/dist/aos.css';
// import Aos from "aos";

// function HomePage() {
//   const { i18n } = useTranslation();

//   useEffect(() => {
//     const direction = i18n.language === "ar" ? "rtl" : "ltr";
//     document.documentElement.setAttribute("dir", direction); // Update <html> tag
//   }, [i18n.language]);


//   useEffect(() => {
//     Aos.init({
//       duration: 1000, // Animation duration
//       once: false, // Whether animation should happen only once
//     });
//   }, []);

  
//   return (
//     <>
//       {/* <h1>Welcome to Home Page</h1> */}
//       <div className="row mx-0">
//         <div className="col-3 vh-100 position-sticky top-0 side-bar-container" >
//           <SideBarMenu />
//         </div>
//         <div className="col-9">
//           <section id="about">
//             <HomeSection />
//           </section>
//           <section id="services">
//             <Services />
//           </section>
//           <section id="projects">
//             <Projects />
//           </section>
//           <section id="skills">
//             <Skills />
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;















// import { useTranslation } from "react-i18next";
// import SideBarMenu from "../Components/allComponents/SideBarMenu/SideBarMenu";
// import HomeSection from "../Components/HomeSection/HomeSection";
// import Projects from "../Components/Projects/Projects";
// import Services from "../Components/Services/Services";
// import Skills from "../Components/Skills/Skills";
// import { useEffect, useState } from "react";
// import 'aos/dist/aos.css';
// import Aos from "aos";
// import { FaBars } from "react-icons/fa";

// function HomePage() {
//   const { i18n } = useTranslation();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const direction = i18n.language === "ar" ? "rtl" : "ltr";
//     document.documentElement.setAttribute("dir", direction);
//   }, [i18n.language]);

//   useEffect(() => {
//     Aos.init({
//       duration: 1000,
//       once: false,
//     });
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <>
//       <div className="row mx-0">
//         {/* Mobile menu button - only visible on small/medium screens */}
//         <div className="mobile-menu-btn d-lg-none">
//           <button onClick={toggleSidebar} className="btn btn-dark">
//             <FaBars />
//           </button>
//         </div>
        
//         {/* Sidebar - hidden on small/medium screens unless sidebarOpen is true */}
//         <div className={`col-lg-3 vh-100 position-sticky top-0 side-bar-container ${sidebarOpen ? 'sidebar-open' : 'd-none d-lg-block'}`}>
//           <SideBarMenu toggleSidebar={toggleSidebar} />
//         </div>
        
//         {/* Main content */}
//         <div className="col-lg-9 col-12">
//           <section id="about">
//             <HomeSection />
//           </section>
//           <section id="services">
//             <Services />
//           </section>
//           <section id="projects">
//             <Projects />
//           </section>
//           <section id="skills">
//             <Skills />
//           </section>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;








import { useTranslation } from "react-i18next";
import SideBarMenu from "../Components/allComponents/SideBarMenu/SideBarMenu";
import HomeSection from "../Components/HomeSection/HomeSection";
import Projects from "../Components/Projects/Projects";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";
import { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";
import { FaBars } from "react-icons/fa";
import Contact from "../Components/Contact/Contact";

function HomePage() {
  const { i18n } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const direction = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", direction);
  }, [i18n.language]);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="row mx-0">
        {/* Mobile menu button - only visible when sidebar is closed */}
        {!sidebarOpen && (
          <div className="mobile-menu-btn d-lg-none">
            <button onClick={toggleSidebar} className="btn">
              <FaBars />
            </button>
          </div>
        )}
        
        {/* Sidebar */}
        <div className={`col-lg-3 vh-100 position-sticky top-0 side-bar-container ${sidebarOpen ? 'sidebar-open' : 'd-none d-lg-block'}`}>
          <SideBarMenu toggleSidebar={toggleSidebar} />
        </div>
        
        {/* Main content */}
        <div className="col-lg-9 col-12">
          <section id="about">
            <HomeSection />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;