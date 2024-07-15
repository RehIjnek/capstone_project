import React, { useState } from "react";
import { useAuth } from '../hooks/AuthContext';

const CreateProject = () => {
    // const { user } = useAuth();

    const [projectData, setProjectData] = useState({
        projId: 0,
        teamSize: 0,
        budget: 0,
        workload: 0,
        completionTime: "",
        tasks: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProjectData({
            ...projectData,
            [name]: value
        })
        // if (name in projectData.projId) {
        //     setProjectData({
        //         ...sockData,
        //         sockDetails: { ...sockData.sockDetails, [name]: value },
        //     });
        // } else if (name in sockData.additionalFeatures) {
        //     setSockData({
        //         ...sockData,
        //         additionalFeatures: {
        //             ...sockData.additionalFeatures,
        //             [name]: type === "checkbox" ? checked : value,
        //         },
        //     });
        // } else {
        //     setSockData({
        //         ...sockData,
        //         [name]: value,
        //     });
        // }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add the current timestamp
        const submission = {
            ...projectData
        };

        try {
            // TODO: Make a POST request to the API to add the sock
            const response = await fetch("http://localhost:3000/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(submission),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            // Handle post submission logic (like showing a success message)
        } catch (error) {
            console.error("Error posting data", error);
            // Handle errors here
        }
    };

    return (
        <div className="row">
            <div>
                {/* {user ? <h5>Welcome, {user.username}! Your UID is {user.uid}</h5> : <h1>Please log in.</h1>} */}
                Test
            </div>
            <div className="col-4">
                <form onSubmit={handleSubmit} className="p-3">
                    <div className="form-group">
                        <label htmlFor="projId">ProjectID</label>
                        <input
                            type="text"
                            id="projId"
                            name="projId"
                            value={projectData.projId}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Additional form groups for sock details */}
                    <div className="form-group">
                        <label htmlFor="teamSize">TeamSize</label>
                        <input
                            id="teamSize"
                            name="teamSize"
                            value={projectData.teamSize}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="budget">Budget</label>
                        <input
                            id="budget"
                            name="budget"
                            value={projectData.budget}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="workload">Workload</label>
                        <input
                            id="workload"
                            name="workload"
                            value={projectData.workload}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="completionTime">CompletionTime</label>
                        <input
                            id="completionTime"
                            name="completionTime"
                            value={projectData.completionTime}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateProject;