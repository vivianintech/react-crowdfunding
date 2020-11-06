import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function LoginControl() {
    const token = window.localStorage.getItem("token");
    const username = window.localStorage.getItem("username");

    const handleLogout = (e) => {
        e.preventDefault();
        window.localStorage.clear();
        window.location.href = "/"
    };
    
    if (token) {
        return (
            <div className="loggin-control"> 
                <div className="navigation">
                    <Link to={`users/${username}`}><h4>{ username }</h4></Link>
                </div>

                <div class="navigation">
                    <Link onClick={handleLogout}>Logout</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="loggin-control">
            <div className="navigation">
                <Link>Sign Up</Link>
            </div>

            <div className="navigation">
                <Link to="/login">Sign In</Link>
            </div>
        </div>
    )
};

export default LoginControl;

