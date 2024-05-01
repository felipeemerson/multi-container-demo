import React from "react";
import {
    Outlet,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <>
            <header style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <h1>Fib Calculator V2</h1>
                <div style={{ display: "flex", gap: "50px" }}>
                    <Link to="/"><h2 style={{ fontSize: "24px"}}>Home</h2></Link>
                    <Link to="/otherpage"><h2 style={{ fontSize: "24 px"}}>Other Page</h2></Link>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default App;