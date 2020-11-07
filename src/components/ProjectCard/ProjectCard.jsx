import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectCard.css";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
            <Link className="project-wrapper" to={`/projects/${projectData.id}`}>
                <div className="project-wrapper-img">
                    <img src={projectData.image} altText = "Image"/>
                </div>
                
                <div className="project-wrapper-tittle">
                    <h3 id="1">{projectData.title}</h3>
                </div>
            </Link>
        </div>
    );
}

export default ProjectCard;