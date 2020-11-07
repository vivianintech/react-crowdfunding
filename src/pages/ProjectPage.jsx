import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import moment from "moment";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            window.localStorage.setItem("projectId", id);
            setProjectData(data)
        });
    }, []);

    return (
        <div className="project-page-wrapper">
            <div className="project-data-wrapper">
                <div className="project-data">
                    <h1>{projectData.title}</h1>
                    <h2>Project mission: {projectData.description}</h2>
                    <h4>Created at: {moment(`${projectData.date_created}`).format('DD-MM-YYYY')}</h4>
                    <h3>{`Status: ${projectData.is_open}`}</h3>
                </div>

                <div className="project-pledge">
                    <h3>Pledges:</h3>
                    <ul>
                        {projectData.pledges.map((pledgeData) =>{
                            return (
                                <li>
                                    {pledgeData.amount} from {pledgeData.supporter}
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="related-actions">
                    <Link className="create-pledge" to={`/pledge/create`}>
                        Donate to the project <br></br>
                    </Link>

                    <Link className="update-project" to={`/project/update`}>
                        Update this project <br></br>
                    </Link>

                    <Link className="delete-project" to={`/project/delete`}>
                        Delete this project
                    </Link>
                </div>
            </div>
            
            <div className="project-image">
                <img src={projectData.image}/>
            </div>
        </div>
    )
}

export default ProjectPage;