import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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

    return (
        <form>
            <div>
                <label htmlFor="username">User Name</label>
                <input type="text" id="username" onChange={handleUserChange}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={handleUserChange}/>
            </div>
            <div>
                <label htmlFor="phone_number">Phone Number</label>
                <input type="text" id="phone_number" onChange={handleUserChange}/>
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" onChange={handleUserChange}/>
            </div>
            <div>
                <label htmlFor="profile_image">Profile Image</label>
                <input type="url" id="profile_image" onChange={handleUserChange}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={handleUserChange}/>
            </div>

            <button type="submit" onClick={handleUserSubmit}>Submit</button>
        </form>
    );
};

export default NewUserForm;