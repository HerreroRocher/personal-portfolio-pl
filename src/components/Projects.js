import projectsImage from '../assets/projects_img.jpg';

import SchoolProjects from "./SchoolProjects";
import PersonalProjects from "./PersonalProjects";


import { useState } from "react";

function Projects() {
  return (
    <>
      <Subsection component={<PersonalProjects />} />
      <Subsection component={<SchoolProjects />} />
    </>
  );
}

function Subsection({ component }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { type } = component;
  const title = type.title;
  const image = type.image;

  return (
    <div>
      <div className="subsection-container">
        <div
          className="subsection"
          style={{ backgroundImage: `url(${image})` }}
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
          {component}
        </div>
      )}
    </div>
  );
}

Projects.title = "Projects";
Projects.image = projectsImage;

export default Projects;