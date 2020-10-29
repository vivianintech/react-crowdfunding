import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function NewProjectForm() {

    return (
        <form>
            <div>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    placeholder="Enter Project"
                />
            </div>

            <button type="submit">
            Login
            </button>
        </form>
    )
}

export default NewProjectForm;