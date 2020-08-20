import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul>
            <li>
                <Link to={process.env.PUBLIC_URL + "/"}>Search</Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + "/protected"}>Saved</Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
            </li>
        </ul>
    );
}

export default Navbar;