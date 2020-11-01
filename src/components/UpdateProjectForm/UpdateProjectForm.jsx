import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function ProjectPage() {

    const projectId = window.localStorage.getItem("projectId");
    
    const initialProjectData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await
        fetch(`${process.env.REACT_APP_API_URL}projects/${projectId}`,
        {
            method: "get",
            headers: {
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        }
        );
        return response.json();
    };

    const [projectData, setProjectData] = useState(initialProjectData);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${projectId}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data)
        });
    }, []);

    const history = useHistory();

    const handleProjectChange = (e) => {
        const { id, value } = e.target;
        setProjectData((prevProjectData) => ({
            ...prevProjectData,
            [id]:value,
        }));
    };

    const putProjectData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await
        fetch(`${process.env.REACT_APP_API_URL}projects/${projectId}`,
        {
            method: "put",
            headers: {
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(projectData),
        }
        );
        return response.json();
    };

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        if(projectData.title && projectData.description && projectData.goal && projectData.image) {
            putProjectData().then((response) => {
                console.log(response);
                history.push("/projects");
            });
        }
    };

    return (
        <form>
            <div>
            <label htmlFor="title">Project Title</label>
                <input type="text" id="title" value={projectData.title} autoComplete="off" onChange={handleProjectChange}/>
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" value={projectData.description} autoComplete="off" onChange={handleProjectChange}/>
            </div>

            <div>
                <label htmlFor="goal">Goal</label>
                <input type="number" id="goal" value={projectData.goal} autoComplete="off" onChange={handleProjectChange}/>
            </div>

            <div>
                <label htmlFor="image">Image</label>
                <input type="url" id="image" value={projectData.image} autoComplete="off" onChange={handleProjectChange}/>
            </div>

            <button type="submit" onClick={handleProjectSubmit}>Update Project</button>
        </form>
    )
}

export default ProjectPage;