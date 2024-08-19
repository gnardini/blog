import React from "react";

interface ProjectViewProps {
  name: string;
  link: string;
  description: string;
}

const ProjectView: React.FC<ProjectViewProps> = ({ name, link, description }) => {
  return (
    <li className="text-lg">
      <a
        href={`${link}?ref=gnardini`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-accent font-bold hover:underline"
      >
        {name}
      </a>{" "}
      - {description}
    </li>
  );
};

export default ProjectView;