import { Navigate } from "react-router-dom";


const RouteProtected = ({children}) => {

    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('rol');

    if ( !token && rol != 'ADMIN' ) {
        return <Navigate to={'/404'} replace/>
    }
    
    return children;
}

export default RouteProtected;