import { isAllowwedByRole, isAuthenticated, Role } from 'core/utils/Auth';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
    path: string;
    allowedRoutes?: Role[];
}

function PrivateRoute({ children, path, allowedRoutes }: Props) {
    return (
        <Route
            path={path}
            render={({ location }) => {
                if (!isAuthenticated()) {
                    return(
                        <Redirect
                            to={{
                                pathname: "/auth/login",
                                state: { from: location }
                            }}
                        />
                    )
                } else if (isAuthenticated() && !isAllowwedByRole(allowedRoutes)) {
                    return (
                        <Redirect to={{ pathname: "/admin" }} />
                    )
                }
                return children;
            }}
        />
    );
}

export default PrivateRoute;