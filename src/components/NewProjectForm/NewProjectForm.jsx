import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

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
                history.push("/");
            });
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push("/");
        window.location.reload(true);
    };

    return (
        <div className="signup-wrapper">
            <form className="signup-form">
                <div className="signup-header">
                    <h2>Let's Create Your Fun Project</h2>
                    <Link id="Link" to={`/users`}>Please Sign Up If You Don't Have An Account </Link>
                </div>
                <div className="signup-main">
                    <label htmlFor="title">Project Title</label>
                    <input className="signup-main-1" type="text" id="title" onChange={handleProjectChange}/>
                </div>
                <div className="signup-main">
                    <label htmlFor="description">Description</label>
                    <input className="signup-main-1" type="text" id="description" onChange={handleProjectChange}/>
                </div>
                <div className="signup-main">
                    <label htmlFor="goal">Goal</label>
                    <input className="signup-main-1" type="number" id="goal" onChange={handleProjectChange}/>
                </div>
                <div className="signup-main">
                    <label htmlFor="image">Image</label>
                    <input className="signup-main-1" type="url" id="image" placeholder="Please Enter URL" onChange={handleProjectChange}/>
                </div>
                <div className="loggin-button">
                    <button class="submitButton" type="submit" onClick={handleProjectSubmit}>SUBMIT</button>
                    <button class="cancelButton" onClick={handleCancel}>CANCEL</button>
                </div>

            </form>
            <img className="signup-image" src="https://cdn.domestika.org/c_fill,dpr_auto,t_base_params.format_jpg/v1583431085/blog-post-covers/000/003/017/3017-original.jpg"/>
        </div>
        
    );
};

export default NewProjectForm;