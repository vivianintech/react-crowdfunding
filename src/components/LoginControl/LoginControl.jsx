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
                <Link className="loggin-item" onClick={handleLogin}>{ username }</Link>
                <Link className="loggin-item" onClick={handleLogout}>LOG OUT</Link>
            </div>
        )
    }
    return (
        <div className="loggin-control">
            <Link className="loggin-item" onClick={handleSignUp}>SIGN UP</Link>
            <Link className="loggin-item" onClick={handleSignin}>SIGN IN</Link>
        </div>
    )
};

export default LoginControl;