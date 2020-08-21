import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import LLS from "./LoginLogoutSignup";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Google Books Search</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to={process.env.PUBLIC_URL + "/"} style={{ paddingTop: "5px", paddingLeft: "9px", paddingBottom: "4px" }}>Search</Link>
                    <Link to={process.env.PUBLIC_URL + "/saved"} style={{ paddingTop: "5px", paddingLeft: "9px", paddingBottom: "4px" }}>Saved</Link>
                    <Link to={process.env.PUBLIC_URL + "/top"} style={{ paddingTop: "5px", paddingLeft: "9px", paddingBottom: "4px" }}>Ranking</Link>
                </Nav>
                <LLS />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;