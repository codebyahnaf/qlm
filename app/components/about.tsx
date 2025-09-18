import React from "react";
import about from "../about.json"; // direct import

type aboutus = {
  id: number;
  detail: string;
};

const About: React.FC = () => {

    return(
        <div className="about-bg">
            <div className="about-title">
                <h1>Who We Are</h1>
            </div>
            <div className="about-text">
                {about.map((aboutus: aboutus) => (
                <div key={aboutus.id}>{aboutus.detail}</div>
      ))}
            </div>
        </div>
    )
}
export default About;