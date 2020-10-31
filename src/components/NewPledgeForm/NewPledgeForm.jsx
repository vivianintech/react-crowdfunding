import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewPledgeForm() {
    const [pledgeData, setPledgeData] = useState({
        amount: 0,
        comment: "",
        anonymous: false,
        project_id:""
    });

    const history = useHistory();

    const handleProjectChange = (e) => {
        const { id, value } = e.target;
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            [id]:value,
        }));
    };

    const postpledgeData = async () => {
        const token = window.localStorage.getItem("token")
        const response = await
        fetch(`${process.env.REACT_APP_API_URL}projects/`,
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
            postpledgeData().then((response) => {
                console.log(response);
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
                <input type="number" id="anonymous" onChange={handleProjectChange}/>
            </div>
            <div>
                <label htmlFor="project_id">project_id</label>
                <input type="url" id="project_id" placeholder="https://via.placeholder.com/300.jpg" onChange={handleProjectChange}/>
            </div>

            <button type="submit" onClick={handleProjectSubmit}>Submit</button>
        </form>
    );
};

export default NewPledgeForm;