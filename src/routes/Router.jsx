import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";


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

        ]
    }
])