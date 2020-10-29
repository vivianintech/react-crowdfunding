import React, { useState, useEffect } from 'react';
import ProjectCard from "../components/ProjectCard/ProjectCard"

function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectList(data);
        })
    }, []);

    return (
      <div className="project-space">
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData}/>;
            })}
        </div>
      </div>
    );
}

export default HomePage;