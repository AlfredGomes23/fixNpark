import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../Pages/About";
import SigninSignup from "../Pages/SigninSignup";
import PrivateRoutes from "./PrivateRoutes";
import Parking from "../Pages/Parking";
import Services from "../Pages/Services";
import RequestParking from "../Pages/RequestParking";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/parkings',
                element: <PrivateRoutes>
                    <Parking></Parking>
                </PrivateRoutes>
            },
            {
                path: '/request-parking',
                element: <PrivateRoutes>
                    <RequestParking></RequestParking>
                </PrivateRoutes>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path: '/signin-signup',
                element: <SigninSignup></SigninSignup>
            },
        ]
    },
]);