import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function LoginControl() {
    const token = window.localStorage.getItem("token");
    const username = window.localStorage.getItem("username");

    const handleSignin = (e) => {
        e.preventDefault();
        window.location.href = "/login"
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        window.location.href = "/users"
    };

    const handleLogin = (e) => {
        e.preventDefault();
        window.location.href = `users/${username}`
    };
    
    const handleLogout = (e) => {
        e.preventDefault();
        window.localStorage.clear();
        window.location.href = "/"
    };
    
    if (token) {
        return (
            <div className="loggin-control">
                <Link onClick={handleLogin}><h4>{ username }</h4></Link>
                <Link onClick={handleLogout}>Logout</Link>
            </div>
        )
    }
    return (
        <div className="loggin-control">
            <Link onClick={handleSignUp}>Sign Up</Link>
            <Link onClick={handleSignin}>Sign In</Link>
        </div>
    )
};

export default LoginControl;