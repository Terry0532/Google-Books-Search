import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/">Seach</Link>
            </li>
            <li>
                <Link to="/saved">Saved</Link>
            </li>
        </ul>
    );
}

export default Navbar;