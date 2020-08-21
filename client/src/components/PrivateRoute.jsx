import React from "react";
import { Route } from "react-router-dom";
import AuthService from "../utils/AuthService";
import { Col, Container, Row } from "react-bootstrap";

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                AuthService.getCurrentUser() ? (
                    children
                ) : (
                        <Container fluid>
                            <Row>
                                <Col></Col>
                                <Col md="8">
                                    <p>You need to login first</p>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    )
            }
        />
    );
}

export default PrivateRoute;