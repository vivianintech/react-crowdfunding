import React, { useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import "./Nav.css";
import home from "./School.svg";
import home1 from "./Library.svg";
import home2 from "./Notes.svg";
import userImage from "./sitting-1.svg";
import LoginControl from "../LoginControl/LoginControl";

function Nav() {
    const token = window.localStorage.getItem("token");
    const username = window.localStorage.getItem("username");

    return (
        <div className="button-area">

            <div className="website-name">
                <p>{"{COMPUTEN}"}</p>
            </div>
            
            <div className="nav-link">

                <div className="img-text-wrapper">
                    
                    <div className="logo-wrapper">
                        <img src={ home }/>
                    </div>

                    <div className="home-button">
                        <Link className="nav-item" to="/">
                            HOME
                        </Link>
                    </div>

                    
                </div>

                <div className="img-text-wrapper">
                    
                    <div className="logo-wrapper">
                        <img src={ home1 }/>
                    </div>
                    
                    <div className="home-button">
                        <Link className="nav-item" to="/projects">PROJECTS</Link>
                    </div>
                    
                </div>
                

                <div className="img-text-wrapper">
                    
                    <div className="logo-wrapper">
                        <img src={ home2 }/>
                    </div>

                    <div className="home-button">
                        <Link className="nav-item" to="/contact">CONTACT</Link>
                    </div>
                    
                </div>
            </div>

            <div>
                <LoginControl />
            </div>
        
            <div className="user">
                <div className="user-img">
                    <img src={ userImage }/>
                </div>

                <div className="user-name">
                    <Link to="users/:id"> { username } </Link>
                </div>
            </div>
            
        </div>
    )
}
export default Nav;