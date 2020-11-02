import React from "react";
import { Link } from "react-router-dom";

function LoginControl() {
    const token = window.localStorage.getItem("token");
    const username = window.localStorage.getItem("username")

    if (token) {
        return (
            <div className="user">
                <div className="user-img">
                    Imagee
                </div>

                <div className="user-name">
                    <Link to="users/:id"> { username } </Link>
                </div>
            </div>
        )
    }
    return (
        <div className="loggin">

        </div>
    )
};

export default LoginControl;

