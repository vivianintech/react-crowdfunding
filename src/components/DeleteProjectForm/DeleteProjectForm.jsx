import React from 'react';
import { useHistory, Link } from "react-router-dom";

function ProjectPage() {

    const projectId = window.localStorage.getItem("projectId");

    const history = useHistory();

    const deleteProjectData = async () => {
        const token = window.localStorage.getItem("token")
        fetch(`${process.env.REACT_APP_API_URL}projects/${projectId}`,
        {
            method: "delete",
            headers: {
                "Authorization": `Token ${token}`
            }
        }
        )
    };

    const handleProjectDelete = (e) => {
            deleteProjectData().then((response) => {
                console.log(response);
                history.push("/projects");
            });
    };
    const handleProjectCancel = (e) => {
        history.push("/projects");
};

    return (
        <div className ="signup-wrapper">
            <form className="signup-form">
                <div className="signup-header">Are you sure you want to delete this project?</div>

                <div className="loggin-button">
                    <button class="submitButton" type="submit" onClick={handleProjectDelete}>Delete Project</button>
                    <button class="cancelButton" onClick={handleProjectCancel}>Keep This Project</button>
                </div>
                
            </form>

            <img className="signup-image" src="https://cdn.domestika.org/c_fill,dpr_auto,t_base_params.format_jpg/v1583431085/blog-post-covers/000/003/017/3017-original.jpg"/>
        </div>
        
    )
}

export default ProjectPage;