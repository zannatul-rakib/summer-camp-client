import { useState } from 'react';
import { FaBarsProgress } from "react-icons/fa6"
import { Link } from 'react-router-dom';
// import useAdmin from '../../hooks/useAdmin';

const Sidebar = () => {
    const [isSubMenuVisible, setSubMenuVisible] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSubMenu = () => {
        setSubMenuVisible((prev) => !prev);
    };

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };
    // const [isAdmin] = useAdmin();
    const isAdmin = false;

    return (
        <>
            <span
                className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
                onClick={toggleSidebar}
            >
                <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
                <FaBarsProgress />
            </span>
            <div className={`fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${isSidebarOpen ? '' : 'hidden'}`}>
                <div className="text-gray-100 text-xl">
                    <div className="p-2.5 mt-1 flex items-center">
                        <Link to="/">
                            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Yoga Dashboard</h1>
                        </Link>
                        <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar}></i>
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>
                {
                    isAdmin ?
                        <>
                            <Link to="/dashboard/user-home">
                                <div
                                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <span className="text-[15px] ml-4 text-gray-200 font-bold"> Admin Home</span>
                                </div>
                            </Link>
                            <Link to="/dashboard/manage-user">
                                <div
                                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Manage User</span>
                                </div>
                            </Link>
                            <Link to="/dashboard/add-class">
                                <div
                                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Add Class</span>
                                </div>
                            </Link>
                            <Link to="/dashboard/manage-classes">
                                <div
                                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Manage Classes</span>
                                </div>
                            </Link>
                        </>
                        :
                        <>
                            <Link to="/dashboard/user-home">
                                <div
                                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <span className="text-[15px] ml-4 text-gray-200 font-bold">User Home</span>
                                </div>
                            </Link>
                            <Link to="/dashboard/cart">
                                <div
                                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Cart</span>
                                </div>
                            </Link>
                            <Link to="/dashboard/payment-history">
                                <div
                                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Payment History</span>
                                </div>
                            </Link>
                        </>
                }
                <div className="my-4 bg-gray-600 h-[1px]"></div>
                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                    onClick={toggleSubMenu}
                >
                    <i className="bi bi-chat-left-text-fill"></i>
                    <div className="flex justify-between w-full items-center">
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
                        <span className={`text-sm ${isSubMenuVisible ? 'rotate-180' : ''}`} id="arrow">
                            <i className="bi bi-chevron-down"></i>
                        </span>
                    </div>
                </div>
                {isSubMenuVisible && (
                    <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold" id="submenu">
                        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                            Classes
                        </h1>
                        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                            Instructor
                        </h1>
                        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                            Blog
                        </h1>
                    </div>
                )}
                <div
                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                >

                    <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
                </div>
            </div>

        </>
    );
};

export default Sidebar;
