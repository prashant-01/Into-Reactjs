import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div>
            { console.log(err) }
            <p>Something went wrong</p>
        </div>
    );
}

export default Error;