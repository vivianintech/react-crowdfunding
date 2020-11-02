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
        <div className="vision">
            <h1>Our Vision</h1>
            <p>In Vietnam, many children living in rural area or in poor families cannot afford to buy computers or laptops to study. This limits their ability to approach with internet, free education resources and other opportunities.
            My project aims to gather second hand computers/laptops and/or useful spare parts that can build up computers and laptops to bring 100 computers and laptops to those children in need of these modern devices.</p>
        </div>
        <div id="project-list">
                {projectList.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData}/>;
                })}
        </div>
    </div>
    );
}

export default HomePage;