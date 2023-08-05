import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { MyContext } from "../provider/AuthProvider";


const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(MyContext);


    if (loading) {
        return <div className="h-screen bg-white">
            <div className="flex justify-center items-center h-full">
                <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/signin" state={{ from: location }} replace />
};

export default PrivateRouter;