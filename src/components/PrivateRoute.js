import React from 'react';
import { Route, Navigate } from 'react-router-dom'; 

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        element={localStorage.getItem('token') ? <Component {...rest} /> : <Navigate to="/login" />}
    />
);

export default PrivateRoute;
