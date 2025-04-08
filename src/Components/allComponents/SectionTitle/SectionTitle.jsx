import React from "react";
import "./SectionTitleStyle.css";

function SectionTitle({title,description}) {
  return (
    <div>
      <div className="section-title text-center">
        <h2 data-aos="fade-up" >{title}</h2>
        <div className="title-underline" data-aos="fade-up" ></div>
        <p data-aos="fade-up" data-aos-delay="300">
            {description}
        </p>
      </div>
    </div>
  );
}

export default SectionTitle;
