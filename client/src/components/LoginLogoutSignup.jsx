import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import AuthService from "../utils/AuthService";
import Message from "../components/Message";

class LoginLogoutSignup extends React.Component {
    state = {
        username: "",
        passowrd: "",
        user: false
    }

    componentDidMount() {
        if (AuthService.getCurrentUser()) {
            this.setState({ user: true });
        }
    }

    handlePassword = e => {
        this.setState({ passowrd: e.target.value })
    }

    handleUsername = e => {
        this.setState({ username: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.username);
        console.log(this.state.passowrd);
        AuthService
            .login(this.state.username, this.state.passowrd)
            .then(() => this.setState({
                user: true,
                username: "",
                passowrd: ""
            }))
            .catch(err => {
                const info = [err.response.data.message, "danger", "animate__shakeX", "animate__fadeOut"]
                Message(info);
            });
    }

    handleLogout = () => {
        AuthService.logout();
        this.setState({ user: false });
    }

    validateForm = () => {
        return this.state.username.length > 0 && this.state.passowrd.length > 0;
    }

    render() {
        if (this.state.user) {
            return <Button onClick={this.handleLogout}>Logout</Button>;
        } else {
            return (
                <Form inline onSubmit={this.handleSubmit}>
                    <FormControl type="username" placeholder="Username" className="mr-sm-2" value={this.state.username} onChange={this.handleUsername} />
                    <FormControl type="password" placeholder="Password" className="mr-sm-2" value={this.state.passowrd} onChange={this.handlePassword} />
                    <Button variant="outline-success" type="submit" disabled={!this.validateForm()}>Login</Button>
                    <Button variant="outline-success" disabled={!this.validateForm()}>Signup</Button>
                </Form>
            )
        }
    }
}

export default LoginLogoutSignup;