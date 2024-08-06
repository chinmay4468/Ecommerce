import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ProductContext } from './ProductContext';

const ProtectedRoute = ({ children }) => {
    const { userAuthenticated } = useContext(ProductContext);

    if (!userAuthenticated) {
        // Redirect to login page if not authenticated
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
