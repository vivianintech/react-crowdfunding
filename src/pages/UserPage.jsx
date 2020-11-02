import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

function UserPage() {
    // const [userData, setUserData] = useState();
    const { id } = useParams();

    const initialUserData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`,
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

    const [userData, setUserData] = useState(initialUserData);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data)
        });
    }, []);

    return (
        <div>
            <div>
                <img src={userData.user_image}/>
            </div>
            
            <h2>User Name: {userData.username}</h2>
            <h2>Email: {userData.email}</h2>
            <h2>Address: {userData.address}</h2>
            <h2>Phone Number: {userData.phone_number}</h2>

        </div>
    )
}

export default UserPage;