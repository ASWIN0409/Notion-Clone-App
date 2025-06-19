import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";

function PrivateRoute({children}) {

    const {user} = useContext(GlobalContext);
    
    return(
        user ? children : <Navigate to="/login" />
    );
}

export default PrivateRoute;