import React from "react";
import { useParams } from "react-router-dom";

const CreateTask = (props) => {
    let params = useParams();

    return (
        <>
            <h1>implementation tbd</h1>
            <p>This would create a task in project {params.id}</p>
        </>
    )
}

export default CreateTask;