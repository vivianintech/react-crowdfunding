import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function NewPledgeForm() {

    const projectId = window.localStorage.getItem("projectId");

    const [pledgeData, setPledgeData] = useState({
        amount: 0,
        comment: "",
        anonymous: false,
        project_id: `${projectId}`
    });
    

    const history = useHistory();

    const handleProjectChange = (e) => {
        const { id, value } = e.target;
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            [id]:value,
        }));
    };

    const postPledgeData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await
        fetch(`${process.env.REACT_APP_API_URL}pledges/`,
        {
            method: "post",
            headers: {
                "Authorization": `Token ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pledgeData),
        }
        );
        return response.json();
    };

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        if(pledgeData.amount && pledgeData.comment && pledgeData.anonymous && pledgeData.project_id) {
            postPledgeData().then((response) => {
                console.log(response);
                history.push("/");
            });
        }
    };

    return (
        <form>
            <div>
                <label htmlFor="amount">Project amount</label>
                <input type="text" id="amount" onChange={handleProjectChange}/>
            </div>
            <div>
                <label htmlFor="comment">comment</label>
                <input type="text" id="comment" onChange={handleProjectChange}/>
            </div>
            <div>
                <label htmlFor="anonymous">anonymous</label>
                <select type="boolean" id="anonymous" onChange={handleProjectChange}>
                    <option  value="" disabled selected>--Select an option--</option>
                    <option  value="true">Yes</option>
                    <option  value="false">No</option>
                </select>
            </div>

            <button type="submit" onClick={handleProjectSubmit}>Submit</button>
        </form>
    );
};

export default NewPledgeForm;