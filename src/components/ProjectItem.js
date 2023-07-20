import React from "react";

function ProjectItem({ name, about, technologies }) {
  const techs = technologies.map((tech) => {
    return <span key={crypto.randomUUID()}>{tech}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {<span key={crypto.randomUUID()}> {techs }</span>
        /* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
