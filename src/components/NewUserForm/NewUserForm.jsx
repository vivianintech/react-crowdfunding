import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NewUserForm.css";

function NewUserForm() {
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        phone_number: "",
        address: "",
        profile_image: "",
        password: ""
    });

    const history = useHistory();

    const handleUserChange = (e) => {
        const { id, value } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [id]:value,
        }));
    };

    const postUserData = async () => {
        const response = await
        fetch(`${process.env.REACT_APP_API_URL}users/`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }
        );
        return response.json();
    };

    const handleUserSubmit = (e) => {
        e.preventDefault();
        if(userData.username && userData.email && userData.phone_number && userData.address && userData.profile_image && userData.password) {
            postUserData().then((response) => {
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
                    <h2>Welcome To Computen!</h2>
                    <h2>Please Sign Up To Explore Our Website</h2>
                </div>

                <div className="signup-main">
                    <div className="signup-main-1">
                        <label htmlFor="username">User Name</label>
                        <input placeholder="Enter Username" type="text" id="username" onChange={handleUserChange}/>
                    </div>
                    <div className="signup-main-1">
                        <label htmlFor="email">Email</label>
                        <input placeholder="Enter Email" type="text" id="email" onChange={handleUserChange}/>
                    </div>
                    <div className="signup-main-1">
                        <label htmlFor="phone_number">Phone Number</label>
                        <input placeholder="Enter Phone Number" type="text" id="phone_number" onChange={handleUserChange}/>
                    </div>
                    <div className="signup-main-1">
                        <label htmlFor="address">Address</label>
                        <input placeholder="Enter Address" type="text" id="address" onChange={handleUserChange}/>
                    </div>
                    <div className="signup-main-1">
                        <label htmlFor="profile_image">Profile Image</label>
                        <input placeholder="Enter URL to your image" type="url" id="profile_image" onChange={handleUserChange}/>
                    </div>
                    <div className="signup-main-1">
                        <label htmlFor="password">Password</label>
                        <input placeholder="Enter Password" type="password" id="password" onChange={handleUserChange}/>
                    </div>
                </div>
                
                <div className="loggin-button">
                    <button class="submitButton" type="submit" onClick={handleUserSubmit}>SUBMIT</button>
                    <button class="cancelButton" onClick={handleCancel}>CANCEL</button>
                </div>
            </form>

            <img className="signup-image" src="https://cdn.domestika.org/c_fill,dpr_auto,t_base_params.format_jpg/v1583431085/blog-post-covers/000/003/017/3017-original.jpg"/>
        </div>
    );
};

export default NewUserForm;