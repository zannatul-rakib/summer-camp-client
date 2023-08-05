import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import InstructorDetails from "../pages/InstructorDetails/InstructorDetails";
import ClassDetails from "../pages/ClassDetails/ClassDetails";


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
                element: <InstructorDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/teachers/${params.id}`)
            },
            {
                path: "classes",
                element: <AllClasses />
            },
            {
                path: "/classes/:id",
                element: <ClassDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
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
    }
])