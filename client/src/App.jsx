import React from "react";
import {
    Outlet,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <>
            <header style={{ display: "flex", gap: "50px", justifyContent: "center"}}>
                <h1 style={{ paddingTop: "20px", paddingBottom: "20px" }}>Fib Calculator</h1>
                <Link to="/"><h2 style={{ fontSize: "20px"}}>Home</h2></Link>
                <Link to="/otherpage"><h2 style={{ fontSize: "20px"}}>Other Page</h2></Link>
            </header>
            <Outlet />
        </>
    );
}

export default App;