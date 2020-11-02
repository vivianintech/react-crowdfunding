import React from "react";
import { Link } from "react-router-dom";


function LoginControl() {
    const token = window.localStorage.getItem("token");
    const username = window.localStorage.getItem("username")

    if (token) {
        return (
            <div className="loggin-control"> 
                <div className="navigation">
                    <Link to={`users/${username}`}><h4>{ username }</h4></Link>
                </div>

                <div className="navigation">
                    <Link><h4>Log Out</h4></Link>
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
                <Link>Sign In</Link>
            </div>
        </div>
    )
};

export default LoginControl;

