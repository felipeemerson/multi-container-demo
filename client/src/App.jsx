import React from "react";
import {
    Outlet,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <>
            <header style={{ display: "flex", gap: "50px", justifyContent: "center"}}>
                <Link to="/"><h2 style={{ fontSize: "30px"}}>Home</h2></Link>
                <Link to="/otherpage"><h2 style={{ fontSize: "30px"}}>Other Page</h2></Link>
            </header>
            <Outlet />
        </>
    );
}

export default App;