import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

function UserPage() {
    const [userData, setUserData] = useState({
        username: window.localStorage.getItem("username"),
        email:"",
        phone_number:"",
        address:""
    });

    const { username } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${username}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data)
        });
    });

    return (
        <div>
            <div>
                <h2>User Name: {userData.username}</h2>
                <h2>Email: {userData.email}</h2>
                <h2>Phone Number: {userData.phone_number}</h2>
                <h2>Address: {userData.address}</h2>
            </div>
            
            <div>
                <image src={userData.profile_image}/>
            </div>

        </div>
    )
};

export default UserPage;