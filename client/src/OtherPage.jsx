import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <div style={{ textAlign: "center" }}>
            Im some other page!
            <Link to="/">Go back home</Link>
        </div>
    );
}