import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
            <Link className="project-wrapper" to={`/projects/${projectData.id}`}>
                <h3>{projectData.title}</h3>
                <img src={projectData.image} altText = "Image"/>
            </Link>
        </div>
    );
}

export default ProjectCard;