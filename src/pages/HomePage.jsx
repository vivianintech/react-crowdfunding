import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import VisionImage from "../media/vision-image.jpg";

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
            <div className="vision-text">
                <h1>Our Vision</h1>
                <p>In Vietnam, many children living in rural area or in poor families cannot afford to buy computers or laptops to study. This limits their ability to approach with internet, free education resources and other opportunities.
                My project aims to gather second hand computers/laptops and/or useful spare parts that can build up computers and laptops to bring 100 computers and laptops to those children in need of these modern devices.</p>
                <button>
                    <Link className="button" to="/project/create">Create Your Project</Link>
                </button>
            </div>
            <img src={VisionImage}/>
        </div>

        <div className="our-projects">
            <h1>Our Projects</h1>
        </div>
            
            <div className="project-list">
                {projectList.map((projectData, key) => {
                    return <ProjectCard key={key} projectData={projectData}/>;
                })}
            </div>
        
    </div>
    );
}

export default HomePage;