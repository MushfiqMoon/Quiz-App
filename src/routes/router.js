import {
    createBrowserRouter,
} from "react-router-dom";
import QuizCategory from "../components/components/QuizCategory";
import CreateQuestions from "../components/components/CreateQuestions";
import { ErrorPage } from "../components/pages/ErrorPage";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Dashboard from "../layouts/Dashboard";
import Main from "../layouts/Main";
import Catagories from "../components/pages/Catagories";
import Question from "../components/pages/Question";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/catagories",
                element: <Catagories />,
            },
            {
                path: "/catagories/:name",
                element: <Question />,
            },
        ],

    },
    {
        path: "/dashbord",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashbord/add/questions",
                element: <CreateQuestions />,
            },
            {
                path: "/dashbord/add/category",
                element: <QuizCategory />,
            },
            
          
        ]
    }
]);