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

    const handleCancel = (e) => {
        e.preventDefault();
        history.push("/");
        window.location.reload(true);
    };

    return (
        <div className ="signup-wrapper">
            <form className="signup-form">
                <div className="signup-header">
                    <h2>Thank You For Making Donation Today!</h2>
                </div>
                <div className="signup-main">
                    <div className="signup-main-1">
                        <label htmlFor="amount" >Donation Amount</label>
                        <input type="text" id="amount" placeholder="Amount in AUD" onChange={handleProjectChange}/>
                    </div>
                    <div className="signup-main-1">
                        <label htmlFor="comment">Your comment</label>
                        <input type="text" placeholder="Your Comment" id="comment" onChange={handleProjectChange}/>
                    </div>
                    <div className="signup-main-1">
                        <label htmlFor="anonymous">Would you like to be anonymous?</label>
                        <select className="dropdown" type="boolean" id="anonymous" onChange={handleProjectChange}>
                            <option  value="" disabled selected>--Select an option--</option>
                            <option  value="true">Yes</option>
                            <option  value="false">No</option>
                        </select>
                    </div>
                    <div className="loggin-button">
                        <button class="submitButton" type="submit" onClick={handleProjectSubmit}>SUBMIT</button>
                        <button class="cancelButton" onClick={handleCancel}>CANCEL</button>
                    </div>
                </div>
                
            </form>
            <img className="signup-image" src="https://cdn.domestika.org/c_fill,dpr_auto,t_base_params.format_jpg/v1583431085/blog-post-covers/000/003/017/3017-original.jpg"/>
        </div>
        
    );
};

export default NewPledgeForm;