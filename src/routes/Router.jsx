import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import InstructorDetails from "../pages/InstructorDetails/InstructorDetails";
import ClassDetails from "../pages/ClassDetails/ClassDetails";
import PrivateRouter from "./PrivateRouter";
import UserDashboard from "../pages/UserDasboard/UserDashboard";
import Cart from "../pages/UserDasboard/Cart";
import DashBoard from "../layouts/DasBoard";
import Payment from "../pages/Payment/Payment";
import AdminDashboard from "../pages/AdminDashBoard/AdminDashboard";
import ManageUser from "../pages/ManageUser/ManageUser";
import AddClass from "../pages/AddClass/AddClass";
import ManageClasses from "../pages/ManageClasses/ManageClasses";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "instructors",
                element: <Instructors />
            },
            {
                path: "/instructors/:id",
                element: <PrivateRouter> <InstructorDetails /></PrivateRouter>,
                loader: ({ params }) => fetch(`https://summercamp-yoga-server.vercel.app/teachers/${params.id}`)
            },
            {
                path: "classes",
                element: <AllClasses />
            },
            {
                path: "/classes/:id",
                element: <PrivateRouter><ClassDetails /></PrivateRouter>,
                loader: ({ params }) => fetch(`https://summercamp-yoga-server.vercel.app/classes/${params.id}`)
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/payment",
                element: <PrivateRouter><Payment /></PrivateRouter>
            },
            {
                path: "signin",
                element: <SignIn />
            },
            {
                path: "signup",
                element: <SignUp />
            },

        ]
    },
    {
        path: "dashboard",
        element: <PrivateRouter><DashBoard /></PrivateRouter>,
        children: [
            {
                path: 'user-home',
                element: <UserDashboard />
            },
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: 'admin-home',
                element: <AdminDashboard />
            },
            {
                path: 'manage-user',
                element: <ManageUser />
            },
            {
                path: 'add-class',
                element: <AddClass />
            },
            {
                path: 'manage-classes',
                element: <ManageClasses />
            },


        ]
    }

])