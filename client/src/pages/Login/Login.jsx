import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import AuthService from "../../utils/AuthService";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        AuthService.login(username, password).then(data => console.log(data));
    }

    function logout() {
        AuthService.logout();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" size="lg">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password" size="lg">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </Form.Group>
                <Button block size="lg" disabled={!validateForm()} type="submit">Login</Button>
            </Form>
            <Button onClick={logout}>Logout</Button>
        </div>
    );
}