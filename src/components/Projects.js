import homeProjectsImg from "../assets/home_projects_img.jpg"; 
import schoolProjectsImg from "../assets/school_projects_img.jpeg"; 

import SchoolProjects from "./SchoolProjects";
import PersonalProjects from "./PersonalProjects";


import { useState } from "react";

export default function Projects() {
  return (
    <>
      <Subsection title="Personal Projects" imageUrl={homeProjectsImg} />
      <Subsection title="School Projects" imageUrl={schoolProjectsImg} />
    </>
  );
}

function Subsection({ title, imageUrl }) {
  const [isExpanded, setIsExpanded] = useState(false);
const renderContent = () => {
    switch (title) {
      case 'Personal Projects':
        return <PersonalProjects />;
      case 'School Projects':
        return <SchoolProjects />
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="subsection-container">
        <div
          className="subsection"
          style={{ backgroundImage: `url(${imageUrl})` }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="section-content">
            <h3>{title}</h3>
            {!isExpanded ? <p>Click to expand</p> : <p>Click to collapse</p>}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div>
          {renderContent()}
        </div>
      )}
    </div>
  );
}