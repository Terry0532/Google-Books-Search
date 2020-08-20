import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, NavItem } from "react-bootstrap";

function NavBar() {
    return (
        // <ul>
        //     <li>
        //         <Link to={process.env.PUBLIC_URL + "/"}>Search</Link>
        //     </li>
        //     <li>
        //         <Link to={process.env.PUBLIC_URL + "/protected"}>Saved</Link>
        //     </li>
        //     <li>
        //         <Link to={process.env.PUBLIC_URL + "/login"}>Login</Link>
        //     </li>
        // </ul>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Google Books Search</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to={process.env.PUBLIC_URL + "/"} style={{ paddingTop: "5px", paddingLeft: "9px", paddingBottom: "4px" }}>Search</Link>
                    <Link to={process.env.PUBLIC_URL + "/protected"} style={{ paddingTop: "5px", paddingLeft: "9px", paddingBottom: "4px" }}>Saved</Link>
                    <Link to={process.env.PUBLIC_URL + "/login"} style={{ paddingTop: "5px", paddingLeft: "9px", paddingBottom: "4px" }}>Login</Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;