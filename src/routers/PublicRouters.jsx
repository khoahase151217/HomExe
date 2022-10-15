import { Outlet, Navigate } from 'react-router-dom';


const PublicRouters = ({ auth }) => {
    if (localStorage.getItem('user')) {
        const { role } = localStorage.getItem('user');
        return role === '2' ? <Navigate to="/admin" replace /> : <Navigate to="/" replace />;
    }
    return auth ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRouters;