import React from "react";
import { Route } from "react-router-dom";
import AuthService from "../utils/AuthService";

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                AuthService.getCurrentUser() ? (
                    children
                ) : (
                        <p>You need to login first</p>
                    )
            }
        />
    );
}

export default PrivateRoute;