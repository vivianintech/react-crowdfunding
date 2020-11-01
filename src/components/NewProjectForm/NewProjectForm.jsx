import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewProjectForm() {
    const [projectData, setProjectData] = useState({
        title: "",
        description: "description",
        goal: 0,
        image:""
    });

    const history = useHistory();

    const handleProjectChange = (e) => {
        const { id, value } = e.target;
        setProjectData((prevProjectData) => ({
            ...prevProjectData,
            [id]:value,
        }));
    };

    const postProjectData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await
        fetch(`${process.env.REACT_APP_API_URL}projects/`,
        {
            method: "post",
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
            postProjectData().then((response) => {
                console.log(response);
                history.push("/projects");
            });
        }
    };

    return (
        <form>
            <div>
                <label htmlFor="title">Project Title</label>
                <input type="text" id="title" onChange={handleProjectChange}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" id="description" onChange={handleProjectChange}/>
            </div>
            <div>
                <label htmlFor="goal">Goal</label>
                <input type="number" id="goal" onChange={handleProjectChange}/>
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input type="url" id="image" placeholder="https://via.placeholder.com/300.jpg" onChange={handleProjectChange}/>
            </div>

            <button type="submit" onClick={handleProjectSubmit}>Submit</button>
        </form>
    );
};

export default NewProjectForm;