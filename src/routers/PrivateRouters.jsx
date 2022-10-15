import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';


const PrivateRouters = ({ auth }) => {
    if (localStorage.getItem('user')) {
        const { role } = localStorage.getItem('user');
        return role === '3' ? <Navigate to="/admin" replace /> : <Navigate to="/" replace />;
    }
    return auth ? <Navigate to="/" replace /> : <Outlet />;
};

export default PrivateRouters;