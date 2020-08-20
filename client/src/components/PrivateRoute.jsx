import React from "react";
import { Route, Redirect } from "react-router-dom";
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
                        // <Redirect
                        //     to={{
                        //         pathname: "/login",
                        //         state: { from: location }
                        //     }}
                        // />
                    )
            }
        />
    );
}

export default PrivateRoute;