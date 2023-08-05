
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Shared/Sidebar";


const DashBoard = () => {
    return (
        <div>

            <Sidebar />
            <div className='lg:ml-[300px] '>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;