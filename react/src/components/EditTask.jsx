import React from "react";
import { useParams } from "react-router-dom";

const EditTask = (props) => {
    let params = useParams();

    return (
        <>
            <h1>implementation tbd</h1>
            <p>This would edit task {params.tid} of project {params.pid}</p>
        </>
    )
}

export default EditTask;