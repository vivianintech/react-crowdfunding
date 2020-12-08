import React, { useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username:"",
        password:"",
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value
        }));
    };
    
    const postData = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}api-token-auth/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
        });
        return response.json();
    };

    const { id } = useParams();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("username", credentials.username);
                history.push("/");
                window.location.reload(true);
            });
        }
    };

    const handleCancel = (e) => {
        e.preventDefault();
        history.push("/");
        window.location.reload(true);
    };

    return (
        <div className="loggin-wrapper">
            <form className="loggin-form">
                <div className="loggin-header">
                    <h2>Welcome Back!</h2>
                    <h2>Please Login To Continue</h2>
                </div>

                <div className="loggin-main">
                    <div className="loggin-main-1">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter username" 
                            onChange={handleChange}               
                        />
                    </div>

                    <div className="loggin-main-1">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter Password"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
                <div className="loggin-button">
                <button class="submitButton" type="submit" onClick={handleSubmit}>LOGIN</button>
                    <button class="cancelButton" onClick={handleCancel}>CANCEL</button>
                </div>

                <div className="redirect-link">
                    <Link id="Link">Reset Password</Link>
                    <Link id="Link" to={`/users`}>Sign Up</Link>
                </div>
                
            </form>
            <img className="loggin-image" src="https://cdn.domestika.org/c_fill,dpr_auto,t_base_params.format_jpg/v1583431085/blog-post-covers/000/003/017/3017-original.jpg"/>           
        </div>
        
    )
}

export default LoginForm;