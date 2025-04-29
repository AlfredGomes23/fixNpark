import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <span className="loading loading-spinner loading-lg mx-auto justify-center flex min-h-screen text-secondary"></span>

    if(user?.email) return children;

    return <Navigate state={location.pathname} to='/signin-signup'></Navigate>;
};

export default PrivateRoutes;