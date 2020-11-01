import React from 'react';
import { useHistory } from "react-router-dom";

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

    return (
        <form>
            <div>something to test</div>
            <button type="submit" onClick={handleProjectDelete}>Delete Project</button>
        </form>
    )
}

export default ProjectPage;