import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";

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

    const handleCancel = (e) => {
        e.preventDefault();
        history.push("/");
        window.location.reload(true);
    };

    return (
        <div className ="signup-wrapper">
            <form className="signup-form">
                <div className="signup-header">
                    <h2>Update Your Project</h2>
                    <Link to="/login">Please Sign In To Continue</Link>
                </div>

                <div className="signup-main">
                    <div className="signup-main-1">
                        <label htmlFor="title">Project Title</label>
                        <input type="text" id="title" value={projectData.title} autoComplete="off" onChange={handleProjectChange}/>
                    </div>

                    <div className="signup-main-1">
                        <label htmlFor="description">Description</label>
                        <input type="text" id="description" value={projectData.description} autoComplete="off" onChange={handleProjectChange}/>
                    </div>

                    <div className="signup-main-1">
                        <label htmlFor="goal">Goal</label>
                        <input type="number" id="goal" value={projectData.goal} autoComplete="off" onChange={handleProjectChange}/>
                    </div>

                    <div className="signup-main-1">
                        <label htmlFor="image">Image</label>
                        <input type="url" id="image" value={projectData.image} autoComplete="off" onChange={handleProjectChange}/>
                    </div>
                </div>
                
                <div className="loggin-button">
                    <button class="submitButton" type="submit" onClick={handleProjectSubmit}>SUBMIT</button>
                    <button class="cancelButton" onClick={handleCancel}>CANCEL</button>
                </div>
            </form>
            <img className="signup-image" src="https://cdn.domestika.org/c_fill,dpr_auto,t_base_params.format_jpg/v1583431085/blog-post-covers/000/003/017/3017-original.jpg"/>

        </div>
        
    )
}

export default ProjectPage;