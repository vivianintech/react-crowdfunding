import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

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
        <div>
            <h2>{projectData.title}</h2>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
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
            <Link className="create-pledge" to={`/pledge/create`}>
                Donate to the project
            </Link>

            <Link className="update-project" to={`/project/update`}>
                Update this project
            </Link>

            <Link className="delete-project" to={`/project/delete`}>
                Delete this project
            </Link>

        </div>
    )
}

export default ProjectPage;