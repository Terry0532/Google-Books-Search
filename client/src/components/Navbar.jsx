import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul>
            <li>
                <Link to={process.env.PUBLIC_URL + "/"}>Seach</Link>
            </li>
            <li>
                <Link to={process.env.PUBLIC_URL + "/saved"}>Saved</Link>
            </li>
        </ul>
    );
}

export default Navbar;